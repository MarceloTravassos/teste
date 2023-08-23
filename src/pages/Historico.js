import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import {
  faBagShopping,
  faHandHoldingHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Historico() {
  return (
    <>
      <main className="flex flex-col gap-y-5">
        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 py-3 mx-9 border border-[#807777]">
          <div className="flex">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="w-6 h-6 mr-3"
            />

            <div>
              <h2 className="font-bold text-sm text-menu-gray mb-2">
                Doação de arroz da marca Camil
              </h2>
              <div className="flex items-center">
                <p className="text-xs font-medium">23/04 - Marcelo Sarinho</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 py-3 mx-9 border border-[#807777]">
          <div className="flex">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="w-6 h-6 mr-3"
            />

            <div>
              <h2 className="font-bold text-sm text-menu-gray mb-2">
                Pedido de arroz e feijão
              </h2>
              <div className="flex items-center">
                <p className="text-xs font-medium">24/04 - Vivian Rayzer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 py-3 mx-9 border border-[#807777]">
          <div className="flex">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="w-6 h-6 mr-3"
            />

            <div>
              <h2 className="font-bold text-sm text-menu-gray mb-2">
                Doação de arroz da marca Camil
              </h2>
              <div className="flex items-center">
                <p className="text-xs font-medium">23/04 - Marcelo Sarinho</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 py-3 mx-9 border border-[#807777]">
          <div className="flex">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="w-6 h-6 mr-3"
            />

            <div>
              <h2 className="font-bold text-sm text-menu-gray mb-2">
                Doação de arroz da marca Camil
              </h2>
              <div className="flex items-center">
                <p className="text-xs font-medium">23/04 - Marcelo Sarinho</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 py-3 mx-9 border border-[#807777]">
          <div className="flex">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="w-6 h-6 mr-3"
            />

            <div>
              <h2 className="font-bold text-sm text-menu-gray mb-2">
                Doação de arroz da marca Camil
              </h2>
              <div className="flex items-center">
                <p className="text-xs font-medium">23/04 - Marcelo Sarinho</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Navbar />
    </>
  );
}
