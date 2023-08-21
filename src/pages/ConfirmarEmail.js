import { SubmitButton } from "../components/SubmitButton";
import { RegisterForm } from "../components/RegisterForm";
import { RegisterLogo } from "../components/RegisterLogo";

export function InstrucoesSenha() {
  return (
    <main className="flex flex-col items-center bg-primary min-h-screen">
      <RegisterLogo />
      <RegisterForm>
        <h1 className="font-bold text-2xl text-primary mb-2 text-center">
          Cadastro
        </h1>

        <p className="text-justify leading-tight font-medium text-stone-500 mb-16">
          Uma mensagem foi enviada para o endereço de email indicado com as
          instruções e o link para alteração de senha.
        </p>

        <p className="text-justify leading-tight font-medium text-stone-500 mb-14">
          Por favor, cheque sua caixa de mensagens no e-mail...
        </p>

        <SubmitButton>Continuar</SubmitButton>
      </RegisterForm>
    </main>
  );
}
