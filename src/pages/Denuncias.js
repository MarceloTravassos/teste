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
import { getContas, getDenuncias } from "../api";
import { Error } from "../components/Error";

export function Denuncias() {
  const [denuncias, setDenuncias] = useState([]);
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  async function fetchDenuncias() {
    try {
      const result = await getDenuncias();
      setDenuncias(result);
    } catch (error) {
      setError(error.response.data.detail);
      setErrorPopup(true);
    }
  }

  useEffect(() => {
    fetchDenuncias();
  }, []);

  return (
    <>
      <HeaderAdmin />

      <main className="flex flex-col lg:gap-y-10 md:gap-y-5 gap-y-4 pb-20">
        {errorPopup && (
          <Error error={error} onClick={() => setErrorPopup(false)} />
        )}

        {denuncias.map((denuncia, index) => (
          <Link
            key={index}
            to={`/administrador/denuncias/${denuncia.id}`}
            className="bg-div-gray hover:bg-light-gray transition rounded-2xl drop-shadow-md py-8 px-8 mx-auto border border-[#807777]
            w-3/4 lg:w-1/2 md:w-1/2"
          >
            <h2 className="font-bold lg:text-2xl md:text-xl text-sm text-menu-gray">
              {denuncia.nome}
            </h2>
            <h2 className="font-bold lg:text-2xl md:text-xl text-sm text-menu-gray">
              Denúncia de anúncio
            </h2>
            <h2 className="font-bold lg:text-2xl md:text-xl text-sm text-menu-gray">
              {denuncia.dataCriacao}
            </h2>
          </Link>
        ))}
      </main>
    </>
  );
}
