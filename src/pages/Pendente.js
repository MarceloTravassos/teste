import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faBox,
  faCalendar,
  faCircleChevronLeft,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { confirmarPendente, getPendente, recusarPendente } from "../api";
import { LoadingPrimary } from "../components/LoadingPrimary";

export function Pendente() {
  const { id } = useParams();

  const [pendente, setPendente] = useState();
  const [showPopup, setShowPopup] = useState(false);

  async function fetchPendente() {
    try {
      const result = await getPendente(id);
      setPendente(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmar() {
    try {
      // await confirmarPendente(id);
      console.log("confirmou");
      setShowPopup(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function recusar() {
    try {
      // await recusarPendente(id);
      console.log("recusou");
      setShowPopup(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPendente();
  }, []);

  return (
    <>
      <Header title="Pendente" />

      <button type="button" onClick={() => console.log(pendente)}>
        teste
      </button>

      <main className="flex flex-col gap-y-5 mt-4 pb-20">
        {showPopup && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div
              className="flex items-start flex-col leading-tight font-medium w-4/5 bg-white px-12 py-6 rounded-lg
              border-2 border-light-gray justify-center"
            >
              <button className="mb-4" onClick={() => setShowPopup(false)}>
                <FontAwesomeIcon
                  className="w-6 h-6 text-primary"
                  icon={faCircleChevronLeft}
                />
              </button>

              <p className="text-menu-gray font-medium leading-tight mb-6 text-justify">
                Tem certeza que deseja confirmar este compromisso?
              </p>
              <button
                className="mt-2 w-full md:w-64 py-2 font-bold text-xl bg-primary text-white rounded-lg"
                onClick={confirmar}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {pendente ? (
          <div className="flex flex-col bg-white text-menu-gray rounded-2xl justify-center drop-shadow-md px-4 pt-4 pb-6 mx-9 border border-[#807777]">
            <div className="flex">
              <div>
                <h2 className="font-semibold text-lg text-menu-gray mb-3 leading-tight">
                  {pendente.titulo}
                </h2>
                <div className="flex flex-col gap-y-4 items-start justify-center mb-4">
                  <div className="flex px-6">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="w-4 h-4 rounded-full p-1 bg-menu-gray text-white mr-3"
                    />
                    <p className="font-medium">
                      {pendente.nomeUsuarioProposta}
                    </p>
                  </div>

                  <div className="flex px-6">
                    <FontAwesomeIcon
                      className="w-6 h-6 text-menu-gray mr-3"
                      icon={faBox}
                    />
                    <div className="text-sm flex flex-col gap-y-4">
                      <h1 className="text-base font-medium -mb-2">
                        Produto(s)
                      </h1>
                      {pendente.itemList.map((item, index) => (
                        <div key={index}>
                          <p className="leading-tight">
                            <span className="font-medium">Nome:</span>{" "}
                            {item.nome}
                          </p>
                          <p className="leading-tight">
                            <span className="font-medium">Categoria:</span>{" "}
                            {item.categoriaItemModel.descricao}
                          </p>
                          <p className="leading-tight">
                            <span className="font-medium">Quantidade:</span>{" "}
                            {item.quantidade} unidades
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex px-6">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                    <div className="text-sm">
                      <h1 className="text-base font-medium">Contato</h1>
                      <p className="leading-tight">
                        {pendente.telefoneUsuarioProposta}
                      </p>
                    </div>
                  </div>

                  <div className="flex px-6">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="w-6 h-6 mr-3"
                    />
                    <div className="text-sm">
                      <h1 className="text-base font-medium">Data e horário</h1>
                      <p className="leading-tight">{pendente.dataAgendada}</p>
                    </div>
                  </div>

                  <div className="flex px-6">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="w-6 h-6 mr-3"
                    />
                    <div className="text-sm">
                      <h1 className="text-base font-medium">
                        Local de encontro
                      </h1>
                      <p className="leading-tight">{pendente.cep}</p>
                      <p className="leading-tight">
                        {pendente.logradouro}, {pendente.numero},{" "}
                        {pendente.complemento === ""
                          ? "sem complemento"
                          : pendente.complemento}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 w-fit mx-auto rounded-xl border-2 border-light-gray font-medium">
              <button
                type="button"
                onClick={() => setShowPopup(true)}
                className="text-green-500 w-[100px] py-1"
              >
                Confirmar
              </button>
              <span className="text-light-gray">|</span>
              <button
                type="button"
                onClick={recusar}
                className="text-red-500 w-[100px] py-1"
              >
                Recusar
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-4">
            <LoadingPrimary />
          </div>
        )}
      </main>

      <Navbar />
    </>
  );
}
