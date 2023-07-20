import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function Filtro() {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center text-menu-gray px-5 py-1 gap-x-3 bg-white rounded-full"
        onClick={onClick}
      >
        <p className="font-medium">Selecione filtros aqui</p>
        <FontAwesomeIcon className="w-5 h-5" icon={faChevronDown} />
      </div>

      {isActive && (
        <nav className="top-28 absolute bg-white text-menu-gray rounded-t-2xl">
          <div className="px-4 py-2">
            <input type="text" placeholder="Palavra chave" />
            <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
          </div>

          <hr className="bg-black h-0.5" />

          <div className="px-4 py-2">
            <input type="text" placeholder="Palavra chave" />
            <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
          </div>

          <hr className="bg-black h-0.5" />
        </nav>
      )}
    </div>
  );
}
