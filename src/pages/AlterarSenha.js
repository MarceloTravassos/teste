import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export function AlterarSenha() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      <main className="h-screen">
        {showPopup && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col border-[1.5px] border-light-gray leading-tight font-medium w-4/5 bg-white px-8 py-9 rounded-lg shadow-md items-center justify-center">
              <p className="text-menu-gray font-medium leading-tight mb-9 text-justify">
                Sua nova senha foi alterada com sucesso!
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

        <Header title="Alteração de senha" />

        <h2 className="my-8 text-center font-bold text-xl text-menu-gray">
          Preencha os campos abaixo
        </h2>

        <form action="" className="flex flex-col mx-9 my-3">
          <FormLabel name="senhaAtual">Digite sua senha atual:</FormLabel>
          <FormInput name="senhaAtual" type="text" id="senhaAtual" />

          <FormLabel name="novaSenha">Nova senha:</FormLabel>
          <FormInput name="novaSenha" type="text" id="novaSenha" />

          <FormLabel name="confirmarSenha">Confirmar senha:</FormLabel>
          <FormInput name="confirmarSenha" type="text" id="confirmarSenha" />

          <button className="rounded-md mx-auto mt-10 xl:mt-56 bg-primary text-white text-xl font-bold px-14 py-2 w-fit">
            Continuar
          </button>
        </form>

        <Navbar />
      </main>
    </>
  );
}
