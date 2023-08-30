import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { SubmitButton } from "../components/SubmitButton";

export function EditarDoacao() {
  return (
    <>
      <Header title="Doações" />
      <main>
        <form action="" className="flex flex-col mx-9 my-3">
          <h1 className="text-xl font-semibold text-menu-gray mb-6">
            Doação de arroz da marca Camil
          </h1>

          <div className="flex gap-4">
            <div className="w-2/4">
              <FormLabel name="nomeproduto">Nome do Produto</FormLabel>
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
              <div className="flex items-center gap-x-2">
                <div className="flex bg-primary py-5 items-center rounded-md h-8 mb-2 bg-opacity-20">
                  <button className="px-4">
                    <FontAwesomeIcon
                      className="text-menu-gray"
                      icon={faMinus}
                    />
                  </button>
                  <div className="h-8 w-[2px] bg-menu-gray bg-opacity-20"></div>
                  <button className="px-4">
                    <FontAwesomeIcon className="text-menu-gray" icon={faPlus} />
                  </button>
                </div>

                {/* <FormInput
                className="w-32 px-5 border border-menu-gray"
                type="number"
                id="quantidade"
                name="quantidade"
              /> */}

                <input
                  className="px-1 w-10 h-9 border mb-2 border-menu-gray rounded-md"
                  type="number"
                  name="quantidade"
                  id="quantidade"
                ></input>
              </div>

              {/* <FormInput
              className="w-full"
              name="quantidade"
              type="text"
              id="quantidade"
            /> */}
            </div>
          </div>

          <h1 className="text-menu-gray font-medium mb-1">Disponibilidade</h1>
          <p className="text-xs text-menu-gray text-opacity-80 mb-2">
            Adicione o período em dias e horas que você terá disponibilidade
            para entregar os produtos do seu anúncio
          </p>

          <h1 className="text-menu-gray font-medium mb-1">Dias Disponíveis</h1>
          <FormInput
            placeholder="00/00/0000"
            name="dataInicio"
            type="text"
            id="dataInicio"
          />
          <FormInput
            placeholder="00/00/0000"
            name="dataFim"
            type="text"
            id="dataFim"
          />

          <h1 className="text-menu-gray font-medium my-1">
            Horários disponíveis
          </h1>
          <div className="flex justify-between">
            <FormInput
              className="w-28 text-center"
              placeholder="00:00"
              name="horarioInicio"
              type="text"
              id="horarioInicio"
            />
            <FormInput
              className="w-28 text-center"
              placeholder="00:00"
              name="horarioFim"
              type="text"
              id="horarioFim"
            />
          </div>

          <hr className="my-4" />

          <h1 className="text-menu-gray font-medium mb-1">Local de entrega</h1>
          <p className="text-xs text-menu-gray text-opacity-80 mb-2">
            Adicione aqui o local que você gostaria de se encontrar com os
            interessados para a transação dos itens do anúncio
          </p>

          <FormLabel name="cep">CEP</FormLabel>
          <FormInput placeholder="00000-00" name="cep" type="text" id="cep" />

          <FormLabel name="endereco">Endereço</FormLabel>
          <FormInput name="endereco" type="text" id="endereco" />

          <div className="flex gap-4">
            <div className="w-2/4">
              <FormLabel name="numero">Número</FormLabel>
              <FormInput
                className="w-full"
                name="numero"
                type="text"
                id="numero"
              />
            </div>

            <div className="w-2/4">
              <FormLabel name="complemento">Complemento</FormLabel>
              <FormInput
                className="w-full"
                name="complemento"
                type="text"
                id="complemento"
              />
            </div>
          </div>

          <FormLabel name="pontoReferencia">Ponto de Referência</FormLabel>
          <FormInput
            className="w-full"
            name="pontoReferencia"
            type="text"
            id="pontoReferencia"
          />
          <SubmitButton className="mx-auto my-24">Finalizar</SubmitButton>
        </form>
      </main>
      <Navbar />
    </>
  );
}
