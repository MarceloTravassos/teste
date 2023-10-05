import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { RegisterLogo } from "../components/RegisterLogo";
import { useState } from "react";

export function CadastroONG() {
  const [cnpj, setCNPj] = useState("");
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [pontoReferencia, setPontoReferencia] = useState("");

  function handleCNPJChange(e) {
    setCNPj(e.target.value);
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

  function handlePontoReferenciaChange(e) {
    setPontoReferencia(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("cnpj: ", cnpj);
    console.log("cep: ", cep);
    console.log("endereco: ", endereco);
    console.log("numero: ", numero);
    console.log("complemento: ", complemento);
    console.log("ponto referencia: ", pontoReferencia);
  }

  return (
    <main className="flex flex-col items-center bg-primary min-h-screen">
      <RegisterLogo />

      <div className="w-72 h-auto mb-2 px-5 py-3 rounded-xl bg-white mt-4">
        <form className="flex flex-col">
          <h1 className="font-bold text-2xl text-primary mb-2 text-center">
            Cadastro
          </h1>

          <FormLabel name="cnpj">CNPJ:</FormLabel>
          <FormInput
            name="cnpj"
            type="text"
            value={cnpj}
            onChange={handleCNPJChange}
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

          <FormLabel name="ponto-referencia">Ponto de referência:</FormLabel>
          <FormInput
            name="ponto-referencia"
            type="text"
            value={pontoReferencia}
            onChange={handlePontoReferenciaChange}
          />

          <button
            type="submit"
            className="mt-2 bg-primary px-16 py-2 rounded-lg font-bold text-center text-white text-xl"
          >
            Finalizar
          </button>
        </form>
      </div>
    </main>
  );
}
