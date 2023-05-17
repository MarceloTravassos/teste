import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";
import { RegisterForm } from "../components/RegisterForm";
import { RegisterLogo } from "../components/RegisterLogo";

export function Register() {
  return (
    <main className="flex flex-col items-center bg-primary min-h-screen">
      <RegisterLogo />
      <RegisterForm>
        <h1 className="font-bold text-2xl text-primary mb-2 text-center">
          Cadastro
        </h1>
        <FormLabel name="nome">Nome:</FormLabel>
        <FormInput name="nome" type="text" />

        <FormLabel name="email">Email:</FormLabel>
        <FormInput name="email" type="text" />

        <FormLabel name="telefone">Telefone:</FormLabel>
        <FormInput name="telefone" type="text" />

        <FormLabel name="senha">Senha:</FormLabel>
        <FormInput name="senha" type="text" />

        <FormLabel name="confirmar-senha">Confirmar senha:</FormLabel>
        <FormInput name="confirmar-senha" type="text" />

        <SubmitButton>Continuar</SubmitButton>
      </RegisterForm>
    </main>
  );
}
