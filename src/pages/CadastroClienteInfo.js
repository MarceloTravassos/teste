import logo from "../assets/logo.jpeg";
import { useEffect, useState } from "react";
import { Message } from "../components/Message";
import { useLocation, useNavigate } from "react-router-dom";
import { Error } from "../components/Error";
import { autenticaEmail } from "../api";

export function CadastroClienteInfo() {
  const location = useLocation();
  const navigate = useNavigate();

  const [popup, setPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [error, setError] = useState("");
  const [mostrarBotao, setMostrarBotao] = useState(false);
  const [token, setToken] = useState("");

  async function autenticar() {
    try {
      console.log("email autenticado!");
      setMostrarBotao(true);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tokenURL = searchParams.get("token");

    if (tokenURL) {
      setToken(tokenURL);
      autenticar();
    }

  }, [location.search]);

  return (
    <main className="min-h-screen flex flex-col items-center px-12 bg-primary pb-20">
      {popup && (
        <Message
          message="Seu email foi confirmado! Aguarde pela liberação do administrador do sistema."
          onClick={() => navigate("/")}
        />
      )}

      {errorPopup && (
        <Error error={error} onClick={() => setErrorPopup(false)} />
      )}

      <img src={logo} alt="Logo Doar Mais" className="mb-7 mt-9 mx-auto w-32" />

      <div className="w-72 mb-2 px-5 py-3 rounded-xl bg-white text-center">
        <h1 className="font-bold text-2xl text-primary mb-2 text-center">
          Cadastro
        </h1>

        <p className="text-justify leading-tight font-medium text-stone-500 mb-16">
          Um e-mail de confirmação foi enviado para seu endereço de e-mail para
          garantirmos sua autenticidade e segurança.
        </p>

        <p className="text-justify leading-tight font-medium text-stone-500 mb-[152px]">
          Por favor, cheque sua caixa de mensagens no e-mail...
        </p>

        <button
          disabled={!mostrarBotao}
          className="mt-2 bg-primary px-16 py-2 rounded-lg font-bold text-white text-xl w-full disabled:bg-opacity-60"
        >
          Continuar
        </button>
      </div>
    </main>
  );
}
