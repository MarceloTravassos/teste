import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBagShopping,
  faClock,
  faHandHoldingHeart,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const icons = {
  1: faHandHoldingHeart,
  2: faBagShopping,
  3: faClock,
};

export function MeusAnuncios(props) {
  const { meusAnuncios } = props;

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const dataFormatada = format(dateObject, "dd/MM/yyyy");
    return dataFormatada;
  };

  return (
    <>
      <main className="flex flex-col gap-y-5 pb-20">
        {meusAnuncios.map((meuAnuncio, index) => {
          const icon = icons[meuAnuncio.idTipoAnuncio];

          return (
            <div
              key={index}
              className="relative flex flex-col overflow-hidden h-16 bg-white text-menu-gray rounded-2xl justify-center
              shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.25),0_4px_4px_0_rgba(0,0,0,0.25)]
              pl-4 mx-9"
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={icon} className="w-6 h-6 mr-3" />

                <div className="w-3/5">
                  <h2 className="font-bold text-sm text-menu-gray truncate">
                    {meuAnuncio.titulo}
                  </h2>
                  <div>
                    <p className="text-xs font-medium truncate">
                      {formatDate(meuAnuncio.dataInicioDisponibilidade)} -{" "}
                      {formatDate(meuAnuncio.dataFimDisponibilidade)}
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
                  <FontAwesomeIcon className="w-5 h-5" icon={faPenToSquare} />
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
