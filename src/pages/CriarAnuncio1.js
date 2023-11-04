import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const titles = {
  1: "Doação",
  2: "Pedido",
  3: "Doação Rápida",
};

export function CriarAnuncio1() {
  const navigate = useNavigate();
  const location = useLocation();

  const tipoAnuncio = location.state.tipoAnuncio;

  const options = [
    { id: 0, descricao: "Selecione..." },
    { id: 1, descricao: "Alimento" },
    { id: 2, descricao: "Eletrônico" },
    { id: 3, descricao: "Eletrodoméstico" },
    { id: 4, descricao: "Roupa" },
    { id: 5, descricao: "Móvel" },
    { id: 6, descricao: "Entretenimento" },
    { id: 7, descricao: "Pet" },
    { id: 8, descricao: "Outro" },
  ];

  const [titulo, setTitulo] = useState("");
  const [nome, setNome] = useState("");
  const [categoriaItemModel, setCategoriaItemModel] = useState({
    id: options[0].id,
    descricao: options[0].descricao,
  });
  const [quantidade, setQuantidade] = useState(1);
  const [descricao, setDescricao] = useState("");
  const [listaItens, setListaItens] = useState([]);

  const handleCategoriaChange = (e) => {
    const categoriaId = parseInt(e.target.value);
    const categoriaSelecionada = options.find(
      (option) => option.id === categoriaId
    );
    setCategoriaItemModel({
      id: categoriaSelecionada.id,
      descricao: categoriaSelecionada.descricao,
    });
  };

  const adicionarProduto = (e) => {
    e.preventDefault();
    const produto = { nome, categoriaItemModel, quantidade, descricao };
    setListaItens([...listaItens, produto]);
  };

  const continuarCriacao = (e) => {
    e.preventDefault();
    return navigate("/criar-doacao-2", {
      state: { titulo, listaItens, tipoAnuncio },
    });
  };

  useEffect(() => {}, [categoriaItemModel]);

  return (
    <>
      <Header title={titles[location.state.tipoAnuncio]} />

      <form
        onSubmit={continuarCriacao}
        className="flex flex-col mx-9 my-3 h-main pb-16"
      >
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
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <div className="flex gap-2">
          <div className="w-3/5">
            <FormLabel name="categoria">Categoria</FormLabel>
            <select
              name="categoria"
              id="categoria"
              required
              className="bg-primary px-2 text-black rounded-md h-10 mb-2 bg-opacity-20 w-full"
              value={categoriaItemModel.id}
              onChange={handleCategoriaChange}
            >
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.descricao}
                </option>
              ))}
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

        {listaItens.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-menu-gray py-2 px-3 rounded-2xl
          text-menu-gray text-sm mb-3 mt-1"
          >
            <div>
              <p className="-mb-1">
                <span className="font-medium leading-tight">Nome:</span>{" "}
                {item.nome}
              </p>
              <p className="-mb-1">
                <span className="font-medium leading-tight">Categoria:</span>{" "}
                {item.categoriaItemModel.descricao}
              </p>
              <p className="-mb-1">
                <span className="font-medium leading-tight">Quantidade:</span>{" "}
                {item.quantidade} unidade(s)
              </p>
            </div>
          </div>
        ))}

        <label className="text-menu-gray font-medium">Adicionar item</label>
        <div className="flex gap-x-4 mb-2">
          <button onClick={adicionarProduto}>
            <FontAwesomeIcon
              icon={faPlus}
              className="w-8 h-8 bg-primary bg-opacity-20 rounded-md px-4 py-2 text-menu-gray"
            />
          </button>
          <p className="text-xs text-menu-gray">
            Clique aqui para adicionar um item a lista
          </p>
        </div>

        <button
          disabled={listaItens.length === 0 ? "disabled" : ""}
          className="mt-2 bg-primary px-16 py-2 rounded-lg font-bold text-center text-white 
        text-xl w-fit mx-auto disabled:bg-opacity-60"
        >
          Continuar
        </button>
      </form>
      <Navbar />
    </>
  );
}
