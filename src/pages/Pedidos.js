import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Filtro } from "../components/Filtro";
import { getPedidos } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const dataFormatada = format(dateObject, "dd/MM/yyyy");
    return dataFormatada;
  };

  async function fetchPedidos() {
    try {
      const result = await getPedidos();
      setPedidos(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPedidos();
  }, []);

  useEffect(() => {}, [pedidos]);

  return (
    <>
      <Header title="Pedidos" />

      <div className="flex flex-col items-center justify-between bg-primary text-white px-4 gap-y-7 mb-8 rounded-b-lg">
        <Link
          state={{ tipoAnuncio: 2 }}
          to="/criar-pedido"
          className="flex w-full h-4 justify-end relative top-2 mb-4"
        >
          <FontAwesomeIcon
            icon={faPlus}
            className="bg-success p-3 rounded-full w-7 h-7"
          />
        </Link>
      </div>

      <main className="flex flex-col gap-y-7 pb-20">
        {pedidos.map((pedido, index) => (
          <Link
            to={`/pedido/${pedido.id}`}
            key={index}
            className="flex flex-col bg-div-gray rounded-2xl justify-center items-center drop-shadow-md px-9 pt-3 pb-11 mx-9 border border-[#807777]"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="bg-primary rounded-full w-6 h-6 p-2 text-white"
            />
            <h2 className="font-bold text-sm text-menu-gray mb-3">
              {pedido.nome}
            </h2>
            <p className="text-sm text-[#807777] font-medium">
              {pedido.titulo}
            </p>
            <p className="text-sm text-[#807777] font-medium">
              {formatDate(pedido.dataInicioDisponibilidade)} -{" "}
              {formatDate(pedido.dataFimDisponibilidade)}
            </p>
            <p className="text-sm text-[#807777] font-medium">
              {pedido.cidade}
            </p>
          </Link>
        ))}
      </main>
      <Navbar />
    </>
  );
}
