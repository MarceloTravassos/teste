import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";
import { RegisterForm } from "../components/RegisterForm";
import { RegisterLogo } from "../components/RegisterLogo";

export function RegisterONG() {
  return (
    <main className="flex flex-col items-center bg-primary min-h-screen">
      <RegisterLogo />
      <RegisterForm>
        <h1 className="font-bold text-2xl text-primary mb-2 text-center">
          Cadastro
        </h1>

        <FormLabel name="cnpj">CNPJ:</FormLabel>
        <FormInput name="cnpj" type="text" />

        <FormLabel name="cep">CEP:</FormLabel>
        <FormInput name="cep" type="text" />

        <FormLabel name="endereco">Endereço:</FormLabel>
        <FormInput name="endereco" type="text" />

        <div className="flex">
          <FormLabel name="cpf">Número:</FormLabel>
          <FormInput name="cpf" type="text" />

          <FormLabel name="complemento">Complemento:</FormLabel>
          <FormInput name="complemento" type="text" />
        </div>

        <FormLabel name="ponto-referencia">Ponto de referência:</FormLabel>
        <FormInput name="ponto-referencia" type="text" />

        <SubmitButton>Finalizar</SubmitButton>
      </RegisterForm>
    </main>
  );
}
