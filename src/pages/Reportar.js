import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { useState } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export function Reportar() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <main className="h-screen">
      {showPopup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col border-[1.5px] border-light-gray leading-tight font-medium w-4/5 bg-white px-8 py-9 rounded-lg shadow-md items-center justify-center">
            <p className="text-menu-gray font-medium leading-tight mb-9 text-justify">
              Agradecemos por sua observação, estaremos analisando a mensagem e procurando melhorias
            </p>
            <button
              className="mt-2 w-full md:w-64 py-3 font-bold text-xl bg-primary text-white rounded-md"
              onClick={() => setShowPopup(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <Header title="Reportar" />

      <div className="mt-6 mx-9">
        <h2 className="mb-1 font-semibold text-lg text-menu-gray">
          Comente mais sobre:
        </h2>
        <p className="mb-4 leading-tight text-xs text-menu-gray">
          Comente sobre a inconsistência ou erro que você encontrou com detalhes como local, função que se aplica e o que foi visto de errado
        </p>
      </div>

      <form action="" className="flex flex-col mx-9 my-3">
        <textarea
          placeholder="Digite aqui..."
          rows="10"
          className="bg-primary bg-opacity-20 text-sm px-4 py-2 rounded-xl"
        ></textarea>

        <button className="rounded-md mx-auto mt-10 xl:mt-56 bg-primary text-white text-xl font-bold px-14 py-2 w-fit">
          Confirmar
        </button>
      </form>

      <Navbar />
    </main>
  );
}
