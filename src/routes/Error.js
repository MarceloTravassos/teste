import { Link, useNavigate } from "react-router-dom";
import errorSVG from "../assets/error.svg";

export function Error() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-y-8">
      <img className="w-72" src={errorSVG} alt="Imagem de erro" />

      <p className="text-lg font-medium">A página não foi encontrada!</p>

      <Link
        onClick={() => navigate(-1)}
        className="font-medium px-5 py-2 rounded-md bg-primary text-white"
      >
        Retornar
      </Link>
    </main>
  );
}
