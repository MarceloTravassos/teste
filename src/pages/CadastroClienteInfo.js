import { SubmitButton } from "../components/SubmitButton";
import logo from "../assets/logo.jpeg";
import { useState } from "react";

export function CadastroClienteInfo() {
  return (
    <main className="flex flex-col items-center px-12 bg-primary pb-20">
      <img src={logo} alt="Logo Doar Mais" className="mb-7 mt-9 mx-auto w-32" />

      <div
        className="flex flex-col rounded-xl p-5 bg-white text-primary
      text-base font-medium md:w-80 lg:w-96"
      >
        <h1 className="font-bold text-2xl text-primary mb-2 text-center">
          Cadastro
        </h1>

        <p className="text-justify leading-tight font-medium text-stone-500 mb-16">
          Um e-mail de confirmação foi enviado para seu endereço de e-mail para
          garantirmos sua autenticidade e segurança.
        </p>

        <p className="text-justify leading-tight font-medium text-stone-500 mb-14">
          Por favor, cheque sua caixa de mensagens no e-mail...
        </p>

        <SubmitButton className="hover:bg-primary-hover transition">
          Continuar
        </SubmitButton>
      </div>
    </main>
  );
}
