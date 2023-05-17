import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  return (
    <div className="flex items-center justify-evenly bg-primary text-white py-2 px-4">
      <div className="w-16 h-12 bg-white"></div>
      <h1>Nome do Usuário</h1>
      <FontAwesomeIcon/>
    </div>
  )
}