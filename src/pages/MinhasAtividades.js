import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { Agendados } from "./Agendados";
import { MeusAnuncios } from "./MeusAnuncios";
import { Historico } from "./Historico";

export function MinhasAtividades() {
  const [isActiveAgendados, setIsActiveAgendados] = useState(true);
  const [isActiveHistorico, setIsActiveHistorico] = useState(false);
  const [isActiveAnuncios, setIsActiveAnuncios] = useState(false);

  const handleClickAgendados = () => {
    setIsActiveAgendados(true);
    setIsActiveAnuncios(false);
    setIsActiveHistorico(false);
  };

  const handleClickHistorico = () => {
    setIsActiveHistorico(true);
    setIsActiveAnuncios(false);
    setIsActiveAgendados(false);
  };

  const handleClickAnuncios = () => {
    setIsActiveAnuncios(true);
    setIsActiveAgendados(false);
    setIsActiveHistorico(false);
  };

  return (
    <>
      <Header title="Minhas Atividades" />

      <main className="flex flex-col gap-y-7 h-screen">
        <header className="flex text-menu-gray pt-[3px] px-1 text-xs rounded-b-md bg-[#E6E4E4] font-semibold">
          <div
            className={`w-full text-center py-2 rounded-t-md ${
              isActiveAgendados ? "bg-white" : ""
            }`}
            onClick={handleClickAgendados}
          >
            Agendados
          </div>

          <div
            className={`w-full text-center py-2 rounded-t-md ${
              isActiveHistorico ? "bg-white" : ""
            }`}
            onClick={handleClickHistorico}
          >
            Histórico
          </div>

          <div
            className={`w-full text-center py-2 rounded-t-md ${
              isActiveAnuncios ? "bg-white" : ""
            }`}
            onClick={handleClickAnuncios}
          >
            Meus anúncios
          </div>
        </header>

        {isActiveAgendados && <Agendados />}
        {isActiveHistorico && <Historico />}
        {isActiveAnuncios && <MeusAnuncios />}
      </main>
      <Navbar />
    </>
  );
}
