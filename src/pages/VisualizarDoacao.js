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
import { SubmitButton } from "../components/SubmitButton";
import { useState } from "react";

export function VisualizarDoacao() {
  const [isActive, setIsActive] = useState(false);

  const show = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Header title="Doações" />
      <main>
        <form action="" className="flex flex-col mx-9 my-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-semibold text-menu-gray">
              Doação de arroz da marca Camil
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

                    <ul className="text-xs font-medium text-menu-gray">
                      <li className="py-2 px-1">Anúncio</li>
                      <hr />
                      <li className="py-2 px-1">Usuário</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex mb-5 text-menu-gray">
            <FontAwesomeIcon className="w-6 h-6 mr-3" icon={faUser} />
            Marcelo Sarinho
          </div>

          <div className="flex gap-4">
            <div className="w-2/4">
              <FormLabel name="nomeproduto">Produto</FormLabel>
              <FormInput
                className="w-full"
                name="nomeproduto"
                type="text"
                id="nomeproduto"
              />
            </div>

            <div className="w-2/4">
              <FormLabel name="categoria">Categoria</FormLabel>
              <FormInput
                className="w-full"
                name="categoria"
                type="text"
                id="categoria"
              />
            </div>
          </div>

          <FormLabel name="descricao">Descrição</FormLabel>
          <textarea
            id="descricao"
            name="descricao"
            rows="3"
            cols="40"
            placeholder="Digite aqui a descrição do produto..."
            className="bg-primary bg-opacity-20 p-2 mb-2 rounded-md"
          ></textarea>

          <div className="flex gap-4 justify-between">
            <div className="w-2/5">
              <FormLabel name="disponivel">Disponível</FormLabel>
              <FormInput
                className="w-full"
                name="disponivel"
                type="text"
                id="disponivel"
              />
            </div>

            <div className="w-3/5">
              <FormLabel name="quantidade">Quantidade</FormLabel>
              <div className="w-fit flex border border-menu-gray border-opacity-70 rounded-md">
                <button className="py-2 px-3 border-r border-menu-gray border-opacity-70">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input className="w-10 text-center" />
                <button className="py-2 px-3 border-l border-menu-gray border-opacity-70">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>

          <h1 className="text-menu-gray font-medium mb-1">Disponibilidade</h1>
          <div className="text-menu-gray text-opacity-80 mb-2">
            <p>12/06/2023 - 16/05/2023</p>
            <p>18:30 - 22:00</p>
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-menu-gray font-medium mb-1">Dia:</h1>
              <FormInput
                className="w-fit"
                name="dataInicio"
                type="date"
                id="dataInicio"
              />
            </div>

            <div>
              <h1 className="text-menu-gray font-medium mb-1">Horário:</h1>
              <FormInput name="horarioInicio" type="time" id="horarioInicio" />
            </div>
          </div>

          <hr className="my-4" />

          <h1 className="text-lg text-menu-gray font-medium mb-1">
            Local de encontro
          </h1>

          <FormLabel name="cep">CEP</FormLabel>
          <FormInput placeholder="00000-00" name="cep" type="text" id="cep" />

          <FormLabel name="endereco">Endereço</FormLabel>
          <FormInput name="endereco" type="text" id="endereco" />

          <FormLabel name="pontoReferencia">Ponto de Referência</FormLabel>
          <FormInput
            className="w-full"
            name="pontoReferencia"
            type="text"
            id="pontoReferencia"
          />

          <hr className="my-4" />

          <h1 className="text-lg text-menu-gray font-medium mb-1">Contato</h1>

          <FormLabel name="cellphone">Telefone</FormLabel>
          <FormInput
            placeholder="(99) 9 9999 9999"
            name="cellphone"
            type="text"
            id="cellphone"
          />

          <SubmitButton className="mx-auto my-24">Finalizar</SubmitButton>
        </form>
      </main>
      <Navbar />
    </>
  );
}
