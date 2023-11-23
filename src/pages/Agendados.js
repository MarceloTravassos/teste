import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faClock,
  faHandHoldingHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const icons = {
  1: faHandHoldingHeart,
  2: faBagShopping,
  3: faClock,
};

export function Agendados(props) {
  const { agendados } = props;

  return (
    <>
      <main className="flex flex-col gap-y-7 pb-20">
        {agendados.map((agendado, index) => {
          const icone = icons[agendado.idTipoAnuncio];

          return (
            <Link
              to={`/atividades/agendados/${agendado.id}`}
              key={index}
              className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center
              shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.25),0_4px_4px_0_rgba(0,0,0,0.25)]
              px-4 py-6 mx-9"
            >
              <div className="flex">
                <FontAwesomeIcon icon={icone} className="w-6 h-6 mr-3" />

                <div>
                  <h2 className="font-bold text-sm text-menu-gray mb-3">
                    {agendado.titulo}
                  </h2>
                  <div className="flex items-center mb-4">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="w-3 h-3 rounded-full p-1 bg-menu-gray text-white mr-2"
                    />
                    <p className="text-xs font-medium">{agendado.nome}</p>
                  </div>
                  <p className="text-xs font-medium">
                    Encontro agendado para o dia e horário:{" "}
                    {agendado.dataAgendada}
                  </p>
                  <p className="text-xs font-medium">
                    Cidade: {agendado.cidade}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </main>
    </>
  );
}
