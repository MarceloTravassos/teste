import { SubmitButton } from "../components/SubmitButton";
import { RegisterLogo } from "../components/RegisterLogo";

export function InstrucoesSenha() {
  return (
    <main className="flex flex-col items-center px-12 bg-primary min-h-screen">
      <RegisterLogo />
      <div className="mt-4 flex flex-col rounded-xl p-5 bg-white text-primary
      text-base font-medium md:w-80 lg:w-96">
        <h1 className="font-bold text-2xl text-primary mb-2 text-center">
          Cadastro
        </h1>

        <p className="text-justify leading-tight font-medium text-stone-500 mb-16">
          Um e-mail de confirmação foi enviado para seu endereço de e-mail para garantirmos sua autenticidade e segurança.
        </p>

        <p className="text-justify leading-tight font-medium text-stone-500 mb-14">
          Por favor, cheque sua caixa de mensagens no e-mail...
        </p>

        <SubmitButton className="hover:bg-primary-hover transition">Continuar</SubmitButton>
      </div>
    </main>
  );
}
