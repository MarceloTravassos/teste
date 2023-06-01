import { faFlag, faHome, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
  return (
    <>
      <nav className="fixed w-full bottom-0 left-0 bg-primary text-white h-16 py-3 px-9 flex justify-between items-center">
        <div className="flex flex-col items-center justify-center font-bold text-xs">
          <FontAwesomeIcon className="w-5 h-5 mb-1" icon={faFlag} />
          Reportar
        </div>

        <div className="flex flex-col items-center justify-center font-bold text-xs">
          <FontAwesomeIcon className="w-5 h-5 mb-1" icon={faHome} />
          Home
        </div>

        <div className="flex flex-col items-center justify-center font-bold text-xs">
          <FontAwesomeIcon className="w-5 h-5 mb-1" icon={faRightFromBracket} />
          Sair
        </div>
      </nav>
    </>
  );
}
