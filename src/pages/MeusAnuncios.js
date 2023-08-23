import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBagShopping,
  faHandHoldingHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export function MeusAnuncios() {
  return (
    <>
      <main className="flex flex-col gap-y-5">
        <div className="relative flex flex-col overflow-hidden h-16 bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md pl-4 mx-9 border border-[#807777]">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="w-6 h-6 mr-3"
            />

            <div className="w-3/5">
              <h2 className="font-bold text-sm text-menu-gray truncate">
                Doação de arroz da marca Camil
              </h2>
              <div className="flex items-center">
                <p className="text-xs font-medium truncate">23/04 - Marcelo Sarinho</p>
              </div>
            </div>

            <div className="w-1/5 h-full absolute top-0 right-0">
              <button className="w-full h-full bg-primary text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col overflow-hidden h-16 bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md pl-4 mx-9 border border-[#807777]">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBagShopping} className="w-6 h-6 mr-3" />

            <div className="w-3/5">
              <h2 className="font-bold text-sm text-menu-gray truncate">
                Pedido de arroz e feijãoPedido de arroz e feijãoPedido de arroz
                e feijãoPedido de arroz e feijãoPedido de arroz e feijão
              </h2>
              <div className="flex items-center">
                <p className="text-xs font-medium truncate">23/04 - Marcelo Sarinho</p>
              </div>
            </div>

            <div className="w-1/5 h-16 absolute top-0 right-0">
              <button className="w-full h-full bg-primary text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col overflow-hidden h-16 bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md pl-4 mx-9 border border-[#807777]">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="w-6 h-6 mr-3"
            />

            <div className="w-3/5">
              <h2 className="font-bold text-sm text-menu-gray truncate">
                Doação de arroz da marca Camil
              </h2>
              <div className="flex items-center">
                <p className="text-xs font-medium truncate">23/04 - Marcelo Sarinho</p>
              </div>
            </div>

            <div className="w-1/5 h-full absolute top-0 right-0">
              <button className="w-full h-full bg-primary text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col overflow-hidden h-16 bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md pl-4 mx-9 border border-[#807777]">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBagShopping} className="w-6 h-6 mr-3" />

            <div className="w-3/5">
              <h2 className="font-bold text-sm text-menu-gray truncate">
                Pedido de arroz e feijãoPedido de arroz e feijãoPedido de arroz
                e feijãoPedido de arroz e feijãoPedido de arroz e feijão
              </h2>
              <div className="flex items-center">
                <p className="text-xs font-medium truncate">23/04 - Marcelo Sarinho</p>
              </div>
            </div>

            <div className="w-1/5 h-16 absolute top-0 right-0">
              <button className="w-full h-full bg-primary text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col overflow-hidden h-16 bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md pl-4 mx-9 border border-[#807777]">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBagShopping} className="w-6 h-6 mr-3" />

            <div className="w-3/5">
              <h2 className="font-bold text-sm text-menu-gray truncate">
                Pedido de arroz e feijão
              </h2>
              <div className="flex items-center">
                <p className="text-xs font-medium truncate">23/04 - Marcelo Sarinho</p>
              </div>
            </div>

            <div className="w-1/5 h-16 absolute top-0 right-0">
              <button className="w-full h-full bg-primary text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Navbar />
    </>
  );
}
