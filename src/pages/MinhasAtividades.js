import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import {
  faBagShopping,
  faHandHoldingHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Agendados } from "./Agendados";
import { MeusAnuncios } from "./MeusAnuncios";
import { Historico } from "./Historico";

export function MinhasAtividades() {
  const [isActiveAgendados, setIsActiveAgendados] = useState(false);
  const [isActiveHistorico, setIsActiveHistorico] = useState(false);
  const [isActiveAnuncios, setIsActiveAnuncios] = useState(false);

  const handleClickAgendados = () => {
    setIsActiveAgendados(true);
  };

  const handleClickHistorico = () => {
    setIsActiveHistorico(true);
  };
  
  const handleClickAnuncios = () => {
    setIsActiveAnuncios(true);
  };

  return (
    <>
      <Header title="Minhas Atividades" />

      <main className="flex flex-col gap-y-7">
        <header className="flex text-menu-gray text-xs rounded-b-md bg-[#E6E4E4] font-semibold">
          <div
            className="w-full text-center py-2 rounded-t-md active:bg-white"
            onClick={handleClickAgendados}
          >
            Agendados
          </div>

          <div className="w-full text-center py-2 rounded-t-md active:bg-white" onClick={handleClickHistorico}>
            Histórico
          </div>

          <div className="w-full text-center py-2 rounded-t-md active:bg-white" onClick={handleClickAnuncios}>
            Meus anúncios
          </div>
        </header>

        <Agendados />
        {/* <MeusAnuncios />
        <Historico /> */}
      </main>
      <Navbar />
    </>
  );
}
