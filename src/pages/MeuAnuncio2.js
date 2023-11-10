import { useEffect, useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { Header } from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { consultaCep, updateMeuAnuncio } from "../api";
import { Error } from "../components/Error";

export function MeuAnuncio2() {
  const location = useLocation();
  const navigate = useNavigate();

  const [dataInicioDisponibilidade, setDataInicioDisponibilidade] = useState(
    location.state.dataInicioDisponibilidade
  );
  const [dataFimDisponibilidade, setDataFimDisponibilidade] = useState(
    location.state.dataFimDisponibilidade
  );
  const [cep, setCep] = useState(location.state.cep);
  const [logradouro, setLogradouro] = useState(location.state.logradouro);
  const [numero, setNumero] = useState(location.state.numero);
  const [complemento, setComplemento] = useState(location.state.complemento);
  const [pontoReferencia, setPontoReferencia] = useState(
    location.state.pontoReferencia
  );
  const [uf, setUf] = useState(location.state.uf);
  const [cidade, setCidade] = useState(location.state.cidade);
  const [bairro, setBairro] = useState(location.state.bairro);
  const [consulta, setConsulta] = useState("");
  const [popup, setPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [error, setError] = useState("");

  async function update(e) {
    e.preventDefault();

    const body = {
      ...location.state,
      dataInicioDisponibilidade: formatDateISO(dataInicioDisponibilidade),
      dataFimDisponibilidade: formatDateISO(dataFimDisponibilidade),
      cep: formatCEP(cep),
      logradouro,
      numero,
      complemento,
      pontoReferencia,
      uf,
      cidade,
      bairro,
      telefone: formatPhoneNumber(location.state.telefone),
      listaItens: location.state.itemList,
    };

    if ("itemList" in body) delete body.itemList;

    try {
      await updateMeuAnuncio(body, location.state.id);
      setPopup(true);
    } catch (error) {
      setError(error.response.data.detail);
      setErrorPopup(true);
    }
  }

  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
    return formattedDate;
  };

  function formatDateISO(data) {
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const date = new Date(new Date(data).getTime() - tzoffset);
    const localISOTime = date.toISOString();
    return localISOTime;
  }

  function redirectToHome() {
    setPopup(false);
    return navigate("/home");
  }

  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/\D/g, "");
  };

  const formatCEP = (cep) => {
    return cep.replace(/\D/g, "");
  };

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
    <main>
      <Header title="Meus anúncios" />

      {errorPopup && (
        <Error error={error} onClick={() => setErrorPopup(false)} />
      )}

      <form onSubmit={update} className="flex flex-col mx-9 my-3 mb-20">
        {popup && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div
              className="flex flex-col text-menu-gray leading-tight font-medium w-4/5 bg-white border-[2.5px] border-light-gray
              px-6 py-5 rounded-lg shadow-md justify-center"
            >
              <h1 className="mb-4 text-lg text-center">
                Anúncio modificado com sucesso!
              </h1>
              <button
                className="mt-4 mx-auto w-fit md:w-64 px-16 py-2 font-bold text-sm bg-primary text-white rounded-md"
                onClick={redirectToHome}
              >
                Retornar
              </button>
            </div>
          </div>
        )}

        <h1 className="text-menu-gray font-medium mb-1">Disponibilidade</h1>
        <p className="text-xs text-menu-gray text-opacity-80 mb-2">
          Adicione o período em dias e horas que você terá disponibilidade para
          entregar os produtos do seu anúncio
        </p>

        <h1 className="text-menu-gray font-medium mb-1">Dias Disponíveis</h1>
        <FormInput
          onChange={(e) => setDataInicioDisponibilidade(e.target.value)}
          value={formatDateForInput(dataInicioDisponibilidade)}
          name="dataInicio"
          type="datetime-local"
          id="dataInicio"
        />
        <FormInput
          onChange={(e) => setDataFimDisponibilidade(e.target.value)}
          value={formatDateForInput(dataFimDisponibilidade)}
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
              type="text"
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

        <button className="rounded-md mx-auto bg-primary text-white text-xl font-bold px-14 py-2 w-fit my-4">
          Finalizar
        </button>
      </form>
    </main>
  );
}
