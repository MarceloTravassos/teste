import { faBuildingUser, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export function BemVindo() {
  return (
    <main className="bg-primary flex flex-col min-h-screen items-center px-6 text-white">
      <img
        src={logo}
        alt="Logo Doar Mais"
        className="mb-16 mt-40 mx-auto w-64"
      />
      <p className="text-center text-lg">Seja bem-vindo.</p>
      <p className="mb-9 text-center font-bold text-xl">
        Escolha a opção corresponde ao seu caso
      </p>
      <div className="flex space-x-4 font-bold text-lg text-white">
        <Link
          to="/cadastro-cliente"
          className="flex flex-col rounded-lg items-center justify-evenly leading-tight px-4 py-6 bg-secondary"
        >
          <FontAwesomeIcon
            className="text-white w-10 h-10 mb-4"
            icon={faUser}
          />
          <p className="w-28 text-center">Pessoa Física</p>
        </Link>

        <Link
          to="/cadastro-cliente"
          className="flex flex-col rounded-lg items-center justify-evenly leading-tight px-4 py-6 bg-secondary"
        >
          <FontAwesomeIcon
            className="text-white w-12 h-12 mb-4"
            icon={faBuildingUser}
          />
          <p className="w-28 text-center">ONG</p>
        </Link>
      </div>
    </main>
  );
}
