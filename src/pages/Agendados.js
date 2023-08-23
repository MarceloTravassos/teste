import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import {
  faBagShopping,
  faHandHoldingHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Agendados() {
  return (
    <>
      <main className="flex flex-col gap-y-7">
        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 py-6 mx-9 border border-[#807777]">
          <div className="flex">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="w-6 h-6 mr-3"
            />

            <div>
              <h2 className="font-bold text-sm text-menu-gray mb-3">
                Doação de arroz da marca Camil
              </h2>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-3 h-3 rounded-full p-1 bg-menu-gray text-white mr-2"
                />
                <p className="text-xs font-medium">Marcelo Sarinho</p>
              </div>
              <p className="text-xs font-medium">
                Encontro agendado para o dia 14/05/2023 às 19:30 no CEP
                11520-030 R. Dom Pedro I, 256, Ap 24
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-success font-semibold mt-5">
            Agendado
          </p>
        </div>

        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 py-6 mx-9 border border-[#807777]">
          <div className="flex">
            <FontAwesomeIcon icon={faBagShopping} className="w-6 h-6 mr-3" />

            <div>
              <h2 className="font-bold text-sm text-menu-gray mb-3">
                Pedido de arroz e feijão
              </h2>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-3 h-3 rounded-full p-1 bg-menu-gray text-white mr-2"
                />
                <p className="text-xs font-medium">Vivian Rayzer</p>
              </div>
              <p className="text-xs font-medium">
                Encontro agendado para o dia 16/05/2023 às 21:00 no CEP
                11520-030 R. Dom Pedro I, 256, Ap 24
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-success font-semibold mt-5">
            Agendado
          </p>
        </div>
      </main>
    </>
  );
}
