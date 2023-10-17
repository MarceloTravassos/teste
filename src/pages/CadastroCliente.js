import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

export function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  function handleNomeChange(e) {
    setNome(e.target.value);
  }

  function handleTelefoneChange(e) {
    setTelefone(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSenhaChange(e) {
    setSenha(e.target.value);
  }

  function handleConfirmSenhaChange(e) {
    setConfirmSenha(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("senha: ", senha);
    console.log("email: ", email);
    console.log("nome: ", nome);
    console.log("email: ", email);
    console.log("email: ", email);
  }

  return (
    <main className="flex flex-col items-center bg-primary min-h-screen">
      <img src={logo} alt="Logo Doar Mais" className="mb-7 mt-9 mx-auto w-32" />

      <div className="w-72 h-auto mb-2 px-5 py-3 rounded-xl bg-white">
        <form className="flex flex-col">
          <h1 className="font-bold text-2xl text-primary mb-2 text-center">
            Cadastro
          </h1>
          <FormLabel name="nome">Nome:</FormLabel>
          <FormInput
            name="nome"
            type="text"
            value={nome}
            onChange={handleNomeChange}
          />

          <FormLabel name="email">Email:</FormLabel>
          <FormInput
            name="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />

          <FormLabel name="telefone">Telefone:</FormLabel>
          <FormInput
            name="telefone"
            type="text"
            value={telefone}
            onChange={handleTelefoneChange}
          />

          <FormLabel name="senha">Senha:</FormLabel>
          <FormInput
            name="senha"
            type="text"
            value={senha}
            onChange={handleSenhaChange}
          />

          <FormLabel name="confirmar-senha">Confirmar senha:</FormLabel>
          <FormInput
            name="confirmar-senha"
            type="text"
            value={confirmSenha}
            onChange={handleConfirmSenhaChange}
          />

          <button
            type="submit"
            className="hover:bg-primary-hover transition mt-2 bg-primary px-16 py-2 rounded-lg font-bold text-center text-white text-xl"
          >
            Continuar
          </button>
        </form>
      </div>
    </main>
  );
}
