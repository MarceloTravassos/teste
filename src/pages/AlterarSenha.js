import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";

export function AlterarSenha() {
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
          <div className="flex flex-col bg-white px-14 py-11 rounded-lg shadow-md items-center justify-center">
            <p className="text-menu-gray font-medium leading-tight">
              Sua operação foi realizada com sucesso, agora já pode acessar o
              seu perfil com a nova senha cadastrada no site!
            </p>
            <button
              className="mt-2 px-4 py-2 bg-primary text-white rounded-md"
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
        className="flex flex-col rounded-xl p-5 w-full bg-white text-primary text-base font-medium"
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

        <SubmitButton className="mb-4" type="submit">
          Salvar
        </SubmitButton>
      </form>
    </main>
  );
}
