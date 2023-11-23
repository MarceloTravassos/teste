import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Pendentes(props) {
  const { pendentes } = props;

  return (
    <>
      <main className="flex flex-col gap-y-5 pb-20">
        {pendentes.map((pendente, index) => (
          <Link
            key={index}
            to={`/atividades/pendentes/${pendente.id}`}
            className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center
            shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.25),0_4px_4px_0_rgba(0,0,0,0.25)]
            px-4 py-3 mx-9"
          >
            <div className="flex">
              <FontAwesomeIcon icon={faUser} className="w-6 h-6 mr-3" />

              <div>
                <h2 className="font-bold text-sm text-menu-gray mb-1">
                  {pendente.nome}
                </h2>
                <div className="text-xs font-medium">
                  <p>{pendente.titulo}</p>
                  <p>{pendente.dataAgendada}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>
      <Navbar />
    </>
  );
}
