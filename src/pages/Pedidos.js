import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Filtro } from "../components/Filtro";

export function Pedidos() {

  return (
    <>
      <Header title="Pedidos" />

      <div className="flex flex-col items-center justify-between bg-primary text-white py-2 px-4 gap-y-7 mb-8 rounded-b-lg">
        <div className="flex items-center">
          <Filtro tipo="Pedidor" />
        </div>
        <div className="flex w-full h-4 justify-end relative top-2 mb-4">
          <FontAwesomeIcon
            icon={faPlus}
            className="bg-success p-3 rounded-full w-7 h-7"
          />
        </div>
      </div>

      <main className="flex flex-col gap-y-7">
        <div className="flex flex-col bg-div-gray rounded-2xl justify-center items-center drop-shadow-md px-9 pt-3 pb-11 mx-9 border border-[#807777]">
          <FontAwesomeIcon
            icon={faUser}
            className="bg-primary rounded-full w-6 h-6 p-2 text-white"
          />
          <h2 className="font-bold text-sm text-menu-gray mb-3">
            Nome pedidor
          </h2>
          <p className="text-sm text-[#807777] font-medium">
            Pedido de roupas, alimentos, livros, guarda roupa semi novo...
          </p>
        </div>

        <div className="flex flex-col bg-div-gray rounded-2xl justify-center items-center drop-shadow-md px-9 pt-3 pb-11 mx-9 border border-[#807777]">
          <FontAwesomeIcon
            icon={faUser}
            className="bg-primary rounded-full w-6 h-6 p-2 text-white"
          />
          <h2 className="font-bold text-sm text-menu-gray mb-3">
            Nome pedidor
          </h2>
          <p className="text-sm text-[#807777] font-medium">
            Pedido de roupas, alimentos, livros, guarda roupa semi novo...
          </p>
        </div>
      </main>
      <Navbar />
    </>
  );
}
