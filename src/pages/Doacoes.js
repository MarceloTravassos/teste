import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Filtro } from "../components/Filtro";
import { getDoacoes } from "../api";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export function Doacoes() {
  const [doacoes, setDoacoes] = useState([]);

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const dataFormatada = format(dateObject, "dd/MM/yyyy");
    return dataFormatada;
  };

  async function fetchDoacoes() {
    try {
      const result = await getDoacoes();
      setDoacoes(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDoacoes();
  }, []);

  useEffect(() => {}, [doacoes]);

  return (
    <>
      <Header title="Doações" />

      <div className="flex flex-col items-center justify-between bg-primary text-white py-2 px-4 gap-y-7 mb-8 rounded-b-lg">
        <div className="flex items-center">
          <Filtro tipo="Doador" />
        </div>

        <div className="flex w-full h-4 justify-end relative top-2 mb-4">
          <FontAwesomeIcon
            icon={faPlus}
            className="bg-success p-3 rounded-full w-7 h-7"
          />
        </div>
      </div>

      <main className="flex flex-col gap-y-7 h-screen">
        {doacoes.map((doacao, index) => (
          <Link
            to={`/doacao/${doacao.id}`}
            key={index}
            className="flex flex-col bg-div-gray rounded-2xl justify-center items-center drop-shadow-md px-9 pt-3 pb-11 mx-9 border border-[#807777]"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="bg-primary rounded-full w-6 h-6 p-2 text-white"
            />
            <h2 className="font-bold text-sm text-menu-gray mb-3">
              {doacao.nome}
            </h2>
            <p className="text-sm text-[#807777] font-medium">
              {doacao.titulo}
            </p>
            <p className="text-sm text-[#807777] font-medium">
              {formatDate(doacao.dataInicioDisponibilidade)} -{" "}
              {formatDate(doacao.dataFimDisponibilidade)}
            </p>
            <p className="text-sm text-[#807777] font-medium">
              {doacao.cidade}
            </p>
          </Link>
        ))}
      </main>
      <Navbar />
    </>
  );
}
