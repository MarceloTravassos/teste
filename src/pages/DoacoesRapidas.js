import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Filtro } from "../components/Filtro";
import { useEffect, useState } from "react";
import { getDoacoesRapidas } from "../api";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export function DoacoesRapidas() {
  const [doacoesRapidas, setDoacoesRapidas] = useState([]);

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const dataFormatada = format(dateObject, "dd/MM/yyyy");
    return dataFormatada;
  };

  async function fetchDoacoesRapidas() {
    try {
      const result = await getDoacoesRapidas();
      setDoacoesRapidas(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDoacoesRapidas();
  }, []);

  useEffect(() => {}, [doacoesRapidas]);

  return (
    <>
      <Header title="Doações Rápidas" />

      <div className="flex flex-col items-center justify-between bg-primary text-white py-2 px-4 gap-y-7 mb-8 rounded-b-lg">
        <div className="flex items-center">
          <Filtro tipo="Doador" />
        </div>
        <Link
          state={{ tipoAnuncio: 3 }}
          to="/criar-doacao-rapida"
          className="flex w-full h-4 justify-end relative top-2 mb-4"
        >
          <FontAwesomeIcon
            icon={faPlus}
            className="bg-success p-3 rounded-full w-7 h-7"
          />
        </Link>
      </div>

      <main className="flex flex-col gap-y-7 h-screen">
        {doacoesRapidas.map((doacaoRapida, index) => (
          <Link
            to={`/doacoao-rapida/${doacaoRapida.id}`}
            key={index}
            className="flex flex-col bg-div-gray rounded-2xl justify-center items-center drop-shadow-md px-9 pt-3 pb-11 mx-9 border border-[#807777]"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="bg-primary rounded-full w-6 h-6 p-2 text-white"
            />
            <h2 className="font-bold text-sm text-menu-gray mb-3">
              {doacaoRapida.nome}
            </h2>
            <p className="text-sm text-[#807777] font-medium">
              {doacaoRapida.titulo}
            </p>
            <p className="text-sm text-[#807777] font-medium">
              {formatDate(doacaoRapida.dataInicioDisponibilidade)} -{" "}
              {formatDate(doacaoRapida.dataFimDisponibilidade)}
            </p>
            <p className="text-sm text-[#807777] font-medium">
              {doacaoRapida.cidade}
            </p>
          </Link>
        ))}
      </main>
      <Navbar />
    </>
  );
}
