import { SubmitButton } from "../components/SubmitButton";
import { RegisterForm } from "../components/RegisterForm";
import { RegisterLogo } from "../components/RegisterLogo";

export function ConfirmarEmail() {
  return (
    <main className="flex flex-col items-center bg-primary min-h-screen">
      <RegisterLogo />
      <RegisterForm>
        <h1 className="font-bold text-2xl text-primary mb-2 text-center">
          Cadastro
        </h1>

        <p className="text-center font-medium text-stone-500 mb-16">
          Um e-mail de confirmação foi enviado para seu endereço de e-mail para
          garantirmos sua autenticidade e segurança.
        </p>

        <p className="text-center font-medium text-stone-500 mb-4">
          Por favor, cheque sua caixa de mensagens no e-mail...
        </p>

        <SubmitButton>Continuar</SubmitButton>
      </RegisterForm>
    </main>
  );
}
