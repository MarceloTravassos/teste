import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { Header } from "../components/Header";

export function EditarAnuncio2() {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  return (
    <>
      <Header title="Meus anúncios" />

      <form action="" className="flex flex-col mx-9 my-3 h-screen">
        {showConfirmDelete && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div
              className="flex flex-col text-menu-gray leading-tight font-medium w-4/5 bg-white border-[2.5px] border-light-gray
          px-6 py-5 rounded-lg shadow-md justify-center"
            >
              <h1 className="mb-4 text-lg text-center">Anúncio modificado com sucesso!</h1>
              <button
                className="mt-4 mx-auto w-fit md:w-64 px-16 py-2 font-bold text-sm bg-primary text-white rounded-md"
                onClick={() => setShowConfirmDelete(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        <h1 className="text-menu-gray font-medium mb-1">Disponibilidade</h1>
        <p className="text-xs text-menu-gray text-opacity-80 mb-2">
          Adicione o período em dias e horas que você terá disponibilidade para
          entregar os produtos do seu anúncio
        </p>

        <h1 className="text-menu-gray font-medium mb-1">Dias Disponíveis</h1>
        <FormInput
          placeholder="00/00/0000"
          name="dataInicio"
          type="date"
          id="dataInicio"
        />
        <FormInput
          placeholder="00/00/0000"
          name="dataFim"
          type="date"
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
            type="time"
            id="dataFim"
          />
          <FormInput
            className="w-28 text-center"
            placeholder="00:00"
            name="dataFim"
            type="time"
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

        <button
          onClick={() => setShowConfirmDelete(true)}
          className="rounded-md mx-auto bg-primary text-white text-xl font-bold px-14 py-2 w-fit"
        >
          Continuar
        </button>
      </form>
    </>
  );
}
