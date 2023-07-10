import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { SubmitButton } from "../components/SubmitButton";

export function NovaDoacao() {
  return (
    <>
      <Header title="Doações" />
      <form action="" className="flex flex-col mx-9 my-3">
        <FormLabel name="titulo">Título do anúncio</FormLabel>
        <FormInput
          placeholder="Digite aqui..."
          name="titulo"
          type="text"
          id="titulo"
        />

        <FormLabel name="nomeProduto">Nome do produto</FormLabel>
        <FormInput
          placeholder="Digite aqui..."
          name="nomeProduto"
          type="text"
          id="nomeProduto"
        />

        <div className="flex"></div>

        <FormLabel>Descrição</FormLabel>
        <textarea placeholder="Digite aqui a descrição do produto..." className="bg-primary bg-opacity-30 p-2 mb-2 rounded-md"></textarea>

        <label>Adicionar item</label>
        <div className="flex gap-x-4">
          <button>
            <FontAwesomeIcon
              icon={faPlus}
              className="w-8 h-8 bg-primary bg-opacity-30 rounded-md px-4 py-2 text-menu-gray"
            />
          </button>
          <p className="text-xs text-menu-gray">
            Caso queira que seu anúncio tenha mais de um item, clique aqui para
            adiciona-los
          </p>
        </div>

        <SubmitButton>Continuar</SubmitButton>
      </form>
      <Navbar />
    </>
  );
}
