import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import {
  faCalendar,
  faHandHoldingHeart,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export function DoacaoRapida() {
  return (
    <>
      <Header title="Doação Rápida" />
      <main className="px-10 py-3 mb-16">
        <div className="flex flex-col gap-y-4 border-black border px-9 py-4 rounded-xl">
          <h1 className="font-semibold text-menu-gray leading-tight">
            Doação de arroz da marca Camil
          </h1>

          <div className="flex gap-x-4">
            <FontAwesomeIcon
              className="w-7 h-7 text-menu-gray"
              icon={faHandHoldingHeart}
            />
            <div className="text-xs text-menu-gray">
              <h2 className="font-medium text-sm mb-1">Produto(s)</h2>
              <p>
                <strong>Nome:</strong> Arroz Camil
              </p>
              <p>
                <strong>Categoria:</strong> Alimento
              </p>
              <p>
                <strong>Quantidade:</strong> 5 unidades
              </p>
            </div>
          </div>

          <div className="flex gap-x-4 text-menu-gray items-center">
            <FontAwesomeIcon className="w-7 h-7" icon={faUser} />
            <h2 className="font-medium text-sm">Marcelo Sarinho</h2>
          </div>

          <div className="flex gap-x-4">
            <FontAwesomeIcon
              className="w-7 h-7 text-menu-gray"
              icon={faPhone}
            />
            <div className="text-xs text-menu-gray">
              <h2 className="font-medium text-sm">Contato</h2>
              <p>(13) 9 8822 - 6578</p>
            </div>
          </div>

          <div className="flex gap-x-4">
            <FontAwesomeIcon
              className="w-7 h-7 text-menu-gray"
              icon={faCalendar}
            />
            <div className="text-xs text-menu-gray">
              <h2 className="font-medium text-sm">Data e Horário</h2>
              <p>12/06/2023 - 18:30</p>
            </div>
          </div>

          <div className="flex gap-x-4">
            <FontAwesomeIcon
              className="w-7 h-7 text-menu-gray"
              icon={faLocationDot}
            />
            <div className="text-xs text-menu-gray">
              <h2 className="font-medium text-sm">Local de encontro</h2>
              <p>11520-030</p>
              <p>R. Dom Pedro I, 256, Ap 24</p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 bg-primary px-4 mx-auto py-2 rounded-lg font-bold text-center text-white text-lg w-fit"
          >
            Marcar compromisso
          </button>
        </div>
      </main>
      <Navbar />
    </>
  );
}
