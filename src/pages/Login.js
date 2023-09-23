import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";
import { Loading } from "../components/Loading";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSenhaChange(e) {
    setSenha(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = axios
      .post("http://localhost:8080/auth/autenticar", {
        email: email,
        senha: senha,
      })
      .then((response) => localStorage.setItem("token", response.data.token))
      .catch((error) => console.log(error));
    setLoading(false);
  }

  return (
    <main className="bg-primary flex flex-col px-12 items-center min-h-screen">
      <div className="mb-9 bg-white w-40 h-36 text-center">Logo</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-xl p-5 bg-white text-primary
      text-base font-medium md:w-80 lg:w-96"
      >
        <h1 className="font-bold text-2xl text-center mb-5">Fazer login</h1>
        <FormLabel name="email">Email:</FormLabel>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <FormLabel name="senha">Senha:</FormLabel>
        <FormInput
          name="senha"
          type="password"
          value={senha}
          onChange={handleSenhaChange}
          required
        />

        <a
          href="/esquecer-senha"
          className="mt-2 mb-2 text-sm font-normal ml-[2px] hover:underline"
        >
          Esqueceu a senha?
        </a>

        <SubmitButton
          className="hover:bg-primary-hover transition"
          type="submit"
        >
          {loading ? <Loading /> : "Entrar"}
        </SubmitButton>

        <p className="font-normal text-xs text-black mt-5">
          Não possui uma conta?{" "}
          <a className="text-primary hover:underline" href="/registrar">
            Criar agora.
          </a>
        </p>
      </form>
    </main>
  );
}
