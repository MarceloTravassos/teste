import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";
import { RegisterForm } from "../components/RegisterForm";
import { RegisterLogo } from "../components/RegisterLogo";

export function RegisterPessoa() {
  return (
    <main className="flex flex-col items-center bg-primary min-h-screen">
      <RegisterLogo />
      <RegisterForm>
        <h1 className="font-bold text-2xl text-primary mb-2 text-center">
          Cadastro
        </h1>

        <FormLabel name="cpf">CPF:</FormLabel>
        <FormInput name="cpf" type="text" />

        <FormLabel name="cep">CEP:</FormLabel>
        <FormInput name="cep" type="text" />

        <FormLabel name="endereco">Endereço:</FormLabel>
        <FormInput name="endereco" type="text" />

        <div className="flex gap-2">
          <div>
            <FormLabel name="numero">
              Número:
            </FormLabel>
            <FormInput className="w-20" name="numero" type="text" />
          </div>

          <div>
            <FormLabel name="complemento">
              Complemento:
            </FormLabel>
            <FormInput className="w-32" name="complemento" type="text" />
          </div>
        </div>

        <FormLabel name="comprovante">Comprovante de residência:</FormLabel>
        <FormInput name="comprovante" type="file" />

        <SubmitButton>Finalizar</SubmitButton>
      </RegisterForm>
    </main>
  );
}
