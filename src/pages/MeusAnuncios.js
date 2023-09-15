import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBagShopping,
  faEllipsisV,
  faHandHoldingHeart,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { SubmitButton } from "../components/SubmitButton";

export function MeusAnuncios() {
  return (
    <>
      <Header title="Minhas Atividades" />

      <main className="flex flex-col gap-y-5">
        <form action="" className="flex flex-col mx-9 my-3">
          <FormLabel name="titulo">Título do anúncio</FormLabel>
          <FormInput
            placeholder="Doação de arroz da marca
            Camil e Prato fino"
            name="titulo"
            type="text"
            id="titulo"
          />

          <div className="flex items-center text-menu-gray my-4">
            <FontAwesomeIcon
              className="w-7 h-7 mr-3"
              icon={faHandHoldingHeart}
            />
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

              <FontAwesomeIcon className="w-7 h-7" icon={faEllipsisV} />
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

          <label className="text-menu-gray font-medium mb-1">Adicionar item</label>
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

          <button className="rounded-md mx-auto bg-primary text-white text-xl font-bold px-14 py-2 w-fit">Continuar</button>
        </form>
      </main>
      <Navbar />
    </>
  );
}
