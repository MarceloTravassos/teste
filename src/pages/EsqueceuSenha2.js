import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { useEffect } from "react";

export function EsqueceuSenha2() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");

    if (token) {
      return navigate("/redefinir-senha", { state: { token } });
    }
  }, [location.search]);

  return (
    <main className="flex flex-col items-center bg-primary min-h-screen pb-20">
      <img
        src={logo}
        alt="Logo Doar Mais"
        className="mb-7 mt-10 mx-auto w-32"
      />

      <div className="w-72 h-[500px] mb-2 px-5 py-3 rounded-xl bg-white">
        <h1 className="font-bold text-2xl text-primary mb-2 text-center">
          Cadastro
        </h1>

        <p className="text-justify leading-tight font-medium text-stone-500 mb-16">
          Uma mensagem foi enviada para o endereço de email indicado com as
          instruções e o link para alteração de senha.
        </p>

        <p className="text-justify leading-tight font-medium text-stone-500 mb-14">
          Por favor, cheque sua caixa de mensagens no e-mail...
        </p>
      </div>
    </main>
  );
}
