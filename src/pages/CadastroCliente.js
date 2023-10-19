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

  function handleSubmit(e) {
    e.preventDefault();
    console.log("nome: ", nome);
    console.log("email: ", email);
    console.log("telefone: ", telefone);
    console.log("senha: ", senha);
    console.log("confirm senha: ", confirmSenha);
  }

  return (
    <main className="flex flex-col items-center bg-primary min-h-screen">
      <img src={logo} alt="Logo Doar Mais" className="mb-7 mt-9 mx-auto w-32" />

      <div className="w-72 h-auto mb-2 px-5 py-3 rounded-xl bg-white">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h1 className="font-bold text-2xl text-primary mb-2 text-center">
            Cadastro
          </h1>
          <FormLabel name="nome">Nome:</FormLabel>
          <FormInput
            name="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <FormLabel name="email">Email:</FormLabel>
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormLabel name="telefone">Telefone:</FormLabel>
          <FormInput
            name="telefone"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <FormLabel name="senha">Senha:</FormLabel>
          <FormInput
            name="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <FormLabel name="confirmar-senha">Confirmar senha:</FormLabel>
          <FormInput
            name="confirmar-senha"
            type="password"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
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
