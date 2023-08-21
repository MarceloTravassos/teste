import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";

export function EsqueceuSenha() {
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
      <div className="mb-9 bg-white w-40 h-36 text-center">Logo</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-xl p-5 bg-white text-primary text-base font-medium"
      >
        <h1 className="font-bold text-2xl text-center mb-5">Esqueceu sua senha?</h1>
        <FormLabel name="email">Insira o email cadastrado:</FormLabel>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <SubmitButton type="submit">Continuar</SubmitButton>
      </form>
    </main>
  );
}
