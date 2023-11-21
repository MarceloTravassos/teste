import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { editUser, getUsuario } from "../api";
import { Error } from "../components/Error";
import { Message } from "../components/Message";
import { useNavigate } from "react-router-dom";

export function AlterarDadosCadastrais() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await editUser(nome, telefone);
      setPopup(true);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function fetchDados() {
    try {
      const result = await getUsuario();
      setNome(result.nome);
      setTelefone(result.telefone);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDados();
  }, []);

  return (
    <main className="pb-20">
      {popup && (
        <Message
          message="Seus dados foram alterados com sucesso!"
          onClick={() => navigate("/home")}
        />
      )}

      {errorPopup && (
        <Error error={error} onClick={() => setErrorPopup(false)} />
      )}

      <Header title="Alterar dados" />

      <h2 className="my-8 text-center font-bold text-xl text-menu-gray">
        Preencha os campos abaixo
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col mx-9 my-3">
        <FormLabel name="nome">Nome:</FormLabel>
        <FormInput
          name="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <FormLabel name="telefone">Telefone:</FormLabel>
        <FormInput
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
