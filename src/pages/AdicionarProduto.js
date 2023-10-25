import { useLocation } from "react-router-dom";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";

export function AdicionarProduto() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  });

  return (
    <>
      <main>
        <Header title="Novo produto" />

        <form action="" className="flex flex-col mx-9 my-3">
          <FormLabel name="nomeProduto">Nome do produto</FormLabel>
          <FormInput name="nomeProduto" type="text" id="nomeProduto" />

          <div className="flex gap-2">
            <div className="w-3/5">
              <FormLabel name="categoria">Categoria</FormLabel>
              <select
                name="categoria"
                className="bg-primary px-2 py-5 text-black rounded-md h-8 mb-2 bg-opacity-20 w-full"
              >
                <option defaultValue="" disabled>
                  Selecione...
                </option>
                <option value="categoria1" selected>
                  Categoria 1...
                </option>
                <option value="categoria2">Categoria 2...</option>
              </select>
            </div>

            <div className="w-2/5">
              <FormLabel name="quantidade">Quantidade</FormLabel>
              <FormInput
                className="w-full"
                name="quantidade"
                type="number"
                id="quantidade"
              />
            </div>
          </div>

          <FormLabel>Descrição</FormLabel>
          <textarea
            rows="3"
            cols="40"
            className="bg-primary bg-opacity-20 p-2 mb-2 rounded-md"
          ></textarea>

          <button className="rounded-md mx-auto mt-48 xl:mt-56 bg-primary text-white text-xl font-bold px-14 py-2 w-fit">
            Adicionar
          </button>
        </form>

        <Navbar />
      </main>
    </>
  );
}
