import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { useState } from "react";
import logo from "../assets/logo.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import { Error } from "../components/Error";

export function CadastroCliente() {
  const location = useLocation();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (confirmSenha === senha) {
      switch (location.state.tipoUsuario) {
        case 1:
          return navigate("/cadastro-pessoa", {
            state: { nome, email, telefone, senha },
          });

        case 2:
          return navigate("/cadastro-ong", {
            state: { nome, email, telefone, senha },
          });

        case 3:
          return navigate("/cadastro-pessoa", {
            state: { nome, email, telefone, senha },
          });

        default:
          console.log("Nenhum tipo de usuário informado!");
          break;
      }
    }
    setError("As senhas são diferentes!");
    setErrorPopup(true);
  }

  return (
    <main className="flex flex-col items-center bg-primary pb-20">
      {errorPopup && (
        <Error error={error} onClick={() => setErrorPopup(false)} />
      )}

      <img src={logo} alt="Logo Doar Mais" className="mb-7 mt-9 mx-auto w-32" />

      <div className="w-72 h-auto mb-2 px-5 py-3 rounded-xl bg-white">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h1 className="font-bold text-2xl text-primary mb-2 text-center">
            Cadastro
          </h1>
          <FormLabel name="nome">Nome:</FormLabel>
          <FormInput
            id="nome"
            name="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <FormLabel name="email">Email:</FormLabel>
          <FormInput
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormLabel name="telefone">Telefone:</FormLabel>
          <FormInput
            id="telefone"
            name="telefone"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <FormLabel name="senha">Senha:</FormLabel>
          <FormInput
            id="senha"
            name="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <FormLabel name="confirmar-senha">Confirmar senha:</FormLabel>
          <FormInput
            id="confirmar-senha"
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
