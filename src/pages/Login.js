import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";
import { Loading } from "../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../api";
import logo from "../assets/logo.jpeg";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await signIn(email, senha);
    setLoading(false);
    return navigate("/home");
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
        className="flex flex-col rounded-xl p-5 bg-white text-primary
      text-base font-medium md:w-80 lg:w-96"
      >
        <h1 className="font-bold text-2xl text-center mb-5">Fazer login</h1>
        <FormLabel name="email">Email:</FormLabel>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <FormLabel name="senha">Senha:</FormLabel>
        <FormInput
          name="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <Link
          to="/esquecer-senha"
          className="mt-2 mb-2 text-sm font-normal ml-[2px] hover:underline"
        >
          Esqueceu a senha?
        </Link>

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
