import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { SubmitButton } from "../components/SubmitButton";

export function NovoAnuncio() {
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

        <div className="flex gap-2">
          <div className="w-3/5">
            <FormLabel name="categoria">Categoria</FormLabel>
            <select
              name="categoria"
              className="bg-primary px-2 py-5 text-black rounded-md h-8 mb-2 bg-opacity-20 w-full"
            >
              <option defaultValue="" selected disabled>
                Selecione...
              </option>
              <option value="categoria1">Categoria 1...</option>
              <option value="categoria2">Categoria 2...</option>
            </select>
          </div>

          <div className="w-2/5">
            <FormLabel name="quantidade">Quantidade</FormLabel>
            <FormInput
              className="w-full"
              placeholder="Digite aqui..."
              name="quantidade"
              type="number"
              id="quantidade"
            />
          </div>
        </div>

        <FormLabel>Descrição</FormLabel>
        <textarea
          rows="3"
          cols="40"
          placeholder="Digite aqui a descrição do produto..."
          className="bg-primary bg-opacity-20 p-2 mb-2 rounded-md"
        ></textarea>

        <label className="text-menu-gray font-medium">Adicionar item</label>
        <div className="flex gap-x-4 mb-2">
          <button>
            <FontAwesomeIcon
              icon={faPlus}
              className="w-8 h-8 bg-primary bg-opacity-20 rounded-md px-4 py-2 text-menu-gray"
            />
          </button>
          <p className="text-xs text-menu-gray">
            Caso queira que seu anúncio tenha mais de um item, clique aqui para
            adicioná-los
          </p>
        </div>

        <h1 className="text-menu-gray font-medium mb-1">Disponibilidade</h1>
        <p className="text-xs text-menu-gray text-opacity-80 mb-2">
          Adicione o período em dias e horas que você terá disponibilidade para
          entregar os produtos do seu anúncio
        </p>

        <h1 className="text-menu-gray font-medium mb-1">Dias Disponíveis</h1>
        <FormInput
          placeholder="00/00/0000"
          name="dataInicio"
          type="text"
          id="dataInicio"
        />
        <FormInput
          placeholder="00/00/0000"
          name="dataFim"
          type="text"
          id="dataFim"
        />

        <h1 className="text-menu-gray font-medium my-1">
          Horários disponíveis
        </h1>
        <div className="flex justify-between">
          <FormInput
            className="w-28 text-center"
            placeholder="00:00"
            name="dataFim"
            type="text"
            id="dataFim"
          />
          <FormInput
            className="w-28 text-center"
            placeholder="00:00"
            name="dataFim"
            type="text"
            id="dataFim"
          />
        </div>

        <hr className="my-4" />

        <h1 className="text-menu-gray font-medium mb-1">Local de entrega</h1>
        <p className="text-xs text-menu-gray text-opacity-80 mb-2">
          Adicione aqui o local que você gostaria de se encontrar com os
          interessados para a transação dos itens do anúncio
        </p>

        <FormLabel name="cep">CEP</FormLabel>
        <FormInput placeholder="00000-00" name="cep" type="text" id="cep" />

        <FormLabel name="endereco">Endereço</FormLabel>
        <FormInput name="endereco" type="text" id="endereco" />

        <div className="flex gap-4">
          <div className="w-2/4">
            <FormLabel name="numero">Número</FormLabel>
            <FormInput
              className="w-full"
              name="numero"
              type="text"
              id="numero"
            />
          </div>

          <div className="w-2/4">
            <FormLabel name="complemento">Complemento</FormLabel>
            <FormInput
              className="w-full"
              name="complemento"
              type="text"
              id="complemento"
            />
          </div>
        </div>

        <FormLabel name="pontoReferencia">Ponto de Referência</FormLabel>
        <FormInput
          className="w-full"
          name="pontoReferencia"
          type="text"
          id="pontoReferencia"
        />
        <SubmitButton className="w-fit px-20 mx-auto my-20">Finalizar</SubmitButton>
      </form>
      <Navbar />
    </>
  );
}
