import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBagShopping,
  faChevronCircleLeft,
  faEdit,
  faEllipsisV,
  faHandHoldingHeart,
  faMagnifyingGlass,
  faPlus,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { useState } from "react";

export function MeusAnuncios() {
  const [isActive, setIsActive] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const show = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Header title="Minhas Atividades" />

      <main className="flex flex-col gap-y-5">
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
              <h1 className="mb-4">
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
          <div className="flex items-center justify-between p-2 bg-primary bg-opacity-20 rounded-md">
            <input
              className="outline-black px-2 py-5 text-black rounded-md h-8 bg-transparent w-4/5"
              placeholder="Doação de arroz da marca Camil e Prato fino"
              name="titulo"
              type="text"
              id="titulo"
            />

            <FontAwesomeIcon className="w-6 h-6 text-menu-gray" icon={faEdit} />
          </div>

          <div className="flex items-center text-menu-gray my-4">
            <FontAwesomeIcon
              className="w-7 h-7 mr-3"
              icon={faHandHoldingHeart}
            />
            <h2 className="font-medium">Produto(s)</h2>
          </div>

          <div className="flex flex-col gap-y-3 text-menu-gray mb-5">
            <div className="flex items-center justify-between border border-menu-gray py-3 px-4 rounded-2xl">
              <div className="relative">
                {isActive && (
                  <>
                    <div className="absolute text-light-gray text-2xl -mt-[15px] right-20">
                      &#9650;
                    </div>
                    <div className="border border-light-gray mt-2 rounded-lg w-28 right-0 top-[34px] bg-white">
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

              <FontAwesomeIcon
                onClick={show}
                className="w-7 h-7"
                icon={faEllipsisV}
              />
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

          <label className="text-menu-gray font-medium mb-1">
            Adicionar item
          </label>
          <div className="flex gap-x-4 mb-4">
            <button>
              <FontAwesomeIcon
                icon={faPlus}
                className="w-8 h-8 bg-primary bg-opacity-20 rounded-md px-4 py-2 text-menu-gray"
              />
            </button>
            <p className="text-xs text-menu-gray">
              Caso queira que seu anúncio tenha mais de um item, clique aqui
              para adicioná-los
            </p>
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
