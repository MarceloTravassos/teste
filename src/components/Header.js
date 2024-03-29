import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export function Header(props) {
  const { title } = props;

  const [isActive, setIsActive] = useState(false);

  const show = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center justify-between bg-primary text-white py-4 px-4">
        <img src={logo} alt="Logo Doar Mais" className="w-[70px]" />

        <h1 className="font-bold text-xl">{title}</h1>
        <div className="relative">
          <FontAwesomeIcon className="w-8 h-6" onClick={show} icon={faUser} />
          {isActive && (
            <>
              <div className="z-50 absolute text-2xl -mt-2 ml-1.5">&#9650;</div>
              <div className="z-50 absolute mt-2 rounded-lg w-40 right-0 top-[34px] bg-white">
                <ul className="text-xs font-medium text-menu-gray">
                  <li className="px-3 py-2">
                    <Link to="/alterar-dados">Alterar dados</Link>
                  </li>
                  <hr className="mx-3" />
                  <li className="px-3 py-2">
                    <Link to="/alterar-senha">Alterar senha</Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
