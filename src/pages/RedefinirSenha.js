import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import logo from "../assets/logo.jpeg";
import { editForgottenPassword } from "../api";
import { Error } from "../components/Error";
import { useLocation, useNavigate } from "react-router-dom";
import { Message } from "../components/Message";

export function RedefinirSenha() {
  const location = useLocation();
  const navigate = useNavigate();

  const [novaSenha, setNovaSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [popup, setPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      novaSenha,
      confirmaSenha,
    };

    try {
      await editForgottenPassword(body, location.state.token);
      setPopup(true);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  return (
    <main className="bg-primary flex flex-col px-12 items-center min-h-screen pb-20">
      {popup && (
        <Message
          message="Senha redefinida com sucesso!"
          onClick={() => navigate("/")}
        />
      )}

      {errorPopup && (
        <Error error={error} onClick={() => setErrorPopup(false)} />
      )}

      <img
        src={logo}
        alt="Logo Doar Mais"
        className="mb-14 mt-20 mx-auto w-44"
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-xl p-5 bg-white text-primary text-base font-medium md:w-80 lg:w-96 w-72"
      >
        <h1 className="font-bold text-2xl text-center mb-5">
          Altere sua senha
        </h1>
        <FormLabel className="text-primary" name="nova-senha">
          Nova senha:
        </FormLabel>
        <FormInput
          name="nova-senha"
          type="password"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          required
        />

        <FormLabel className="text-primary" name="confirmar-senha">
          Confirmar senha:
        </FormLabel>
        <FormInput
          name="confirmar-senha"
          type="password"
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)}
          required
        />

        <button
          className="hover:bg-primary-hover transition mt-2 bg-primary px-16 py-2 rounded-lg font-bold 
          text-center text-white text-xl mb-10"
        >
          Salvar
        </button>
      </form>
    </main>
  );
}
