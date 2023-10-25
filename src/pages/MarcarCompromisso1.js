import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import {
  faEllipsisV,
  faExclamationTriangle,
  faMinus,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function MarcarCompromisso1() {
  const [isActive, setIsActive] = useState(false);
  let [quantidade, setQuantidade] = useState(0);

  const location = useLocation();

  const show = () => {
    setIsActive(!isActive);
  };

  const teste = (e) => {
    e.preventDefault();
    console.log(location.state.doacao);
  };

  const somaQuantidade = (e) => {
    e.preventDefault();
    if (quantidade < location.state.doacao.itemList[0].quantidade)
      setQuantidade(quantidade + 1);
  };

  const subtraiQuantidade = (e) => {
    e.preventDefault();
    if (quantidade > 0) setQuantidade(quantidade - 1);
  };

  return (
    <>
      <Header title="Doações" />
      <main>
        <button onClick={teste}>Teste</button>

        <form action="" className="flex flex-col mx-9 my-3 pb-20">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-semibold text-menu-gray">
              {location.state.doacao.titulo}
            </h1>

            <div className="relative">
              <FontAwesomeIcon
                onClick={show}
                className="relative w-7 h-7 text-menu-gray"
                icon={faEllipsisV}
              />

              {isActive && (
                <>
                  <div className="absolute text-light-gray text-2xl -mt-[15px] top-10 right-[5px]">
                    &#9650;
                  </div>
                  <div className="bg-white absolute top-11 -right-1 flex flex-col mb-2 border-[1.5px] rounded-lg px-3 py-2">
                    <div className="flex">
                      <h5 className="text-xs mr-3">Denúnciar</h5>

                      <FontAwesomeIcon
                        className="text-yellow-500"
                        icon={faExclamationTriangle}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex mb-5 text-menu-gray">
            <FontAwesomeIcon className="w-6 h-6 mr-3" icon={faUser} />
            {location.state.doacao.nome}
          </div>

          <div className="flex gap-4">
            <div className="w-2/4">
              <FormLabel name="nomeproduto">Produto</FormLabel>
              <FormInput
                value={location.state.doacao.itemList[0].nome}
                className="w-full truncate"
                name="nomeproduto"
                type="text"
                id="nomeproduto"
                disabled
              />
            </div>

            <div className="w-2/4">
              <FormLabel name="categoria">Categoria</FormLabel>
              <FormInput
                value={location.state.doacao.itemList[0].categoriaItemModel.descricao}
                className="w-full truncate"
                name="categoria"
                type="text"
                id="categoria"
                disabled
              />
            </div>
          </div>

          <FormLabel name="descricao">Descrição</FormLabel>
          <textarea
            value={location.state.doacao.itemList[0].descricao}
            id="descricao"
            name="descricao"
            rows="3"
            cols="40"
            className="bg-primary bg-opacity-20 p-2 mb-2 rounded-md truncate"
            disabled
          ></textarea>

          <div className="flex gap-4 justify-between">
            <div className="w-2/5">
              <FormLabel name="disponivel">Disponível</FormLabel>
              <FormInput
                className="w-full"
                name="disponivel"
                type="text"
                id="disponivel"
                disabled
              />
            </div>

            <div className="w-3/5">
              <FormLabel name="quantidade">Quantidade</FormLabel>
              <div className="w-fit flex border border-menu-gray border-opacity-70 rounded-md">
                <button
                  onClick={subtraiQuantidade}
                  className="py-2 px-3 border-r border-menu-gray border-opacity-70"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                  value={quantidade}
                  required
                  id="quantidade"
                  name="quantidade"
                  className="w-10 text-center"
                  onChange={(e) => setQuantidade(parseInt(e.target.value))}
                />
                <button
                  onClick={somaQuantidade}
                  className="py-2 px-3 border-l border-menu-gray border-opacity-70"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>

          <button className="mt-6 bg-primary px-16 py-2 rounded-lg font-bold text-center text-white text-xl w-fit mx-auto">
            Continuar
          </button>
        </form>
      </main>
      <Navbar />
    </>
  );
}
