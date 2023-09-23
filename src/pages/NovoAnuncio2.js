import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { SubmitButton } from "../components/SubmitButton";

export function NovoAnuncio2() {
  return (
    <>
      <Header title="Doações" />
      <form action="" className="flex flex-col mx-9 my-3">
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
        <SubmitButton className="w-fit px-20 mx-auto my-20">
          Finalizar
        </SubmitButton>
      </form>
      <Navbar />
    </>
  );
}
