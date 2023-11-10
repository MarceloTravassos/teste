import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { useState } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { editUser } from "../api";
import { Error } from "../components/Error";

export function AlterarDadosCadastrais() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await editUser(nome, telefone);
      setShowPopup(true);
    } catch (error) {
      setError(error.response.data.detail);
      setErrorPopup(true);
    }
  }

  return (
    <main className="h-screen">
      {errorPopup && (
        <Error error={error} onClick={() => setErrorPopup(false)} />
      )}

      {showPopup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col border-[1.5px] border-light-gray leading-tight font-medium w-4/5 bg-white px-8 py-9 rounded-lg shadow-md items-center justify-center">
            <p className="text-menu-gray font-medium leading-tight mb-9 text-justify">
              Seus dados foram alterados com sucesso!
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

      <Header title="Alterar dados" />

      <h2 className="my-8 text-center font-bold text-xl text-menu-gray">
        Preencha os campos abaixo
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col mx-9 my-3">
        <FormLabel name="nome">Nome:</FormLabel>
        <FormInput
          placeholder="Marcelo Sarinho"
          name="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <FormLabel name="telefone">Telefone:</FormLabel>
        <FormInput
          placeholder="(13) 9 9999 9999"
          name="telefone"
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <button
          type="submit"
          className="rounded-md mx-auto mt-10 xl:mt-56 bg-primary text-white text-xl font-bold px-14 py-2 w-fit"
        >
          Confirmar
        </button>
      </form>

      <Navbar />
    </main>
  );
}
