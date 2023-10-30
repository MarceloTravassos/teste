import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBox,
  faCalendar,
  faEllipsisV,
  faExclamationTriangle,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHistorico } from "../api";

export function Historico() {
  const { id } = useParams();

  const [isActive, setIsActive] = useState(false);
  const [historico, setHistorico] = useState();

  const show = () => {
    setIsActive(!isActive);
  };

  async function fetchHistorico() {
    try {
      const result = await getHistorico(id);
      setHistorico(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchHistorico();
  }, []);

  useEffect(() => {}, [historico]);

  return (
    <>
      <Header title="Dados do encontro" />

      <main className="flex flex-col gap-y-5 mt-4 pb-20">
        <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 pt-4 pb-6 mx-9 border border-[#807777]">
          <div className="flex">
            <div>
              <div className="relative flex items-center mb-3">
                <h2 className="font-semibold text-lg text-menu-gray leading-tight">
                  Doação de arroz da marca Camil {/* {historico.titulo} */}
                </h2>

                {/* <FontAwesomeIcon
                  onClick={show}
                  className="w-5 h-5"
                  icon={faEllipsisV}
                /> */}

                {/* {isActive && (
                  <>
                    <div className="absolute text-light-gray text-2xl -mt-[15px] right-0 top-10">
                      &#9650;
                    </div>
                    <div className="absolute border border-light-gray mt-2 rounded-lg w-28 -right-4 top-9 bg-white">
                      <ul className="text-xs font-medium text-menu-gray">
                        <div className="flex items-center justify-between px-3 py-2">
                          <li>Denunciar</li>
                          <FontAwesomeIcon
                            className="text-yellow-500"
                            icon={faExclamationTriangle}
                          />
                        </div>
                      </ul>
                    </div>
                  </>
                )} */}
              </div>
              <div className="flex flex-col gap-y-4 items-start justify-center mb-4">
                <div className="flex px-6">
                  <FontAwesomeIcon
                    className="w-6 h-6 text-menu-gray mr-3"
                    icon={faBox}
                  />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Produto(s)</h1>
                    <div>
                      <p className="leading-tight">
                        <span className="font-medium">Nome:</span> Arroz Camil
                      </p>
                      <p className="leading-tight">
                        <span className="font-medium">Categoria:</span> Alimento
                      </p>
                      <p className="leading-tight">
                        <span className="font-medium">Quantidade:</span> 3
                        unidades
                      </p>
                    </div>

                    {/* {historico.itemList.map((item, index) => (
                      <div key={index}>
                        <p className="leading-tight">
                          <span className="font-medium">Nome:</span> {item.nome}
                        </p>
                        <p className="leading-tight">
                          <span className="font-medium">Categoria:</span> {item.categoriaItemModel.descricao}
                        </p>
                        <p className="leading-tight">
                          <span className="font-medium">Quantidade:</span> {item.quantidade} unidades
                        </p>
                      </div>
                    ))} */}
                  </div>
                </div>

                <div className="flex px-6">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-4 h-4 rounded-full p-1 bg-menu-gray text-white mr-3"
                  />
                  <p className="font-medium">Marcelo Sarinho</p>
                  {/* <p className="font-medium">{historico.nomeUsuarioAnuncio}</p> */}
                </div>

                <div className="flex px-6">
                  <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Contato</h1>
                    <p className="leading-tight">(13) 9 8822 - 6578</p>
                    {/* <p className="leading-tight">{historico.telefoneUsuarioAnuncio}</p> */}
                  </div>
                </div>

                <div className="flex px-6">
                  <FontAwesomeIcon icon={faCalendar} className="w-6 h-6 mr-3" />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Data e horário</h1>
                    <p className="leading-tight">12/06/2023 - 22:00</p>
                    {/* <p className="leading-tight">{historico.dataAgendada}</p> */}
                  </div>
                </div>

                <div className="flex px-6">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-6 h-6 mr-3"
                  />
                  <div className="text-sm">
                    <h1 className="text-base font-medium">Local de encontro</h1>
                    <p className="leading-tight">11520-030</p>
                    {/* <p className="leading-tight">{historico.cep}</p> */}
                    <p className="leading-tight">R. Dom Pedro I, 256, Ap 24</p>
                    {/* <p className="leading-tight">
                      {historico.logradouro}, {historico.numero},{" "}
                      {historico.complemento ?? ""}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-center font-semibold text-success text-lg">
            Concluído
            {/* {historico.podeConfirmarEncontro} talvez nao seja assim que faz */}
          </h2>
        </div>
      </main>

      <Navbar />
    </>
  );
}
