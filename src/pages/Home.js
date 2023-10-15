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
import { useState } from "react";

export function Home() {
  return (
    <main>
      <Header title="Menu" />

      {/* {showPopup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col leading-tight font-medium w-4/5 bg-white px-12 py-11 rounded-lg shadow-md items-center justify-center">
            <p className="text-menu-gray font-medium leading-tight mb-9 text-justify">
              Você tem certeza de que deseja sair?
            </p>
            <div className="flex w-full justify-between">
              <button
                className="px-6 py-2 text-lg"
                onClick={() => setShowPopup(false)}
              >
                Não
              </button>

              <button
                className="px-6 py-2 text-lg bg-primary text-white rounded-md"
                onClick={handleOnSignOff}
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      )} */}

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
            <FontAwesomeIcon className="w-10 h-10 mb-4" icon={faBagShopping} />
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

      <Navbar />
    </main>
  );
}
