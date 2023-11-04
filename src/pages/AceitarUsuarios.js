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
import { HeaderAdmin } from "../components/HeaderAdmin";
import { useEffect, useState } from "react";
import { getContas } from "../api";

export function AceitarUsuarios() {
  const [contas, setContas] = useState([]);

  async function fetchContas() {
    try {
      const result = await getContas();
      setContas(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchContas();
  }, []);

  return (
    <>
      <HeaderAdmin />

      <main className="flex flex-col lg:gap-y-10 md:gap-y-5 gap-y-4 pb-20">
        {contas.map((conta, index) => (
          <Link
            key={index}
            to={`/gerenciarcontas/${conta.id}`}
            className="bg-div-gray rounded-2xl text-center drop-shadow-md py-12 px-8 mx-auto border border-[#807777]
            w-3/4 lg:w-1/2 md:w-1/2"
          >
            <h2 className="font-bold lg:text-2xl md:text-xl text-sm text-menu-gray">
              Nome do usuario
            </h2>
          </Link>
        ))}
      </main>
    </>
  );
}
