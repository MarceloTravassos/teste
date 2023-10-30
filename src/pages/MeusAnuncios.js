import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBagShopping,
  faCircleInfo,
  faClock,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const icons = {
  1: faHandHoldingHeart,
  2: faBagShopping,
  3: faClock,
};

export function MeusAnuncios(props) {
  const { meusAnuncios } = props;

  return (
    <>
      <main className="flex flex-col gap-y-5 pb-20">
        {meusAnuncios.map((meuAnuncio, index) => {
          const icon = icons[meuAnuncio.idTipoAnuncio];

          return (
            <div
              key={index}
              className="relative flex flex-col overflow-hidden h-16 bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md pl-4 mx-9 border border-[#807777]"
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={icon} className="w-6 h-6 mr-3" />

                <div className="w-3/5">
                  <h2 className="font-bold text-sm text-menu-gray truncate">
                    {meuAnuncio.titulo}
                  </h2>
                  <div>
                    <p className="text-xs font-medium truncate">
                      {meuAnuncio.dataInicioDisponibilidade}
                    </p>
                    <p className="text-xs font-medium truncate">
                      {meuAnuncio.nome}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/atividades/anuncio/${meuAnuncio.id}`}
                  className="flex justify-center items-center w-1/5 h-16 absolute 
                  top-0 right-0 bg-primary text-white"
                >
                  <FontAwesomeIcon className="w-6 h-6" icon={faCircleInfo} />
                </Link>
              </div>
            </div>
          );
        })}
      </main>
      <Navbar />
    </>
  );
}
