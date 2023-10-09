import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";
import {
  faCalendar,
  faHandHoldingHeart,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../components/Header";
import { useState } from "react";

export function CancelamentoAgendado() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupCancelled, setPopupCancelled] = useState(true);

  return (
    <>
      <Header title="Dados da doação" />

      <main className="flex flex-col gap-y-5 mt-4">
        {showPopup && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div
              className="flex flex-col text-menu-gray leading-tight font-medium w-4/5 bg-white border-[2.5px] border-light-gray
            px-6 py-5 rounded-lg shadow-md justify-center"
            >
              <h1 className="text-lg mb-4">Comente mais sobre:</h1>
              <textarea
                placeholder="Digite aqui..."
                rows="5"
                className="bg-light-gray bg-opacity-50 text-sm px-4 py-2 rounded-xl
              border-2 border-light-gray"
              ></textarea>
              <button
                className="mt-4 mx-auto w-fit md:w-64 px-14 py-3 font-bold text-sm bg-primary text-white rounded-md"
                onClick={() => setShowPopup(false)}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {showPopupCancelled && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div
              className="flex flex-col text-menu-gray leading-tight font-medium w-4/5 bg-white border-[2.5px] border-light-gray
            px-6 py-5 rounded-lg shadow-md justify-center"
            >
              <h1 className="text-lg mb-4">
                Compromisso desmarcado, agradecemos a notificação
              </h1>
              <button
                className="mt-4 mx-auto w-fit md:w-64 px-16 py-3 font-bold text-sm bg-primary text-white rounded-md"
                onClick={() => setPopupCancelled(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col text-menu-gray mx-5 text-lg">
          <h1 className="font-semibold mb-11">Por qual motivo?</h1>
          <div>
            <ul className="font-medium px-2">
              <li className="border-b-2 py-5">
                Não poderei comparecer no local
              </li>
              <li className="border-b-2 py-5">
                O doador me pediu pra cancelar
              </li>
              <li className="border-b-2 py-5">
                Agendei o compromisso por engano
              </li>
              <li
                className="border-b-2 py-5"
                onClick={() => setShowPopup(true)}
              >
                Outro motivo...
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Navbar />
    </>
  );
}
