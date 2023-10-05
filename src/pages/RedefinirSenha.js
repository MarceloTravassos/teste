import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";

export function RedefinirSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  function handleNovaSenhaChange(e) {
    setNovaSenha(e.target.value);
  }

  function handleConfirmarSenhaChange(e) {
    setConfirmarSenha(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("nova senha: ", novaSenha);
    console.log("confirmar senha: ", confirmarSenha);

    setShowPopup(true);
  }

  return (
    <main className="bg-primary flex flex-col px-12 items-center min-h-screen">
      {showPopup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col leading-tight font-medium w-4/5 bg-white px-12 py-11 rounded-lg shadow-md items-center justify-center">
            <p className="text-menu-gray font-medium leading-tight mb-9 text-justify">
              Sua operação foi realizada com sucesso, agora já pode acessar o
              seu perfil com a nova senha cadastrada no site!
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

      <div className="mb-9 bg-white w-40 h-36 text-center">Logo</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-xl p-5 bg-white text-primary text-base font-medium md:w-80 lg:w-96"
      >
        <h1 className="font-bold text-2xl text-center mb-5">
          Altere sua senha
        </h1>
        <FormLabel name="nova-senha">Nova senha:</FormLabel>
        <FormInput
          name="nova-senha"
          type="password"
          value={novaSenha}
          onChange={handleNovaSenhaChange}
          required
        />

        <FormLabel name="confirmar-senha">Confirmar senha:</FormLabel>
        <FormInput
          name="confirmar-senha"
          type="password"
          value={confirmarSenha}
          onChange={handleConfirmarSenhaChange}
          required
        />

        <button
          type="submit"
          className="hover:bg-primary-hover transition mt-2 bg-primary px-16 py-2 rounded-lg font-bold text-center text-white text-xl"
        >
          Salvar
        </button>
      </form>
    </main>
  );
}
