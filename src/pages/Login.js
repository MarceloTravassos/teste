import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSenhaChange(e) {
    setSenha(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("senha: ", senha)
    console.log("email: ", email)
  }
  
  return (
    <main className="bg-primary flex flex-col px-12 items-center min-h-screen">
      <div className="mb-9 bg-white w-40 h-36 text-center">Logo</div>
      <form onSubmit={handleSubmit} className="flex flex-col rounded-xl py-5 px-5 bg-white text-primary text-base font-medium">
        <h1 className="font-bold text-2xl text-center mb-5">Fazer login</h1>
        <FormLabel name="email">Email:</FormLabel>
        <FormInput name="email" type="email" value={email} onChange={handleEmailChange} required />

        <FormLabel name="senha">Senha:</FormLabel>
        <FormInput name="senha" type="password" value={senha} onChange={handleSenhaChange} required />

        <a href="/esquecer-senha" className="mt-2 mb-2 text-sm font-normal ml-[2px]">
          Esqueceu a senha?
        </a>

        <SubmitButton type="submit">Entrar</SubmitButton>

        <p className="font-normal text-xs text-black mt-5">
          Não possui uma conta? <a className="text-primary" href="/registrar">Criar agora</a>
        </p>
      </form>
    </main>
  );
}
