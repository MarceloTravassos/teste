import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBox,
  faCalendar,
  faLocationDot,
  faPhone,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import {
  cancelarEncontro,
  getAgendado,
  naoOcorreuEncontro,
  ocorreuEncontro,
} from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingPrimary } from "../components/LoadingPrimary";
import { Error } from "../components/Error";

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

export function Agendado() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [agendado, setAgendado] = useState();
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  async function fetchAgendado() {
    try {
      const result = await getAgendado(id);
      setAgendado(result);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function cancelar() {
    try {
      const body = {
        motivo: "Motivo padrão pois a tela foi retirada do escopo final.",
      };
      await cancelarEncontro(id, body);
      setShowPopup(true);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function ocorreu() {
    try {
      await ocorreuEncontro(id);
      return navigate("/home");
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function naoOcorreu() {
    try {
      await naoOcorreuEncontro(id);
      return navigate("/home");
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  function redirectToHome() {
    setShowPopup(false);
    return navigate("/home");
  }

  useEffect(() => {
    fetchAgendado();
  }, []);

  return (
    <>
      <Header title="Agendados" />
      <main className="flex flex-col gap-y-5 mt-4 pb-20">
        {errorPopup && (
          <Error error={error} onClick={() => setErrorPopup(false)} />
        )}

        {showPopup && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 flex items-center justify-center z-[9999]">
            <div className="flex flex-col border-[1.5px] border-light-gray leading-tight font-medium w-4/5 bg-white px-5 py-6 rounded-lg shadow-md items-center justify-center">
              <p className="text-menu-gray font-medium leading-tight mb-3 text-justify">
                Compromisso desmarcado com sucesso!
              </p>
              <button
                className="mt-4 px-6 py-3 md:w-64 font-bold bg-primary text-white rounded-md"
                onClick={redirectToHome}
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {agendado ? (
          <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 pt-4 pb-6 mx-9 border border-[#807777]">
            <div className="flex">
              <div>
                <h2 className="font-semibold text-lg text-menu-gray mb-3 leading-tight">
                  {agendado.titulo}
                  <span className={`${cores[agendado.descricao]} text-xs ml-2`}>
                    {agendado.descricao}
                  </span>
                </h2>
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
                      {agendado.itemList.map((item, index) => (
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
                    <p className="font-medium">{agendado.nomeUsuarioAnuncio}</p>
                  </div>

                  <div className="flex px-6">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                    <div className="text-sm">
                      <h1 className="text-base font-medium">Contato</h1>
                      <p className="leading-tight">
                        {agendado.telefoneUsuarioAnuncio}
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
                      {agendado.nomeUsuarioProposta}
                    </p>
                  </div>

                  <div className="flex px-6">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                    <div className="text-sm">
                      <h1 className="text-base font-medium">Contato</h1>
                      <p className="leading-tight">
                        {agendado.telefoneUsuarioProposta}
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
                      <p className="leading-tight">{agendado.dataAgendada}</p>
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
                      <p className="leading-tight">{agendado.cep}</p>
                      <p className="leading-tight">
                        {agendado.logradouro}, {agendado.numero},{" "}
                        {agendado.complemento === ""
                          ? "sem complemento"
                          : agendado.complemento}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {agendado.podeCancelarProposta === 1 && (
              <button
                onClick={cancelar}
                className="bg-primary py-2 text-white font-bold w-fit px-6 mx-auto mb-2 rounded-lg hover:bg-primary-hover transition"
              >
                Cancelar compromisso
              </button>
            )}

            {agendado.podeConfirmarEncontro === 1 &&
              agendado.podeCancelarProposta === 2 && (
                <div className="flex flex-wrap gap-y-3 justify-between">
                  <button
                    onClick={ocorreu}
                    className="bg-primary py-2 text-white font-bold w-fit px-6 mx-auto rounded-lg hover:bg-primary-hover transition"
                  >
                    Ocorreu
                  </button>

                  <button
                    onClick={naoOcorreu}
                    className="bg-primary py-2 text-white font-bold w-fit px-6 mx-auto rounded-lg hover:bg-primary-hover transition"
                  >
                    Não ocorreu
                  </button>
                </div>
              )}
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
