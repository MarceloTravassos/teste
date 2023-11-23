import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBox,
  faCalendar,
  faEllipsisV,
  faExclamationTriangle,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHistorico } from "../api";
import { LoadingPrimary } from "../components/LoadingPrimary";
import { Error } from "../components/Error";

export function Historico() {
  const { id } = useParams();

  const [isActive, setIsActive] = useState(false);
  const [historico, setHistorico] = useState();
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  const cores = {
    "Anúncio cancelado": "text-red-500",
    "Proposta recusada": "text-red-500",
    "Proposta cancelada": "text-red-500",
    "Encontro não realizado": "text-red-500",
    "Anúncio ativo": "text-success",
    "Anúncio finalizado": "text-success",
    "Proposta confirmada": "text-success",
    "Encontro realizado": "text-success",
  };

  const determinarCor = (situacao) => {
    return cores[situacao] || "text-menu-gray";
  };

  const show = () => {
    setIsActive(!isActive);
  };

  async function fetchHistorico() {
    try {
      const result = await getHistorico(id);
      setHistorico(result);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  useEffect(() => {
    fetchHistorico();
  }, []);

  useEffect(() => {}, [historico]);

  return (
    <>
      <Header title="Dados do encontro" />

      <main className="flex flex-col gap-y-5 mt-4 pb-20">
        {errorPopup && (
          <Error error={error} onClick={() => setErrorPopup(false)} />
        )}

        {historico ? (
          <div
            className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center
          shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.25),0_4px_4px_0_rgba(0,0,0,0.25)]
          px-4 pt-4 pb-6 mx-9"
          >
            <div className="flex">
              <div>
                <div className="relative flex items-center mb-3">
                  <h2 className="font-semibold text-lg text-menu-gray leading-tight">
                    {historico.titulo}
                  </h2>

                  {/* <FontAwesomeIcon
                  onClick={show}
                  className="w-5 h-5"
                  icon={faEllipsisV}
                /> */}

                  {/* {isActive && (
                  <>
                    <div className="absolute text-light-gray text-2xl -mt-[15px] right-0 top-10">
                      &#9650;
                    </div>
                    <div className="absolute border border-light-gray mt-2 rounded-lg w-28 -right-4 top-9 bg-white">
                      <ul className="text-xs font-medium text-menu-gray">
                        <div className="flex items-center justify-between px-3 py-2">
                          <li>Denunciar</li>
                          <FontAwesomeIcon
                            className="text-yellow-500"
                            icon={faExclamationTriangle}
                          />
                        </div>
                      </ul>
                    </div>
                  </>
                )} */}
                </div>
                <div className="flex flex-col gap-y-4 items-start justify-center mb-4">
                  <div className="flex px-6">
                    <FontAwesomeIcon
                      className="w-6 h-6 text-menu-gray mr-3"
                      icon={faBox}
                    />
                    <div className="text-sm flex flex-col gap-y-4">
                      <h1 className="text-base font-medium -mb-3">
                        Produto(s)
                      </h1>
                      {historico.itemList.map((item, index) => (
                        <div key={index}>
                          <p className="leading-tight">
                            <span className="font-medium">Nome:</span>{" "}
                            {item.nome}
                          </p>
                          <p className="leading-tight">
                            <span className="font-medium">Categoria:</span>{" "}
                            {item.categoriaItemModel.descricao}
                          </p>
                          <p className="leading-tight">
                            <span className="font-medium">Quantidade:</span>{" "}
                            {item.quantidade} unidades
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h1 className="px-6 font-bold">Anúncio</h1>
                  <div className="flex px-6">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="w-4 h-4 rounded-full p-1 bg-menu-gray text-white mr-3"
                    />
                    <p className="font-medium">
                      {historico.nomeUsuarioAnuncio}
                    </p>
                  </div>

                  <div className="flex px-6">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                    <div className="text-sm">
                      <h1 className="text-base font-medium">Contato</h1>
                      <p className="leading-tight">
                        {historico.telefoneUsuarioAnuncio}
                      </p>
                    </div>
                  </div>

                  <h1 className="px-6 font-bold">Proposta</h1>
                  <div className="flex px-6">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="w-4 h-4 rounded-full p-1 bg-menu-gray text-white mr-3"
                    />
                    <p className="font-medium">
                      {historico.nomeUsuarioProposta}
                    </p>
                  </div>

                  <div className="flex px-6">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                    <div className="text-sm">
                      <h1 className="text-base font-medium">Contato</h1>
                      <p className="leading-tight">
                        {historico.telefoneUsuarioProposta}
                      </p>
                    </div>
                  </div>

                  <div className="flex px-6">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="w-6 h-6 mr-3"
                    />
                    <div className="text-sm">
                      <h1 className="text-base font-medium">Data e horário</h1>
                      <p className="leading-tight">{historico.dataAgendada}</p>
                    </div>
                  </div>

                  <div className="flex px-6">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="w-6 h-6 mr-3"
                    />
                    <div className="text-sm">
                      <h1 className="text-base font-medium">
                        Local de encontro
                      </h1>
                      <p className="leading-tight">{historico.cep}</p>
                      <p className="leading-tight">
                        {historico.logradouro}, {historico.numero},{" "}
                        {historico.complemento === ""
                          ? "sem complemento"
                          : historico.complemento}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2
              className={`text-center font-semibold text-lg ${determinarCor(
                historico.descricao
              )}`}
            >
              {historico.descricao}
            </h2>
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
