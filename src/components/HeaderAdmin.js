import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export function HeaderAdmin(props) {
  return (
    <div className="flex flex-col justify-center lg:mb-12 md:mb-6 mb-4">
      <div className="flex items-center justify-between bg-primary text-white py-4 px-4">
        <img src={logo} alt="Logo Doar Mais" className="w-[70px]" />

        <div className="flex justify-between gap-x-4">
          <Link className="font-bold lg:text-xl md:text-xl text-sm lg:mr-40 md:mr-20">
            Aceitar usuários
          </Link>
          <Link className="font-bold lg:text-xl md:text-xl text-sm lg:mr-40 md:mr-20">
            Denúncias
          </Link>
        </div>
      </div>
    </div>
  );
}
