import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { editPassword } from "../api";

export function AlterarSenha() {
  const [showPopup, setShowPopup] = useState(false);
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await editPassword(senhaAtual, novaSenha, confirmaSenha);
      setShowPopup(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main className="h-screen">
        {showPopup && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col border-[1.5px] border-light-gray leading-tight font-medium w-4/5 bg-white px-8 py-9 rounded-lg shadow-md items-center justify-center">
              <p className="text-menu-gray font-medium leading-tight mb-9 text-justify">
                Sua senha foi alterada com sucesso!
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

        <Header title="Alterar senha" />

        <h2 className="my-8 text-center font-bold text-xl text-menu-gray">
          Preencha os campos abaixo
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col mx-9 my-3">
          <FormLabel name="senhaAtual">Digite sua senha atual:</FormLabel>
          <FormInput
            name="senhaAtual"
            type="password"
            id="senhaAtual"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
          />

          <FormLabel name="novaSenha">Nova senha:</FormLabel>
          <FormInput
            name="novaSenha"
            type="password"
            id="novaSenha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />

          <FormLabel name="confirmaSenha">Confirmar senha:</FormLabel>
          <FormInput
            name="confirmaSenha"
            type="password"
            id="confirmaSenha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />

          <button
            type="submit"
            className="rounded-md mx-auto mt-10 xl:mt-56 bg-primary text-white text-xl font-bold px-14 py-2 w-fit"
          >
            Continuar
          </button>
        </form>

        <Navbar />
      </main>
    </>
  );
}
