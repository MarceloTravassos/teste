import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { SubmitButton } from "../components/SubmitButton";
import { useState } from "react";

export function MarcarDoacao2() {
  return (
    <>
      <Header title="Doações" />
      <main className="h-screen">
        <form action="" className="flex flex-col mx-9 my-3 h-fit">
          <h1 className="text-menu-gray font-medium mb-1">Disponibilidade</h1>
          <div className="text-menu-gray text-opacity-80 mb-2">
            <p>12/06/2023 - 16/05/2023</p>
            <p>18:30 - 22:00</p>
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-menu-gray font-medium mb-1">Dia:</h1>
              <FormInput
                className="w-fit"
                name="dataInicio"
                type="date"
                id="dataInicio"
              />
            </div>

            <div>
              <h1 className="text-menu-gray font-medium mb-1">Horário:</h1>
              <FormInput name="horarioInicio" type="time" id="horarioInicio" />
            </div>
          </div>

          <hr className="my-4" />

          <h1 className="text-lg text-menu-gray font-medium mb-1">
            Local de encontro
          </h1>

          <FormLabel name="cep">CEP</FormLabel>
          <FormInput placeholder="00000-00" name="cep" type="text" id="cep" />

          <FormLabel name="endereco">Endereço</FormLabel>
          <FormInput name="endereco" type="text" id="endereco" />

          <FormLabel name="pontoReferencia">Ponto de Referência</FormLabel>
          <FormInput
            className="w-full"
            name="pontoReferencia"
            type="text"
            id="pontoReferencia"
          />

          <hr className="my-4" />

          <h1 className="text-lg text-menu-gray font-medium mb-1">Contato</h1>

          <FormLabel name="cellphone">Telefone</FormLabel>
          <FormInput
            placeholder="(99) 9 9999 9999"
            name="cellphone"
            type="text"
            id="cellphone"
          />

          <button type="submit" className="mt-4 mb-20 bg-primary px-16 py-2 rounded-lg font-bold text-center text-white text-xl w-fit mx-auto">
            Finalizar
          </button>
        </form>
      </main>
      <Navbar />
    </>
  );
}
