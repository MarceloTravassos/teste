import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHandHoldingHeart,
  faBars,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Denuncias() {
  return (
    <>
      <Header title="Menu" />

      <main className="pb-20">
        <h1 className="font-bold text-xl text-menu-gray text-center mt-11 mb-12">
          O que você deseja fazer?
        </h1>

        <div className="grid grid-cols-2 grid-rows-2 px-5 items-center gap-y-6 gap-x-4">
          <Link
            to="/doacoes"
            className="bg-secondary rounded-lg font-bold text-lg grid place-items-center h-40 shadow-black shadow-md"
          >
            <div className="flex flex-col items-center justify-center text-white text-center w-fit">
              <FontAwesomeIcon
                className="w-10 h-10 mb-4"
                icon={faHandHoldingHeart}
              />
              <p>Doações</p>
            </div>
          </Link>
          <Link
            to="/pedidos"
            className="bg-secondary rounded-lg font-bold text-lg grid place-items-center h-40 shadow-black shadow-md"
          >
            <div className="flex flex-col items-center justify-center text-white text-center w-fit">
              <FontAwesomeIcon
                className="w-10 h-10 mb-4"
                icon={faBagShopping}
              />
              Pedidos
            </div>
          </Link>
          <Link
            to="/doacoes-rapidas"
            className="bg-secondary rounded-lg font-bold text-lg grid place-items-center h-40 shadow-black shadow-md"
          >
            <div className="flex flex-col items-center justify-center text-white text-center w-fit">
              <FontAwesomeIcon className="w-10 h-10 mb-4" icon={faClock} />
              Doações Rápidas
            </div>
          </Link>
          <Link
            to="/minhas-atividades"
            className="bg-secondary rounded-lg font-bold text-lg grid place-items-center h-40 shadow-black shadow-md"
          >
            <div className="flex flex-col items-center justify-center text-white text-center w-fit">
              <FontAwesomeIcon className="w-10 h-10 mb-4" icon={faBars} />
              Minhas atividades
            </div>
          </Link>
        </div>
      </main>

      <Navbar />
    </>
  );
}
