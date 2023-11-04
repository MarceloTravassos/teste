import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import {
  faBagShopping,
  faHandHoldingHeart,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const icons = {
  1: faHandHoldingHeart,
  2: faBagShopping,
  3: faClock,
};

export function Historicos(props) {
  const { historicos } = props;

  return (
    <>
      <main className="flex flex-col gap-y-5 pb-20">
        {historicos.map((historico, index) => {
          const icon = icons[historico.idTipoAnuncio];

          return (
            <Link
              key={index}
              to={`/atividades/historico/${historico.id}`}
              className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 py-3 mx-9 border border-[#807777]"
            >
              <div className="flex">
                <FontAwesomeIcon icon={icon} className="w-6 h-6 mr-3" />

                <div>
                  <h2 className="font-bold text-sm text-menu-gray">
                    {historico.titulo}
                  </h2>
                  <div>
                    <p className="text-xs font-medium">
                      {historico.dataAgendada}
                    </p>
                    <p className="text-xs font-medium">{historico.nome}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </main>
      <Navbar />
    </>
  );
}
