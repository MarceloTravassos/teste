import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";
import logo from "../assets/logo.jpeg";

export function EsqueceuSenha1() {
  const [email, setEmail] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("email: ", email);
  }

  return (
    <main className="bg-primary flex flex-col px-12 items-center min-h-screen">
      <img
        src={logo}
        alt="Logo Doar Mais"
        className="mb-9 mt-20 mx-auto w-44"
      />
      
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-xl p-5 bg-white text-primary text-base font-medium md:w-80 lg:w-96"
      >
        <h1 className="font-bold text-2xl text-center mb-5">
          Esqueceu sua senha?
        </h1>
        <FormLabel name="email">Insira o email cadastrado:</FormLabel>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <SubmitButton
          className="hover:bg-primary-hover transition"
          type="submit"
        >
          Continuar
        </SubmitButton>
      </form>
    </main>
  );
}
