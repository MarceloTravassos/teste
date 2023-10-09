import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import {
  faBagShopping,
  faHandHoldingHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Pendentes() {
  return (
    <>
      <main className="flex flex-col gap-y-5">
        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 py-3 mx-9 border border-[#807777]">
          <div className="flex">
            <FontAwesomeIcon icon={faUser} className="w-6 h-6 mr-3" />

            <div>
              <h2 className="font-bold text-sm text-menu-gray mb-1">
                Marcelo Sarinho
              </h2>
              <div className="text-xs font-medium">
                <p>Doação de arroz da marca Camil</p>
                <p>14/05/2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 py-3 mx-9 border border-[#807777]">
          <div className="flex">
            <FontAwesomeIcon icon={faUser} className="w-6 h-6 mr-3" />

            <div>
              <h2 className="font-bold text-sm text-menu-gray mb-1">
                Vivian Rayzer
              </h2>
              <div className="text-xs font-medium">
                <p>Pedido de arroz e feijão</p>
                <p>24/05/2023</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Navbar />
    </>
  );
}
