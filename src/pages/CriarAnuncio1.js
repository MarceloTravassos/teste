import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { useState } from "react";

export function CriarAnuncio1() {
  const [titulo, setTitulo] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [descricao, setDescricao] = useState("");

  return (
    <>
      <Header title="Doações" />
      <form action="" className="flex flex-col mx-9 my-3">
        <FormLabel name="titulo">Título do anúncio</FormLabel>
        <FormInput
          placeholder="Digite aqui..."
          name="titulo"
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <FormLabel name="nomeProduto">Nome do produto</FormLabel>
        <FormInput
          placeholder="Digite aqui..."
          name="nomeProduto"
          type="text"
          id="nomeProduto"
          value={nomeProduto}
          onChange={(e) => setNomeProduto(e.target.value)}
        />

        <div className="flex gap-2">
          <div className="w-3/5">
            <FormLabel name="categoria">Categoria</FormLabel>
            <select
              name="categoria"
              id="categoria"
              required
              className="bg-primary px-2 py-5 text-black rounded-md h-8 mb-2 bg-opacity-20 w-full"
              value={categoria}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              <option value="selecione..." disabled>
                Selecione...
              </option>
              <option value="categoria1">Categoria 1...</option>
              <option value="categoria2">Categoria 2...</option>
            </select>
          </div>

          <div className="w-2/5">
            <FormLabel name="quantidade">Quantidade</FormLabel>
            <FormInput
              className="w-full"
              placeholder="Digite aqui..."
              name="quantidade"
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
        </div>

        <FormLabel>Descrição</FormLabel>
        <textarea
          rows="3"
          cols="40"
          placeholder="Digite aqui a descrição do produto..."
          className="bg-primary bg-opacity-20 p-2 mb-2 rounded-md"
          name="descricao"
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>

        <label className="text-menu-gray font-medium">Adicionar item</label>
        <div className="flex gap-x-4 mb-2">
          <button>
            <FontAwesomeIcon
              icon={faPlus}
              className="w-8 h-8 bg-primary bg-opacity-20 rounded-md px-4 py-2 text-menu-gray"
            />
          </button>
          <p className="text-xs text-menu-gray">
            Caso queira que seu anúncio tenha mais de um item, clique aqui para
            adicioná-los
          </p>
        </div>

        <button className="mt-2 bg-primary px-16 py-2 rounded-lg font-bold text-center text-white text-xl w-fit mx-auto">
          Continuar
        </button>
      </form>
      <Navbar />
    </>
  );
}
