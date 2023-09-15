import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faCalendar,
  faHandHoldingHeart,
  faLocationDot,
  faPhone,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { useState } from "react";

export function Anuncio() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Header title="Dados da doação" />

      <main className="flex flex-col gap-y-5 mt-4">
        {showPopup && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="flex items-start flex-col leading-tight font-medium w-4/5 bg-white px-12 py-11 rounded-lg shadow-md justify-center">
              <button className="mb-4" onClick={() => setShowPopup(false)}>
                <FontAwesomeIcon className="w-6 h-6 text-menu-gray" icon={faTimes} />
              </button>

              <p className="text-menu-gray font-medium leading-tight mb-6 text-justify">
                O cancelamento de um compromisso pode acabar por resultar na
                aplicação de algum tipo de penalidade ao usuário, Deseja mesmo
                prosseguir?
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
                <span className="text-center text-xs text-success font-semibold ml-1">
                  Agendado
                </span>
              </h2>
              <div className="flex flex-col gap-y-3 items-center mb-4">
                <div className="flex px-5">
                  <FontAwesomeIcon
                    className="w-6 h-6 text-menu-gray mr-2"
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

                <div className="flex px-5">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-4 h-4 rounded-full p-1 bg-menu-gray text-white mr-2"
                  />
                  <p className="font-medium">Marcelo Sarinho</p>
                </div>

                <div className="flex px-5">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Contato</h1>
                    <p className="leading-tight">(13) 9 8822 - 6578</p>
                  </div>
                </div>

                <div className="flex px-5">
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Data e horário</h1>
                    <p className="leading-tight">12/06/2023 - 22:00</p>
                  </div>
                </div>

                <div className="flex px-5">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Local de encontro</h1>
                    <p className="leading-tight">11520-030</p>
                    <p className="leading-tight">R. Dom Pedro I, 256, Ap 24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowPopup(true)}
            className="bg-primary py-2 text-white font-bold w-fit px-6 mx-auto rounded-lg hover:bg-primary-hover transition"
          >
            Cancelar compromisso
          </button>
        </div>
      </main>

      <Navbar />
    </>
  );
}
