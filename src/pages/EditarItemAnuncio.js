import { useLocation } from "react-router-dom";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

export function EditarItemAnuncio() {
  const location = useLocation();

  const [nome, setNome] = useState(location.state.item.nome);
  // const [categoria, setCategoria] = useState(location.state.item.categoria);
  const [quantidade, setQuantidade] = useState(location.state.item.quantidade);
  const [descricao, setDescricao] = useState(location.state.item.descricao);

  return (
    <>
      <main>
        <Header title="Meus anúncios" />

        <button type="button" onClick={() => console.log(location.state.item)}>
          Teste
        </button>

        <form action="" className="flex flex-col mx-9 my-3 pb-20">
          <FormLabel name="nomeProduto">Nome do produto</FormLabel>
          <FormInput
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            name="nomeProduto"
            type="text"
            id="nomeProduto"
          />

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
                onChange={(e) => setQuantidade(e.target.value)}
                value={quantidade}
                className="w-full"
                placeholder="3"
                name="quantidade"
                type="number"
                id="quantidade"
              />
            </div>
          </div>

          <FormLabel>Descrição</FormLabel>
          <textarea
            onChange={(e) => setDescricao(e.target.value)}
            value={descricao}
            rows="3"
            cols="40"
            placeholder="Arroz da marca Camil do tipo 1 com validade para fevereiro de 2024"
            className="bg-primary bg-opacity-20 p-2 mb-2 rounded-md"
          ></textarea>

          <button className="rounded-md mx-auto mt-3 xl:mt-56 bg-primary text-white text-xl font-bold px-14 py-2 w-fit">
            Continuar
          </button>
        </form>

        <Navbar />
      </main>
    </>
  );
}
