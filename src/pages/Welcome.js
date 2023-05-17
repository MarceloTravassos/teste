import { faUser } from "@fortawesome/free-solid-svg-icons";
import { SecondaryButton } from "../components/SecondaryButton";

export function Welcome() {
  return (
    <main className="bg-primary flex flex-col min-h-screen items-center px-6 text-white">
      <div className="bg-white w-56 h-56 mt-20 mb-5"></div>
      <p className="text-center text-lg">Seja bem-vindo.</p>
      <p className="mb-9 text-center font-bold text-xl">
        Escolha a opção corresponde ao seu caso
      </p>
      <div className="flex space-x-4 font-bold text-lg text-white">
        <SecondaryButton icon={faUser} body="Pessoa Física" />

        <SecondaryButton icon={faUser} body="ONG" />
      </div>
    </main>
  );
}
