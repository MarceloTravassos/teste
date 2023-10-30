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
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function MarcarCompromisso1DoacaoRapida() {
  const location = useLocation();
  const navigate = useNavigate();
  const quantidadesIniciais = location.state.doacaoRapida.itemList.map(() => 0);
  const itemPropostaRequestDtoList = [];

  const [isActive, setIsActive] = useState(false);
  let [quantidades, setQuantidades] = useState(quantidadesIniciais);

  const show = () => {
    setIsActive(!isActive);
  };

  const somaQuantidade = (index) => {
    setQuantidades((prevQuantidades) => {
      const newQuantidades = [...prevQuantidades];
      if (
        newQuantidades[index] < location.state.doacaoRapida.itemList[index].quantidade
      ) {
        newQuantidades[index] += 1;
      }
      return newQuantidades;
    });
  };

  const subtraiQuantidade = (index) => {
    setQuantidades((prevQuantidades) => {
      const newQuantidades = [...prevQuantidades];
      if (newQuantidades[index] > 0) {
        newQuantidades[index] -= 1;
      }
      return newQuantidades;
    });
  };

  const submit = (e) => {
    e.preventDefault();
    location.state.doacaoRapida.itemList.map((item, index) => {
      itemPropostaRequestDtoList.push({
        idItem: item.id,
        quantidade: quantidades[index],
      });
    });

    const doacaoRapida = location.state.doacaoRapida;

    return navigate("/marcar-compromisso-doacaorapida-2", {
      state: { itemPropostaRequestDtoList, doacaoRapida },
    });
  };

  return (
    <>
      <Header title="Doações" />
      <main>
        <form onSubmit={submit} className="flex flex-col mx-9 my-3 pb-20">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-semibold text-menu-gray">
              {location.state.doacaoRapida.titulo}
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
            {location.state.doacaoRapida.nome}
          </div>

          {location.state.doacaoRapida.itemList.map((item, index) => (
            <div key={index}>
              <div className="flex gap-4">
                <div className="w-2/4">
                  <FormLabel name="nomeproduto">Produto</FormLabel>
                  <FormInput
                    value={item.nome}
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
                    value={item.categoriaItemModel.descricao}
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
                value={item.descricao}
                id="descricao"
                name="descricao"
                rows="3"
                cols="34"
                className="bg-primary bg-opacity-20 p-2 mb-2 rounded-md truncate w-full"
                disabled
              ></textarea>

              <div className="flex gap-4 justify-between mb-4">
                <div className="w-2/5">
                  <FormLabel name="disponivel">Disponível</FormLabel>
                  <FormInput
                    value={item.quantidade}
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
                      type="button"
                      onClick={() => subtraiQuantidade(index)}
                      className="py-2 px-3 border-r border-menu-gray border-opacity-70"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      value={quantidades[index]}
                      id="quantidade"
                      name="quantidade"
                      className="w-10 text-center"
                      onChange={(e) => {
                        const newValue = parseInt(e.target.value) || 0;
                        setQuantidades((prevQuantidades) => {
                          const newQuantidades = [...prevQuantidades];
                          newQuantidades[index] = newValue;
                          return newQuantidades;
                        });
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => somaQuantidade(index)}
                      className="py-2 px-3 border-l border-menu-gray border-opacity-70"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button className="mt-3 bg-primary px-16 py-2 rounded-lg font-bold text-center text-white text-xl w-fit mx-auto">
            Continuar
          </button>
        </form>
      </main>
      <Navbar />
    </>
  );
}
