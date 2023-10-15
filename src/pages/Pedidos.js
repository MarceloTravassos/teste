import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Filtro } from "../components/Filtro";
import { getPedidos } from "../api";
import { useEffect, useState } from "react";

export function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

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

      <div className="flex flex-col items-center justify-between bg-primary text-white py-2 px-4 gap-y-7 mb-8 rounded-b-lg">
        <div className="flex items-center">
          <Filtro tipo="Pedidor" />
        </div>
        <div className="flex w-full h-4 justify-end relative top-2 mb-4">
          <FontAwesomeIcon
            icon={faPlus}
            className="bg-success p-3 rounded-full w-7 h-7"
          />
        </div>
      </div>

      <main className="flex flex-col gap-y-7">
        {pedidos.map((pedido, index) => (
          <div
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
              {pedido.dataInicioDisponibilidade} -{" "}
              {pedido.dataFimDisponibilidade}
            </p>
            <p className="text-sm text-[#807777] font-medium">
              {pedido.cidade}
            </p>
          </div>
        ))}
      </main>
      <Navbar />
    </>
  );
}
