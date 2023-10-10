import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faCalendar,
  faEllipsisV,
  faExclamationTriangle,
  faHandHoldingHeart,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { useState } from "react";

export function VisualizarEncontro() {
  const [isActive, setIsActive] = useState(false);

  const show = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Header title="Dados do encontro" />

      <main className="flex flex-col gap-y-5 mt-4">
        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 pt-4 pb-6 mx-9 border border-[#807777]">
          <div className="flex">
            <div>
              <div className="relative flex items-center mb-3">
                <h2 className="font-semibold text-lg text-menu-gray leading-tight">
                  Doação de arroz da marca Camil{" "}
                </h2>

                <FontAwesomeIcon
                  onClick={show}
                  className="w-5 h-5"
                  icon={faEllipsisV}
                />

                {isActive && (
                  <>
                    <div className="absolute text-light-gray text-2xl -mt-[15px] right-0 top-10">
                      &#9650;
                    </div>
                    <div className="absolute border border-light-gray mt-2 rounded-lg w-28 -right-4 top-9 bg-white">
                      <ul className="text-xs font-medium text-menu-gray">
                        <div className="flex items-center justify-between px-3 py-2">
                          <li>Denunciar</li>
                          <FontAwesomeIcon
                            className="text-yellow-500"
                            icon={faExclamationTriangle}
                          />
                        </div>
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col gap-y-4 items-start justify-center mb-4">
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
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-4 h-4 rounded-full p-1 bg-menu-gray text-white mr-3"
                  />
                  <p className="font-medium">Marcelo Sarinho</p>
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

          <h2 className="text-center font-semibold text-success text-lg">
            Concluído
          </h2>
        </div>
      </main>

      <Navbar />
    </>
  );
}
