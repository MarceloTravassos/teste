import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHandHoldingDollar, faRectangleList, faUser } from "@fortawesome/free-solid-svg-icons";

export function Menu() {
  return (
    <main>
      <Header />

      <h1 className="font-bold text-xl text-menu-gray text-center mt-11 mb-12">
        O que você deseja fazer?
      </h1>

      <div className="grid grid-cols-2 grid-rows-2 px-5 items-center gap-y-3 gap-x-4">
        <div className="bg-secondary rounded-lg px-6 py-8 font-bold text-lg h-40 shadow-black shadow-md">
          <div className="flex flex-col items-center text-white text-center">
            <FontAwesomeIcon className="w-10 h-10 mb-4" icon={faHandHoldingDollar} />
            Doações
          </div>
        </div>
        <div className="bg-secondary rounded-lg px-6 py-8 font-bold text-lg h-40 shadow-black shadow-md">
          <div className="flex flex-col items-center text-white text-center">
            <FontAwesomeIcon className="w-10 h-10 mb-4" icon={faRectangleList} />
            Pedidos
          </div>
        </div>
        <div className="bg-secondary rounded-lg px-6 py-8 font-bold text-lg h-40 shadow-black shadow-md">
          <div className="flex flex-col items-center text-white text-center">
            <FontAwesomeIcon className="w-10 h-10 mb-4" icon={faClock} />
            Doação Rápida
          </div>
        </div>
        <div className="bg-secondary rounded-lg px-6 py-8 font-bold text-lg h-40 shadow-black shadow-md">
          <div className="flex flex-col items-center text-white text-center">
            <FontAwesomeIcon className="w-10 h-10 mb-4" icon={faUser} />
            Minhas atividades
          </div>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
