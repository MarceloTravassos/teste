import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { Agendados } from "./Agendados";
import { MeusAnuncios } from "./MeusAnuncios";
import { Historicos } from "./Historicos";
import { Pendentes } from "./Pendentes";
import {
  getAgendados,
  getHistoricos,
  getMeusAnuncios,
  getPendentes,
} from "../api";

export function MinhasAtividades() {
  const [isActiveAgendados, setIsActiveAgendados] = useState(true);
  const [isActivePendentes, setIsActivePendentes] = useState(false);
  const [isActiveHistorico, setIsActiveHistorico] = useState(false);
  const [isActiveAnuncios, setIsActiveAnuncios] = useState(false);
  const [agendados, setAgendados] = useState([]);
  const [pendentes, setPendentes] = useState([]);
  const [meusAnuncios, setMeusAnuncios] = useState([]);
  const [historicos, setHistoricos] = useState([]);

  const handleClickAgendados = () => {
    setIsActiveAgendados(true);
    setIsActivePendentes(false);
    setIsActiveAnuncios(false);
    setIsActiveHistorico(false);
  };

  const handleClickPendentes = () => {
    setIsActivePendentes(true);
    setIsActiveAnuncios(false);
    setIsActiveAgendados(false);
    setIsActiveHistorico(false);
  };

  const handleClickHistorico = () => {
    setIsActiveHistorico(true);
    setIsActiveAnuncios(false);
    setIsActiveAgendados(false);
    setIsActivePendentes(false);
  };

  const handleClickAnuncios = () => {
    setIsActiveAnuncios(true);
    setIsActiveAgendados(false);
    setIsActiveHistorico(false);
    setIsActivePendentes(false);
  };

  async function fetchAgendados() {
    try {
      const resultAgendados = await getAgendados();
      setAgendados(resultAgendados);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMeusAnuncios() {
    try {
      const resultMeusAnuncios = await getMeusAnuncios();
      setMeusAnuncios(resultMeusAnuncios);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPendentes() {
    try {
      const resultPendentes = await getPendentes();
      setPendentes(resultPendentes);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchHistoricos() {
    try {
      const resultHistoricos = await getHistoricos();
      setHistoricos(resultHistoricos);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAgendados();
    fetchMeusAnuncios();
    fetchPendentes();
    fetchHistoricos();
  }, []);

  return (
    <>
      <Header title="Minhas Atividades" />

      <main className="flex flex-col gap-y-7 h-screen">
        <button type="button" onClick={() => console.log(meusAnuncios)}>
          oiiii
        </button>

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
              isActivePendentes ? "bg-white" : ""
            }`}
            onClick={handleClickPendentes}
          >
            Pendentes
          </div>

          <div
            className={`w-full text-center py-2 rounded-t-md ${
              isActiveAnuncios ? "bg-white" : ""
            }`}
            onClick={handleClickAnuncios}
          >
            Meus anúncios
          </div>

          <div
            className={`w-full text-center py-2 rounded-t-md ${
              isActiveHistorico ? "bg-white" : ""
            }`}
            onClick={handleClickHistorico}
          >
            Histórico
          </div>
        </header>

        {isActiveAgendados && <Agendados agendados={agendados} />}
        {isActivePendentes && <Pendentes pendentes={pendentes} />}
        {isActiveAnuncios && <MeusAnuncios meusAnuncios={meusAnuncios} />}
        {isActiveHistorico && <Historicos historicos={historicos} />}
      </main>
      <Navbar />
    </>
  );
}
