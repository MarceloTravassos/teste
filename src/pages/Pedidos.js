import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Filtro } from "../components/Filtro";
import { getPedidos } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Error } from "../components/Error";

export function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [cidade, setCidade] = useState("");
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const dataFormatada = format(dateObject, "dd/MM/yyyy");
    return dataFormatada;
  };

  async function fetchPedidos(cidade = null) {
    try {
      const result = await getPedidos(cidade);
      setPedidos(result);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  useEffect(() => {
    fetchPedidos();
  }, []);

  useEffect(() => {}, [pedidos]);

  return (
    <>
      <Header title="Pedidos" />

      {errorPopup && (
        <Error error={error} onClick={() => setErrorPopup(false)} />
      )}

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

      <main className="flex flex-col gap-y-7 pb-32">
      <div
          className="relative flex items-center justify-between mx-auto gap-x-2 mb-4 w-2/3 border
        border-gray-300 rounded-full px-4 py-2"
        >
          <input
            onChange={(e) => setCidade(e.target.value)}
            type="text"
            placeholder="Filtrar por cidade"
            className="w-full focus:outline-none border-none"
          />
          <button type="button" onClick={() => fetchPedidos(cidade)}>
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-500 cursor-pointer px-2"
            />
          </button>
        </div>

        {pedidos.map((pedido, index) => (
          <Link
            to={`/pedido/${pedido.id}`}
            key={index}
            className="flex flex-col bg-div-gray rounded-2xl justify-center items-center
            shadow-[inset_1px_2px_4px_0_rgba(88,101,242,0.30),3px_3px_4px_2px_rgba(0,0,0,0.25)]
            px-9 pt-3 pb-11 mx-9"
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
