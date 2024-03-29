import { useEffect, useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { Header } from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { consultaCep, updateMeuAnuncio } from "../api";
import { Error } from "../components/Error";
import { Navbar } from "../components/Navbar";

export function MeuAnuncio2() {
  const location = useLocation();
  const navigate = useNavigate();

  const formatDateForInput = (dateString) => {
    if (!dateString) {
      return null;
    }

    const [datePart, timePart] = dateString.split(" ");
    const [day, month, year] = datePart.split("/");
    const [hour, minute, second] = timePart.split(":");

    const formattedDate = new Date(year, month - 1, day, hour, minute, second);

    const tzoffset = formattedDate.getTimezoneOffset() * 60000;
    const localISOTime = new Date(formattedDate - tzoffset).toISOString();

    const dataFormatada = localISOTime.slice(0, -1);

    return dataFormatada;
  };

  const [dataInicioDisponibilidade, setDataInicioDisponibilidade] = useState(
    formatDateForInput(location.state.dataInicioDisponibilidade)
  );
  const [dataFimDisponibilidade, setDataFimDisponibilidade] = useState(
    formatDateForInput(location.state.dataFimDisponibilidade)
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
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

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
    <>
      <main className="min-h-screen pb-20">
        <Header title="Meus anúncios" />
        {errorPopup && (
          <Error error={error} onClick={() => setErrorPopup(false)} />
        )}

        <form onSubmit={update} className="flex flex-col mx-9 my-3">
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
            Adicione o período em dias e horas que você terá disponibilidade
            para entregar os produtos do seu anúncio
          </p>

          <h1 className="text-menu-gray font-medium mb-1">Dias e horários disponíveis</h1>
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
      <Navbar />
    </>
  );
}
