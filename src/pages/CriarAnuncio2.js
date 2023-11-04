import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultaCep, postDoacao, postDoacaoRapida, postPedido } from "../api";
import { Message } from "../components/Message";

const titles = {
  1: "Doação",
  2: "Pedido",
  3: "Doação Rápida",
};

export function CriarAnuncio2() {
  const location = useLocation();
  const navigate = useNavigate();

  const [dataInicioDisponibilidade, setDataInicioDisponibilidade] =
    useState(new Date());
  const [dataFimDisponibilidade, setDataFimDisponibilidade] = useState(new Date());
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [pontoReferencia, setPontoReferencia] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [consulta, setConsulta] = useState("");
  const [popup, setPopup] = useState(false);

  function formatDateISO(data) {
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const date = new Date(new Date(data).getTime() - tzoffset);
    const localISOTime = date.toISOString();
    return localISOTime;
  }

  function formatarDataComHorario(data) {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // O mês começa do zero
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, "0");
    const minuto = String(data.getMinutes()).padStart(2, "0");

    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
  }

  async function cadastrarAnuncio(e) {
    e.preventDefault();
    let dataInicioFormatada = formatDateISO(dataInicioDisponibilidade);
    let dataFimFormatada = formatDateISO(dataFimDisponibilidade);

    if (location.state.tipoAnuncio === 3) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      dataInicioFormatada = today.toISOString();
      dataFimFormatada = tomorrow.toISOString();
    }

    const body = {
      titulo: location.state.titulo,
      listaItens: location.state.listaItens,
      dataInicioDisponibilidade: dataInicioFormatada,
      dataFimDisponibilidade: dataFimFormatada,
      cep,
      uf,
      cidade,
      bairro,
      logradouro,
      numero: parseInt(numero),
      complemento,
      pontoReferencia,
    };

    switch (location.state.tipoAnuncio) {
      case 1:
        try {
          await postDoacao(body);
          setPopup(true);
        } catch (error) {
          console.log(error);
        }
        break;

      case 2:
        try {
          await postPedido(body);
          setPopup(true);
        } catch (error) {
          console.log(error);
        }
        break;

      case 3:
        try {
          await postDoacaoRapida(body);
          setPopup(true);
        } catch (error) {
          console.log(error);
        }
        break;

      default:
        console.log("Nenhum tipo de anúncio selecionado!");
        break;
    }
  }

  useEffect(() => {
    if (consulta) {
      clearTimeout(consulta);
    }

    setConsulta(
      setTimeout(async () => {
        try {
          const response = await consultaCep(cep);
          setUf(response.state);
          setCidade(response.city);
          setLogradouro(response.street);
          setBairro(response.neighborhood);
        } catch (error) {
          console.log(error);
        }
      }, 1000)
    );

    return () => {
      if (consulta) {
        clearTimeout(consulta);
      }
    };
  }, [cep]);

  return (
    <>
      <Header title={titles[location.state.tipoAnuncio]} />

      {popup && (
        <Message
          message="Anúncio criado com sucesso!"
          onClick={() => navigate("/home")}
        />
      )}

      <form className="flex flex-col mx-9 my-3">
        <h1 className="text-menu-gray font-medium mb-1">Disponibilidade</h1>
        {location.state.tipoAnuncio === 3 ? (
          <p className="text-xs text-menu-gray text-opacity-80 mb-2">
            Por se tratar de uma doação rápida, os dias disponíveis serão hoje e
            amanhã.
          </p>
        ) : (
          <p className="text-xs text-menu-gray text-opacity-80 mb-2">
            Adicione o período em dias e horas que você terá disponibilidade
            para entregar os produtos do seu anúncio
          </p>
        )}

        <h1 className="text-menu-gray font-medium mb-1">
          Dias e horários disponíveis
        </h1>
        {location.state.tipoAnuncio === 3 ? (
          <>
            <p className="bg-primary bg-opacity-20 py-2 px-1 rounded-md mb-2">
              {formatarDataComHorario(new Date())}
            </p>
            <p className="bg-primary bg-opacity-20 py-2 px-1 rounded-md">
              {formatarDataComHorario(
                new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
              )}
            </p>
          </>
        ) : (
          <>
            <FormInput
              onChange={(e) => setDataInicioDisponibilidade(e.target.value)}
              value={dataInicioDisponibilidade}
              name="dataInicio"
              type="datetime-local"
              id="dataInicio"
            />
            <FormInput
              onChange={(e) => setDataFimDisponibilidade(e.target.value)}
              value={dataFimDisponibilidade}
              name="dataFim"
              type="datetime-local"
              id="dataFim"
            />
          </>
        )}

        <hr className="my-4" />

        <h1 className="text-menu-gray font-medium mb-1">Local de entrega</h1>
        <p className="text-xs text-menu-gray text-opacity-80 mb-2">
          Adicione aqui o local que você gostaria de se encontrar com os
          interessados para a transação dos itens do anúncio
        </p>

        <FormLabel name="cep">CEP</FormLabel>
        <FormInput
          onChange={(e) => setCep(e.target.value)}
          value={cep}
          name="cep"
          type="text"
          id="cep"
        />

        <FormLabel name="logradouro">Endereço</FormLabel>
        <FormInput
          onChange={(e) => setLogradouro(e.target.value)}
          value={logradouro}
          name="logradouro"
          type="text"
          id="logradouro"
        />

        <div className="flex gap-4">
          <div className="w-2/4">
            <FormLabel name="numero">Número</FormLabel>
            <FormInput
              onChange={(e) => setNumero(e.target.value)}
              value={numero}
              className="w-full"
              name="numero"
              type="number"
              id="numero"
            />
          </div>

          <div className="w-2/4">
            <FormLabel name="complemento">Complemento</FormLabel>
            <FormInput
              onChange={(e) => setComplemento(e.target.value)}
              value={complemento}
              className="w-full"
              name="complemento"
              type="text"
              id="complemento"
            />
          </div>
        </div>

        <FormLabel name="pontoReferencia">Ponto de Referência</FormLabel>
        <FormInput
          onChange={(e) => setPontoReferencia(e.target.value)}
          value={pontoReferencia}
          className="w-full"
          name="pontoReferencia"
          type="text"
          id="pontoReferencia"
        />

        <button
          onClick={cadastrarAnuncio}
          type="submit"
          className="mt-4 mb-20 bg-primary px-16 py-2 rounded-lg font-bold text-center text-white text-xl w-fit mx-auto"
        >
          Finalizar
        </button>
      </form>
      <Navbar />
    </>
  );
}
