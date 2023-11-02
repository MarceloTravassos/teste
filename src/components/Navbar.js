import {
  faFlag,
  faHome,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../api";

export function Navbar() {
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    navigate("/");
    window.location.reload();
  }

  return (
    <>
      <nav className="fixed w-full bottom-0 left-0 bg-primary text-white h-16 py-3 px-9 flex justify-between items-center">
        <Link
          to="/reportar"
          className="flex flex-col items-center justify-center font-bold text-xs"
        >
          <FontAwesomeIcon className="w-5 h-5 mb-1" icon={faFlag} />
          Reportar
        </Link>

        <Link
          to="/home"
          className="flex flex-col items-center justify-center font-bold text-xs"
        >
          <FontAwesomeIcon className="w-5 h-5 mb-1" icon={faHome} />
          Home
        </Link>

        <Link
          onClick={handleSignOut}
          className="flex flex-col items-center justify-center font-bold text-xs"
        >
          <FontAwesomeIcon className="w-5 h-5 mb-1" icon={faRightFromBracket} />
          Sair
        </Link>
      </nav>
    </>
  );
}
