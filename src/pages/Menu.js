import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHandHoldingHeart,
  faBars,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

export function Menu() {
  return (
    <main>
      <Header title="Menu" />

      <h1 className="font-bold text-xl text-menu-gray text-center mt-11 mb-12">
        O que você deseja fazer?
      </h1>

      <div className="grid grid-cols-2 grid-rows-2 px-5 items-center gap-y-6 gap-x-4">
        <a
          href="#"
          className="bg-secondary rounded-lg font-bold text-lg grid place-items-center h-40 shadow-black shadow-md"
        >
          <div className="flex flex-col items-center justify-center text-white text-center w-fit">
            <FontAwesomeIcon
              className="w-10 h-10 mb-4"
              icon={faHandHoldingHeart}
            />
            <p>Doação</p>
          </div>
        </a>
        <a
          href="#"
          className="bg-secondary rounded-lg font-bold text-lg grid place-items-center h-40 shadow-black shadow-md"
        >
          <div className="flex flex-col items-center justify-center text-white text-center w-fit">
            <FontAwesomeIcon className="w-10 h-10 mb-4" icon={faBagShopping} />
            Pedidos
          </div>
        </a>
        <a
          href="#"
          className="bg-secondary rounded-lg font-bold text-lg grid place-items-center h-40 shadow-black shadow-md"
        >
          <div className="flex flex-col items-center justify-center text-white text-center w-fit">
            <FontAwesomeIcon className="w-10 h-10 mb-4" icon={faClock} />
            Doação Rápida
          </div>
        </a>
        <a
          href="#"
          className="bg-secondary rounded-lg font-bold text-lg grid place-items-center h-40 shadow-black shadow-md"
        >
          <div className="flex flex-col items-center justify-center text-white text-center w-fit">
            <FontAwesomeIcon className="w-10 h-10 mb-4" icon={faBars} />
            Minhas atividades
          </div>
        </a>
      </div>

      <Navbar />
    </main>
  );
}
