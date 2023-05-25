import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  return (
    <div className="flex flex-col justify-center">
    <div className="flex items-center justify-between bg-primary text-white py-2 px-4">
      <div className="w-16 h-12 bg-white"></div>
      <h1 className="font-bold text-xl">Nome do Usuário</h1>
      <FontAwesomeIcon className="w-8 h-6" icon={faUser} />
    </div>

    <h1 className="font-bold text-xl text-center mt-11">O que você deseja fazer?</h1>

    <div className="grid grid-cols-2 grid-rows-2 px-auto items-center gap-y-6 gap-x-4">
      <div className="bg-secondary">Oi</div>
      <div className="bg-secondary">Oi</div>
      <div className="bg-secondary">Oi</div>
      <div className="bg-secondary">Oi</div>
    </div>
    </div>
  )
}