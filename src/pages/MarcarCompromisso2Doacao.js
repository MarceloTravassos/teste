import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { propostaDoacao } from "../api";
import { Message } from "../components/Message";
import { Error } from "../components/Error";

export function MarcarCompromisso2Doacao() {
  const location = useLocation();
  const navigate = useNavigate();

  const [dataInicio, horarioInicio] =
    location.state.doacao.dataInicioDisponibilidade.split(" ");
  const [dataFim, horarioFim] =
    location.state.doacao.dataFimDisponibilidade.split(" ");
  const [diaInicio, mesInicio, anoInicio] = dataInicio.split("/");
  const [diaFim, mesFim, anoFim] = dataFim.split("/");
  const [horaInicio, minutoInicio] = horarioInicio.split(":");
  const [horaFim, minutoFim] = horarioFim.split(":");
  const [dataAgendada, setDataAgendada] = useState("");
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  function formatDateISO(data) {
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const date = new Date(new Date(data).getTime() - tzoffset);
    const localISOTime = date.toISOString();
    return localISOTime;
  }

  async function criarProposta(e) {
    e.preventDefault();
    const dataAgendadaFormatada = formatDateISO(dataAgendada);

    const body = {
      dataAgendada: dataAgendadaFormatada,
      idAnuncio: location.state.doacao.id,
      itemPropostaRequestDtoList: location.state.itemPropostaRequestDtoList,
    };

    try {
      await propostaDoacao(body);
      setPopup(true);
    } catch (error) {
      setError(error.response.data.detail);
      setErrorPopup(true);
    }
  }

  return (
    <>
      <Header title="Doações" />
      <main className="h-screen">
        {errorPopup && (
          <Error error={error} onClick={() => setErrorPopup(false)} />
        )}

        {popup && (
          <Message
            message="Proposta criada com sucesso!"
            onClick={() => navigate("/home")}
          />
        )}

        <form
          onSubmit={criarProposta}
          className="flex flex-col mx-9 my-3 h-fit pb-20"
        >
          <h1 className="text-menu-gray font-medium mb-1">Disponibilidade</h1>
          <div className="text-menu-gray text-opacity-80 mb-2">
            <p>
              {`${diaInicio}/${mesInicio}/${anoInicio}`} -{" "}
              {`${diaFim}/${mesFim}/${anoFim}`}
            </p>
            <p>
              {`${horaInicio}:${minutoInicio}`} - {`${horaFim}:${minutoFim}`}
            </p>
          </div>

          <div>
            <div>
              <h1 className="text-menu-gray font-medium mb-1">Dia/horário</h1>
              <FormInput
                onChange={(e) => setDataAgendada(e.target.value)}
                value={dataAgendada}
                className="w-full"
                name="dataInicio"
                type="datetime-local"
                id="dataInicio"
              />
            </div>
          </div>

          <hr className="my-4" />

          <h1 className="text-lg text-menu-gray font-medium mb-1">
            Local de encontro
          </h1>

          <FormLabel name="cep">CEP</FormLabel>
          <FormInput
            disabled
            value={location.state.doacao.cep}
            name="cep"
            type="text"
            id="cep"
          />

          <FormLabel name="endereco">Endereço</FormLabel>
          <FormInput
            disabled
            value={location.state.doacao.logradouro}
            name="endereco"
            type="text"
            id="endereco"
          />

          <FormLabel name="pontoReferencia">Ponto de Referência</FormLabel>
          <FormInput
            disabled
            value={location.state.doacao.pontoReferencia}
            className="w-full"
            name="pontoReferencia"
            type="text"
            id="pontoReferencia"
          />

          <hr className="my-4" />

          <h1 className="text-lg text-menu-gray font-medium mb-1">Contato</h1>

          <FormLabel name="cellphone">Telefone</FormLabel>
          <FormInput
            disabled
            value={location.state.doacao.telefone}
            name="cellphone"
            type="text"
            id="cellphone"
          />

          <button
            type="submit"
            className="mt-4 mb-20 bg-primary px-16 py-2 rounded-lg font-bold text-center text-white text-xl w-fit mx-auto"
          >
            Finalizar
          </button>
        </form>
      </main>
      <Navbar />
    </>
  );
}
