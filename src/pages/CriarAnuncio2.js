import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultaCep, postDoacao } from "../api";

export function CriarAnuncio2() {
  const location = useLocation();

  const [dataInicioDisponibilidade, setDataInicioDisponibilidade] =
    useState("");
  const [dataFimDisponibilidade, setDataFimDisponibilidade] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [pontoReferencia, setPontoReferencia] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [consulta, setConsulta] = useState("");

  function formatDateISO(data) {
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const date = new Date(new Date(data).getTime() - tzoffset);
    const localISOTime = date.toISOString();
    return localISOTime;
  }

  async function cadastrarAnuncio(e) {
    e.preventDefault();
    const dataInicioFormatada = formatDateISO(dataInicioDisponibilidade);
    const dataFimFormatada = formatDateISO(dataFimDisponibilidade);

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
    await postDoacao(body);
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

  useEffect(() => {
    console.log(dataInicioDisponibilidade);
  }, [dataInicioDisponibilidade]);

  return (
    <>
      <Header title="Doações" />

      <form className="flex flex-col mx-9 my-3">
        <h1 className="text-menu-gray font-medium mb-1">Disponibilidade</h1>
        <p className="text-xs text-menu-gray text-opacity-80 mb-2">
          Adicione o período em dias e horas que você terá disponibilidade para
          entregar os produtos do seu anúncio
        </p>

        <h1 className="text-menu-gray font-medium mb-1">
          Dias e horários disponíveis
        </h1>
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
          placeholder="0000000"
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
