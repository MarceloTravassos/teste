import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBox,
  faChevronCircleLeft,
  faEdit,
  faEllipsisV,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { useEffect, useRef, useState } from "react";
import { deleteAnuncio, deleteAnuncioItem, getMeuAnuncio } from "../api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { LoadingPrimary } from "../components/LoadingPrimary";
import { Error } from "../components/Error";

export function MeuAnuncio() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isActiveAnuncio, setIsActiveAnuncio] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [meuAnuncio, setMeuAnuncio] = useState();
  const [activeProduto, setActiveProduto] = useState({});
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  const inputTituloRef = useRef();

  const toggleProdutoDropdown = (index) => {
    setActiveProduto((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const enableInput = () => {
    setIsInputEnabled(true);
    setTimeout(() => {
      inputTituloRef.current.focus();
    }, 0);
  };

  const handleChangeTitulo = (e) => {
    setMeuAnuncio({
      ...meuAnuncio,
      titulo: e.target.value,
    });
  };

  const showAnuncioDropdown = () => {
    setIsActiveAnuncio(!isActiveAnuncio);
  };

  async function fetchMeuAnuncio() {
    try {
      const result = await getMeuAnuncio(id);
      setMeuAnuncio(result);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function excluirAnuncio(id) {
    try {
      const body = {
        motivo: "Motivo padrão pois a tela foi retirada do escopo final.",
      };
      setShowConfirmDelete(false);
      await deleteAnuncio(id, body);
      return navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function excluirItem(idItem) {
    try {
      await deleteAnuncioItem(idItem);
      window.location.reload();
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  function editarItemAnuncio(item) {
    return navigate("/editar-item-anuncio", {
      state: { meuAnuncio, item },
    });
  }

  function continuarEdicao() {
    navigate("/atividades/anuncio/continuar-edicao", { state: meuAnuncio });
  }

  useEffect(() => {
    fetchMeuAnuncio();
  }, []);

  useEffect(() => {}, [meuAnuncio]);

  return (
    <>
      <Header title="Meus anúncios" />

      <main className="flex flex-col gap-y-5 pb-20">
        {errorPopup && (
          <Error error={error} onClick={() => setErrorPopup(false)} />
        )}

        {showConfirmDelete && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div
              className="flex flex-col text-menu-gray leading-tight font-medium w-4/5 bg-white border-[2.5px]
              border-light-gray px-6 py-5 rounded-lg shadow-md justify-center"
            >
              <FontAwesomeIcon
                onClick={() => setShowConfirmDelete(false)}
                className="w-6 h-6 mb-4 text-primary"
                icon={faChevronCircleLeft}
              />
              <h1 className="text-justify mb-4">
                A exclusão do anúncio pode acabar por prejudicar pessoas que
                estejam eventualmente ligadas a ele por meio de compromissos,
                tem certeza que deseja excluir? Penalidades podem ser aplicadas.
              </h1>
              <button
                className="mt-4 mx-auto w-fit md:w-64 px-16 py-2 font-bold text-xl bg-primary text-white rounded-md"
                onClick={() => excluirAnuncio(meuAnuncio.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        )}

        {meuAnuncio ? (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col mx-9 my-3"
          >
            <label className="mb-1 text-menu-gray font-medium">
              Título do anúncio
            </label>
            <div className="relative flex items-center gap-x-2 justify-between p-3 bg-primary bg-opacity-20 rounded-md">
              <input
                ref={inputTituloRef}
                onChange={handleChangeTitulo}
                disabled={!isInputEnabled}
                className="truncate bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-black"
                value={meuAnuncio.titulo}
                id="titulo"
                name="titulo"
              />

              <FontAwesomeIcon
                onClick={showAnuncioDropdown}
                className="w-6 h-6 text-menu-gray"
                icon={faEllipsisV}
              />

              {isActiveAnuncio && (
                <>
                  <div className="absolute text-light-gray text-2xl -mt-[15px] right-4 top-11">
                    &#9650;
                  </div>
                  <div className="absolute border border-light-gray mt-2 rounded-lg w-28 -right-4 top-[43px] bg-white">
                    <ul className="text-xs font-medium text-menu-gray">
                      <div
                        onClick={enableInput}
                        className="flex items-center justify-between px-3 py-1"
                      >
                        <li className="py-1">Editar</li>
                        <FontAwesomeIcon icon={faEdit} />
                      </div>
                      <hr className="mx-3" />
                      <div
                        onClick={() => setShowConfirmDelete(true)}
                        className="flex items-center justify-between px-3 py-1"
                      >
                        <li className="py-1">Excluir</li>
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </ul>
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center text-menu-gray my-4">
              <FontAwesomeIcon className="w-7 h-7 mr-3" icon={faBox} />
              <h2 className="font-medium">Produto(s)</h2>
            </div>

            <div className="flex flex-col gap-y-3 text-menu-gray text-sm mb-5">
              {meuAnuncio.itemList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between
                  shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.25),0_4px_4px_0_rgba(0,0,0,0.25)]
                  py-3 px-4 rounded-2xl"
                >
                  <div>
                    <p>
                      <span className="font-medium leading-tight">Nome:</span>{" "}
                      {item.nome}
                    </p>
                    <p>
                      <span className="font-medium leading-tight">
                        Categoria:
                      </span>{" "}
                      {item.categoriaItemModel.descricao}
                    </p>
                    <p>
                      <span className="font-medium leading-tight">
                        Quantidade:
                      </span>{" "}
                      {item.quantidade} unidades
                    </p>
                  </div>

                  <div className="relative">
                    <FontAwesomeIcon
                      onClick={() => toggleProdutoDropdown(index)}
                      className="relative w-7 h-7"
                      icon={faEllipsisV}
                    />

                    {activeProduto[index] && (
                      <>
                        <div className="absolute text-light-gray text-2xl -mt-[15px] right-1 top-9">
                          &#9650;
                        </div>
                        <div
                          className="absolute border border-light-gray mt-2 rounded-lg w-28
                          -right-8 top-[34px] bg-white z-50"
                        >
                          <ul className="text-xs font-medium text-menu-gray">
                            <div
                              onClick={() => editarItemAnuncio(item)}
                              className="flex items-center justify-between px-3 py-1"
                            >
                              <li className="py-1">Editar</li>
                              <FontAwesomeIcon icon={faEdit} />
                            </div>
                            <hr className="mx-3" />
                            <div
                              onClick={() => excluirItem(item.id)}
                              className="flex items-center justify-between px-3 py-1"
                            >
                              <li className="py-1">Excluir</li>
                              <FontAwesomeIcon icon={faTrash} />
                            </div>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={continuarEdicao}
              className="rounded-md mx-auto bg-primary text-white text-xl font-bold px-14 py-2 w-fit"
            >
              Continuar
            </button>
          </form>
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
