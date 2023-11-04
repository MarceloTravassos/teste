import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { signOut } from "../api";

export function HeaderAdmin() {
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="flex flex-col justify-center lg:mb-12 md:mb-6 mb-4">
      <div className="flex items-center justify-between bg-primary text-white p-4 gap-x-2 lg:gap-x-0 md:gap-x-0">
        <img src={logo} alt="Logo Doar Mais" className="w-[70px]" />

        <div className="flex justify-between gap-x-4">
          <Link
            to="/administrador/aceitar-usuarios"
            className="font-bold lg:text-xl md:text-xl text-sm lg:mr-40 md:mr-20 hover:text-light-gray transition"
          >
            Aceitar usuários
          </Link>
          <Link
            to="/administrador/denuncias"
            className="font-bold lg:text-xl md:text-xl text-sm lg:mr-40 md:mr-20 hover:text-light-gray transition"
          >
            Denúncias
          </Link>
          <Link
            onClick={handleSignOut}
            className="font-bold lg:text-xl md:text-xl text-sm lg:mr-40 md:mr-20 hover:text-light-gray transition"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
          </Link>
        </div>
      </div>
    </div>
  );
}
