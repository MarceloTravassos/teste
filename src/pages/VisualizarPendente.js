import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faCalendar,
  faCircleChevronLeft,
  faHandHoldingHeart,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { useState } from "react";

export function VisualizarPendente() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Header title="Pendente" />

      <main className="h-screen flex flex-col gap-y-5 mt-4">
        {showPopup && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div
              className="flex items-start flex-col leading-tight font-medium w-4/5 bg-white px-12 py-6 rounded-lg
            border-2 border-light-gray justify-center"
            >
              <button className="mb-4" onClick={() => setShowPopup(false)}>
                <FontAwesomeIcon
                  className="w-6 h-6 text-primary"
                  icon={faCircleChevronLeft}
                />
              </button>

              <p className="text-menu-gray font-medium leading-tight mb-6 text-justify">
                Tem certeza que deseja confirmar este compromisso?
              </p>
              <button
                className="mt-2 w-full md:w-64 py-2 font-bold text-xl bg-primary text-white rounded-lg"
                onClick={() => setShowPopup(false)}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 pt-4 pb-6 mx-9 border border-[#807777]">
          <div className="flex">
            <div>
              <h2 className="font-semibold text-lg text-menu-gray mb-3 leading-tight">
                Doação de arroz da marca Camil{" "}
              </h2>
              <div className="flex flex-col gap-y-4 items-start justify-center mb-4">
                <div className="flex px-6">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-4 h-4 rounded-full p-1 bg-menu-gray text-white mr-3"
                  />
                  <p className="font-medium">Marcelo Sarinho</p>
                </div>

                <div className="flex px-6">
                  <FontAwesomeIcon
                    className="w-6 h-6 text-menu-gray mr-3"
                    icon={faHandHoldingHeart}
                  />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Produto(s)</h1>
                    <p className="leading-tight">
                      <span className="font-medium">Nome:</span> Arroz Camil
                    </p>
                    <p className="leading-tight">
                      <span className="font-medium">Categoria:</span> Alimento
                    </p>
                    <p className="leading-tight">
                      <span className="font-medium">Quantidade:</span> 3
                      unidades
                    </p>
                  </div>
                </div>

                <div className="flex px-6">
                  <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Contato</h1>
                    <p className="leading-tight">(13) 9 8822 - 6578</p>
                  </div>
                </div>

                <div className="flex px-6">
                  <FontAwesomeIcon icon={faCalendar} className="w-6 h-6 mr-3" />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Data e horário</h1>
                    <p className="leading-tight">12/06/2023 - 22:00</p>
                  </div>
                </div>

                <div className="flex px-6">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-6 h-6 mr-3"
                  />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Local de encontro</h1>
                    <p className="leading-tight">11520-030</p>
                    <p className="leading-tight">R. Dom Pedro I, 256, Ap 24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 w-fit mx-auto rounded-xl border-2 border-light-gray font-medium">
            <button
              onClick={() => setShowPopup(true)}
              className="text-green-500 w-[100px] py-1"
            >
              Confirmar
            </button>
            <span className="text-light-gray">|</span>
            <button className="text-red-500 w-[100px] py-1">Recusar</button>
          </div>
        </div>
      </main>

      <Navbar />
    </>
  );
}
