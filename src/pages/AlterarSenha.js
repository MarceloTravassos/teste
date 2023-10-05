import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export function AlterarSenha() {
  return (
    <>
      <main>
        <Header title="Alteração de senha" />

        <h2 className="my-8 text-center font-bold text-xl text-menu-gray">
          Preencha os campos abaixo
        </h2>

        <form action="" className="flex flex-col mx-9 my-3">
          <FormLabel name="senhaAtual">Digite sua senha atual:</FormLabel>
          <FormInput name="senhaAtual" type="text" id="senhaAtual" />

          <FormLabel name="novaSenha">Nova senha:</FormLabel>
          <FormInput name="novaSenha" type="text" id="novaSenha" />

          <FormLabel name="confirmarSenha">Confirmar senha:</FormLabel>
          <FormInput name="confirmarSenha" type="text" id="confirmarSenha" />

          <button className="rounded-md mx-auto mt-10 xl:mt-56 bg-primary text-white text-xl font-bold px-14 py-2 w-fit">
            Continuar
          </button>
        </form>

        <Navbar />
      </main>
    </>
  );
}
