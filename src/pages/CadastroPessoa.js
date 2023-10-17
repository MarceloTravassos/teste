import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";
import { useState } from "react";
import { ComprovanteInput } from "../components/ComprovanteInput";
import logo from "../assets/logo.jpeg";

export function CadastroPessoa() {
  const [cpf, setCPF] = useState("");
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [comprovante, setComprovante] = useState("");

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
    <main className="flex flex-col items-center bg-primary min-h-screen">
      <img src={logo} alt="Logo Doar Mais" className="mb-7 mt-9 mx-auto w-32" />

      <div className="w-72 h-auto mb-2 px-5 py-3 rounded-xl bg-white">
        <form className="flex flex-col">
          <h1 className="font-bold text-2xl text-primary mb-2 text-center">
            Cadastro
          </h1>

          <FormLabel name="cpf">CPF:</FormLabel>
          <FormInput
            name="cpf"
            type="text"
            value={cpf}
            onChange={handleCPFChange}
          />

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
                className="w-32"
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

          <SubmitButton type="submit">Finalizar</SubmitButton>
        </form>
      </div>
    </main>
  );
}
