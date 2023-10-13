import tradeSvg from "../assets/trade.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function TelaInicial() {
  return (
    <main className="h-screen">
      <div
        className="bg-primary absolute origin-top-left h-[450px] w-full -z-10
      -skew-y-[26deg] md:-skew-y-[18deg] lg:-skew-y-12"
      ></div>
      <nav className="h-16 py-3 px-2 flex justify-between items-center border-b-2 border-white mb-5 lg:mb-10">
        <h1 className="font-bold text-lg ml-2 text-white">Doe+</h1>
        <div className="flex items-center space-x-2 hover:bg-primary-hover transition cursor-pointer p-2 rounded-sm">
          <Link to="/login" className="mr-1 font-semibold text-sm text-white">Login</Link>
          <FontAwesomeIcon className="w-5 h-5 text-white" icon={faUser} />
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row md:justify-center px-4 lg:px-0 xl:justify-evenly">
        <div>
          <h1 className="font-bold text-white mb-2 text-xl lg:text-2xl xl:text-3xl">
            Realizar doações nunca foi tão simples!
          </h1>
          <div className="text-white text-xs font-semibold mb-4 overflow-hidden">
            <p className="mb-4 lg:text-base xl:text-xl">
              Tenha acesso às nossas funcionalidades:
            </p>
            <ul className="list-disc no-underline ml-4 lg:text-base lg:mb-4 xl:text-xl xl:mb-6">
              <li>Crie anúncios de doação</li>
              <li>Peça uma doação</li>
              <li>Tenha acesso ao recurso de doação rápida</li>
            </ul>
          </div>
          <Link
            to="/cadastro"
            className="font-bold text-xs lg:text-lg text-white rounded-md px-4 py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-4
            xl:text-xl bg-success hover:bg-success-hover transition drop-shadow-lg"
          >
            Cadastre-se
          </Link>
        </div>
        <img
          src={tradeSvg}
          alt="Troca"
          className="mx-auto mt-8 lg:mt-0 lg:ml-8 lg:mr-0 lg:h-80 xl:h-96"
        />
      </div>
    </main>
  );
};