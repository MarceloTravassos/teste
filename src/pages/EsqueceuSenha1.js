import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";
import logo from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";
import { Error } from "../components/Error";
import { sendPasswordEmail } from "../api";

export function EsqueceuSenha1() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      email,
    };

    try {
      await sendPasswordEmail(body);
      return navigate("/esquecer-senha-info");
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  return (
    <main className="bg-primary flex flex-col px-12 items-center min-h-screen pb-20">
      {errorPopup && (
        <Error error={error} onClick={() => setErrorPopup(false)} />
      )}

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
        <FormLabel className="text-primary" name="email">
          Insira o email cadastrado:
        </FormLabel>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
