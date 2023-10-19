import {
  faChevronDown,
  faChevronUp,
  faFilter,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function Filtro(props) {
  const { tipo } = props;

  const [isActive, setIsActive] = useState(false);
  const [isActiveTipo, setIsActiveTipo] = useState(false);
  const [isActiveCategoria, setIsActiveCategoria] = useState(false);

  const onClick = () => setIsActive(!isActive);
  const onClickTipo = () => setIsActiveTipo(!isActiveTipo);
  const onClickCategoria = () => setIsActiveCategoria(!isActiveCategoria);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center">
        <FontAwesomeIcon className="w-5 h-5 mr-2" icon={faFilter} />

        <div
          className="flex items-center text-menu-gray px-5 py-1 gap-x-3 bg-white rounded-full"
          onClick={onClick}
        >
          <p className="font-medium">Selecione filtros aqui</p>
          <FontAwesomeIcon
            className="w-5 h-5"
            icon={isActive ? faChevronUp : faChevronDown}
          />
        </div>
      </div>

      {isActive && (
        <nav className="top-[120px] absolute bg-white text-menu-gray text-opacity-70 font-medium rounded-t-2xl rounded-b-2xl z-50">
          <div className="flex justify-between items-center px-8 py-2">
            <input type="text" placeholder="Palavra chave" />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          <hr className="bg-black h-0.5" />

          <div className="flex justify-between items-center px-8 py-2">
            <input type="text" placeholder="Cidade" />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          <hr className="bg-black h-0.5" />

          <div
            className="flex justify-between items-center px-8 py-2"
            onClick={onClickTipo}
          >
            {tipo}
            <FontAwesomeIcon
              icon={isActiveTipo ? faChevronUp : faChevronDown}
            />
          </div>

          {isActiveTipo && (
            <div className="px-8">
              <ul className="list-disc">
                <li className="py-1 text-primary text-opacity-70">Pessoa</li>
                <li className="py-1 text-primary text-opacity-70">ONG</li>
              </ul>
            </div>
          )}

          <hr className="bg-black h-0.5" />

          <div
            className="flex justify-between items-center px-8 py-2"
            onClick={onClickCategoria}
          >
            Categoria
            <FontAwesomeIcon
              icon={isActiveCategoria ? faChevronUp : faChevronDown}
            />
          </div>

          {isActiveCategoria && (
            <div className="px-8">
              <ul className="list-disc">
                <li className="py-2 text-primary text-opacity-70">Alimentos</li>
                <li className="py-2 text-primary text-opacity-70">Roupas</li>
                <li className="py-2 text-primary text-opacity-70">Móveis</li>
              </ul>
            </div>
          )}
        </nav>
      )}
    </div>
  );
}
