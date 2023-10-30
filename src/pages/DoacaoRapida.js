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
import { getDoacaoRapida } from "../api";
import { LoadingPrimary } from "../components/LoadingPrimary";

export function DoacaoRapida() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doacaoRapida, setDoacaoRapida] = useState();

  async function fetchDoacaoRapida() {
    try {
      const result = await getDoacaoRapida(id);
      setDoacaoRapida(result);
    } catch (error) {
      console.log(error);
    }
  }

  const marcarCompromisso = (e) => {
    e.preventDefault();
    return navigate("/marcar-compromisso-doacaorapida", {
      state: { doacaoRapida },
    });
  };

  useEffect(() => {
    fetchDoacaoRapida();
  }, []);

  useEffect(() => {}, [doacaoRapida]);

  return (
    <>
      <Header title="Doação Rápida" />
      <main className="px-10 pt-3 mb-16 pb-20">
        {doacaoRapida ? (
          <div className="flex flex-col gap-y-4 border-black border px-9 py-4 rounded-xl">
            <h1 className="font-semibold text-menu-gray leading-tight">
              {doacaoRapida.titulo}
            </h1>

            <div className="flex gap-x-4">
              <FontAwesomeIcon
                className="w-7 h-7 text-menu-gray"
                icon={faBox}
              />
              <div className="text-xs text-menu-gray flex flex-col gap-y-4">
                <h2 className="font-medium text-sm -mb-3">Produto(s)</h2>
                {doacaoRapida.itemList.map((produto) => (
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
              <h2 className="font-medium text-sm">{doacaoRapida.nome}</h2>
            </div>

            <div className="flex gap-x-4">
              <FontAwesomeIcon
                className="w-7 h-7 text-menu-gray"
                icon={faPhone}
              />
              <div className="text-xs text-menu-gray">
                <h2 className="font-medium text-sm">Contato</h2>
                <p>{doacaoRapida.telefone}</p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <FontAwesomeIcon
                className="w-7 h-7 text-menu-gray"
                icon={faCalendar}
              />
              <div className="text-xs text-menu-gray">
                <h2 className="font-medium text-sm">Datas</h2>
                <p>{doacaoRapida.dataInicioDisponibilidade}</p>
                <p>{doacaoRapida.dataFimDisponibilidade}</p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <FontAwesomeIcon
                className="w-7 h-7 text-menu-gray"
                icon={faLocationDot}
              />
              <div className="text-xs text-menu-gray">
                <h2 className="font-medium text-sm">Local de encontro</h2>
                <p>{doacaoRapida.cep}</p>
                <p>
                  {doacaoRapida.logradouro}, {doacaoRapida.numero},{" "}
                  {doacaoRapida.complemento === ""
                    ? "sem complemento"
                    : doacaoRapida.complemento}
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
