import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBox,
  faChevronCircleLeft,
  faEdit,
  faEllipsisV,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { getMeuAnuncio } from "../api";
import { useParams } from "react-router-dom";

export function MeuAnuncio() {
  const { id } = useParams();

  const [isActiveProduto, setIsActiveProduto] = useState(false);
  const [isActiveAnuncio, setIsActiveAnuncio] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [meuAnuncio, setMeuAnuncio] = useState();

  const showProdutoDropdown = () => {
    setIsActiveProduto(!isActiveProduto);
  };

  const showAnuncioDropdown = () => {
    setIsActiveAnuncio(!isActiveAnuncio);
  };

  async function fetchMeuAnuncio(id) {
    try {
      const result = await getMeuAnuncio(id);
      setMeuAnuncio(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMeuAnuncio();
  }, []);

  useEffect(() => {}, [meuAnuncio]);

  return (
    <>
      <Header title="Meus anúncios" />

      <main className="flex flex-col gap-y-5 pb-20">
        {showConfirmDelete && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div
              className="flex flex-col text-menu-gray leading-tight font-medium w-4/5 bg-white border-[2.5px] border-light-gray
              px-6 py-5 rounded-lg shadow-md justify-center"
            >
              <FontAwesomeIcon
                onClick={() => setShowConfirmDelete(false)}
                className="w-6 h-6 mb-4 text-primary"
                icon={faChevronCircleLeft}
              />
              <h1 className="text-justify mb-4">
                A exclusão do anúncio pode acabar por prejudicar pessoas que
                estejam eventualmente ligadas a ele por meio de compromissos,
                tem certeza que deseja excluir? Penalidades podem ser aplicadas
              </h1>
              <button
                className="mt-4 mx-auto w-fit md:w-64 px-16 py-2 font-bold text-xl bg-primary text-white rounded-md"
                onClick={() => setShowConfirmDelete(false)}
              >
                Excluir
              </button>
            </div>
          </div>
        )}
        <form action="" className="flex flex-col mx-9 my-3">
          <label className="mb-1 text-menu-gray font-medium">
            Título do anúncio
          </label>
          <div className="relative flex items-center gap-x-2 justify-between p-4 bg-primary bg-opacity-20 rounded-md">
            <p className="truncate">
              Doação de arroz da marca Camil e Prato fino
            </p>

            <FontAwesomeIcon
              onClick={showAnuncioDropdown}
              className="w-6 h-6 text-menu-gray"
              icon={faEllipsisV}
            />

            {isActiveAnuncio && (
              <>
                <div className="absolute text-light-gray text-2xl -mt-[15px] right-4 top-12">
                  &#9650;
                </div>
                <div className="absolute border border-light-gray mt-2 rounded-lg w-28 -right-4 top-[45px] bg-white">
                  <ul className="text-xs font-medium text-menu-gray">
                    <div className="flex items-center justify-between px-3 py-1">
                      <li>Editar</li>
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                    <hr className="mx-3" />
                    <div
                      onClick={() => setShowConfirmDelete(true)}
                      className="flex items-center justify-between px-3 py-1"
                    >
                      <li>Excluir</li>
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

          <div className="flex flex-col gap-y-3 text-menu-gray mb-5">
            <div className="flex items-center justify-between border border-menu-gray py-3 px-4 rounded-2xl">
              <div>
                <p>
                  <span className="font-medium leading-tight">Nome:</span> Arroz
                  Camil
                </p>
                <p>
                  <span className="font-medium leading-tight">Categoria:</span>{" "}
                  Alimento
                </p>
                <p>
                  <span className="font-medium leading-tight">Quantidade:</span>{" "}
                  3 unidades
                </p>
              </div>

              <div className="relative">
                <FontAwesomeIcon
                  onClick={showProdutoDropdown}
                  className="relative w-7 h-7"
                  icon={faEllipsisV}
                />

                {isActiveProduto && (
                  <>
                    <div className="absolute text-light-gray text-2xl -mt-[15px] right-1 top-9">
                      &#9650;
                    </div>
                    <div className="absolute border border-light-gray mt-2 rounded-lg w-28 -right-8 top-[34px] bg-white">
                      <ul className="text-xs font-medium text-menu-gray">
                        <div className="flex items-center justify-between px-3 py-1">
                          <li>Editar</li>
                          <FontAwesomeIcon icon={faEdit} />
                        </div>
                        <hr className="mx-3" />
                        <div className="flex items-center justify-between px-3 py-1">
                          <li>Excluir</li>
                          <FontAwesomeIcon icon={faTrash} />
                        </div>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between border border-menu-gray py-3 px-4 rounded-2xl">
              <div>
                <p>
                  <span className="font-medium leading-tight">Nome:</span> Arroz
                  Camil
                </p>
                <p>
                  <span className="font-medium leading-tight">Categoria:</span>{" "}
                  Alimento
                </p>
                <p>
                  <span className="font-medium leading-tight">Quantidade:</span>{" "}
                  3 unidades
                </p>
              </div>

              <FontAwesomeIcon className="w-7 h-7" icon={faEllipsisV} />
            </div>
          </div>

          <button className="rounded-md mx-auto bg-primary text-white text-xl font-bold px-14 py-2 w-fit">
            Continuar
          </button>
        </form>
      </main>
      <Navbar />
    </>
  );
}
