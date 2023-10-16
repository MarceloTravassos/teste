import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";
import { useState } from "react";
import { ComprovanteInput } from "../components/ComprovanteInput";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export function AlterarEndereco() {
  const [cpf, setCPF] = useState("");
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [comprovante, setComprovante] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  function handleCPFChange(e) {
    setCPF(e.target.value);
  }

  function handleCEPChange(e) {
    setCEP(e.target.value);
  }

  function handleEnderecoChange(e) {
    setEndereco(e.target.value);
  }

  function handleNumeroChange(e) {
    setNumero(e.target.value);
  }

  function handleComplementoChange(e) {
    setComplemento(e.target.value);
  }

  function handleComprovanteChange(e) {
    setComprovante(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("cpf: ", cpf);
    console.log("cep: ", cep);
    console.log("endereco: ", endereco);
    console.log("numero: ", numero);
    console.log("complemento: ", complemento);
    console.log("comprovante residencia: ", comprovante);
  }

  return (
    <main className="h-screen">
      {showPopup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col border-[1.5px] border-light-gray leading-tight font-medium w-4/5 bg-white px-8 py-9 rounded-lg shadow-md items-center justify-center">
            <p className="text-menu-gray font-medium leading-tight mb-9 text-justify">
              Suas informações de endereço serão avaliadas por um de nossos
              analistas.
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

      <Header title="Alterar endereço" />

      <h2 className="my-2 text-center font-bold text-xl text-menu-gray">
        Preencha os campos abaixo
      </h2>

      <form action="" className="flex flex-col mx-9 my-3">
        <FormLabel name="cep">CEP:</FormLabel>
        <FormInput
          name="cep"
          type="text"
          value={cep}
          onChange={handleCEPChange}
        />

        <FormLabel name="endereco">Endereço:</FormLabel>
        <FormInput
          name="endereco"
          type="text"
          value={endereco}
          onChange={handleEnderecoChange}
        />

        <FormLabel name="confirmarSenha">Confirmar senha:</FormLabel>
        <FormInput name="confirmarSenha" type="text" id="confirmarSenha" />

        <div className="flex gap-6">
          <div>
            <FormLabel name="numero">Número:</FormLabel>
            <FormInput
              className="w-full"
              name="numero"
              type="text"
              value={numero}
              onChange={handleNumeroChange}
            />
          </div>

          <div>
            <FormLabel name="complemento">Complemento:</FormLabel>
            <FormInput
              className="w-40"
              name="complemento"
              type="text"
              value={complemento}
              onChange={handleComplementoChange}
            />
          </div>
        </div>

        <FormLabel name="comprovante">Comprovante de residência:</FormLabel>
        <ComprovanteInput
          value={comprovante}
          onChange={handleComprovanteChange}
        />

        <button className="rounded-md mx-auto mt-10 xl:mt-56 bg-primary text-white text-xl font-bold px-14 py-2 w-fit">
          Confirmar
        </button>
      </form>

      <Navbar />
    </main>
  );
}
