import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import {
  faBox,
  faCalendar,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPedido } from "../api";
import { LoadingPrimary } from "../components/LoadingPrimary";
import { Error } from "../components/Error";

export function Pedido() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pedido, setPedido] = useState();
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  async function fetchPedido() {
    try {
      const result = await getPedido(id);
      setPedido(result);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  const marcarCompromisso = (e) => {
    e.preventDefault();
    return navigate("/marcar-compromisso-pedido", { state: { pedido } });
  };

  useEffect(() => {
    fetchPedido();
  }, []);

  useEffect(() => {}, [pedido]);

  return (
    <>
      <Header title="Pedido" />

      {errorPopup && (
        <Error error={error} onClick={() => setErrorPopup(false)} />
      )}

      <main className="px-10 pt-3 mb-16 pb-20">
        {pedido ? (
          <div
            className="flex flex-col gap-y-4
          shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.25),0_4px_4px_0_rgba(0,0,0,0.25)]
          px-9 py-4 rounded-xl"
          >
            <h1 className="font-semibold text-menu-gray leading-tight">
              {pedido.titulo}
            </h1>

            <div className="flex gap-x-4">
              <FontAwesomeIcon
                className="w-7 h-7 text-menu-gray"
                icon={faBox}
              />
              <div className="text-xs text-menu-gray flex flex-col gap-y-4">
                <h2 className="font-medium text-sm -mb-3">Produto(s)</h2>
                {pedido.itemList.map((produto) => (
                  <div key={produto.id}>
                    <p>
                      <strong>Nome:</strong> {produto.nome}
                    </p>
                    <p>
                      <strong>Categoria:</strong>{" "}
                      {produto.categoriaItemModel.descricao}
                    </p>
                    <p>
                      <strong>Quantidade:</strong> {produto.quantidade} unidades
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-x-4 text-menu-gray items-center">
              <FontAwesomeIcon className="w-7 h-7" icon={faUser} />
              <h2 className="font-medium text-sm">{pedido.nome}</h2>
            </div>

            <div className="flex gap-x-4">
              <FontAwesomeIcon
                className="w-7 h-7 text-menu-gray"
                icon={faPhone}
              />
              <div className="text-xs text-menu-gray">
                <h2 className="font-medium text-sm">Contato</h2>
                <p>{pedido.telefone}</p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <FontAwesomeIcon
                className="w-7 h-7 text-menu-gray"
                icon={faCalendar}
              />
              <div className="text-xs text-menu-gray">
                <h2 className="font-medium text-sm">Datas e horários</h2>
                <p>{pedido.dataInicioDisponibilidade}</p>
                <p>{pedido.dataFimDisponibilidade}</p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <FontAwesomeIcon
                className="w-7 h-7 text-menu-gray"
                icon={faLocationDot}
              />
              <div className="text-xs text-menu-gray">
                <h2 className="font-medium text-sm">Local de encontro</h2>
                <p>{pedido.cep}</p>
                <p>
                  {pedido.logradouro}, {pedido.numero},{" "}
                  {pedido.complemento === ""
                    ? "sem complemento"
                    : pedido.complemento}
                </p>
              </div>
            </div>

            <button
              onClick={marcarCompromisso}
              className="mt-2 bg-primary px-4 mx-auto py-2 rounded-lg font-bold text-center text-white text-lg w-fit"
            >
              Marcar compromisso
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <LoadingPrimary />
          </div>
        )}
      </main>
      <Navbar />
    </>
  );
}
