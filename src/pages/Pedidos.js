import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";

export function Pedidos() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-between bg-primary text-white py-2 px-4 gap-y-7">
        <div className="flex items-center">
          <FontAwesomeIcon className="w-5 h-5 mr-2" icon={faFilter} />

          <select
            name="filtro"
            className="text-sm font-bold text-menu-gray py-2 px-1 rounded-full"
          >
            <option value="" selected disabled>
              Selecione os filtros aqui
            </option>
            <option value="filtro1">Filtro 1</option>
            <option value="filtro2">Filtro 2</option>
          </select>
        </div>
        <div className="relative top-9 left-32">
          <FontAwesomeIcon
            icon={faPlus}
            className="bg-success p-3 rounded-full w-7 h-7"
          />
        </div>
      </div>
      <Navbar />
    </>
  );
}