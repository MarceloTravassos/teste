import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { propostaDoacaoRapida } from "../api";

export function MarcarCompromisso2DoacaoRapida() {
  const location = useLocation();

  const [dataInicio, horarioInicio] =
    location.state.doacaoRapida.dataInicioDisponibilidade.split(" ");
  const [dataFim, horarioFim] =
    location.state.doacaoRapida.dataFimDisponibilidade.split(" ");
  const [diaInicio, mesInicio, anoInicio] = dataInicio.split("/");
  const [diaFim, mesFim, anoFim] = dataFim.split("/");
  const [horaInicio, minutoInicio] = horarioInicio.split(":");
  const [horaFim, minutoFim] = horarioFim.split(":");

  const [dataAgendada, setDataAgendada] = useState("");

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
      idAnuncio: location.state.doacaoRapida.id,
      itemPropostaRequestDtoList: location.state.itemPropostaRequestDtoList,
    };

    try {
      await propostaDoacaoRapida(body);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header title="Doações" />
      <main className="h-screen">
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
            value={location.state.doacaoRapida.cep}
            name="cep"
            type="text"
            id="cep"
          />

          <FormLabel name="endereco">Endereço</FormLabel>
          <FormInput
            disabled
            value={location.state.doacaoRapida.logradouro}
            name="endereco"
            type="text"
            id="endereco"
          />

          <FormLabel name="pontoReferencia">Ponto de Referência</FormLabel>
          <FormInput
            disabled
            value={location.state.doacaoRapida.pontoReferencia}
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
            value={location.state.doacaoRapida.telefone}
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
