import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { LoadingPrimary } from "../components/LoadingPrimary";
import { updateMeuAnuncio } from "../api";
import { Error } from "../components/Error";

export function EditarItemAnuncio() {
  const location = useLocation();
  const navigate = useNavigate();

  const options = [
    { id: 1, descricao: "Alimento" },
    { id: 2, descricao: "Eletrônico" },
    { id: 3, descricao: "Eletrodoméstico" },
    { id: 4, descricao: "Roupa" },
    { id: 5, descricao: "Móvel" },
    { id: 6, descricao: "Entretenimento" },
    { id: 7, descricao: "Pet" },
    { id: 8, descricao: "Outro" },
  ];

  const [nome, setNome] = useState(location.state.item.nome);
  const [categoriaItemModel, setCategoriaItemModel] = useState({
    id: location.state.item.categoriaItemModel.id,
    descricao: location.state.item.categoriaItemModel.descricao,
  });
  const [quantidade, setQuantidade] = useState(location.state.item.quantidade);
  const [descricao, setDescricao] = useState(location.state.item.descricao);
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  function formatDateISO(data) {
    console.log("Data antes da formatação:", data);

    if (!data) {
      return null;
    }

    const [datePart, timePart] = data.split(" ");
    const [day, month, year] = datePart.split("/");
    const [hour, minute, second] = timePart.split(":");

    const formattedDate = new Date(year, month - 1, day, hour, minute, second);
    console.log("Data após a criação do objeto Date:", formattedDate);

    const tzoffset = formattedDate.getTimezoneOffset() * 60000;
    const localISOTime = new Date(formattedDate - tzoffset).toISOString();
    console.log("Data formatada:", localISOTime);

    return localISOTime;
  }

  function formatarNumero(cep) {
    return cep.replace(/\D/g, "");
  }

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

  const continuarEdicao = async (e) => {
    e.preventDefault();

    const updatedItem = {
      id: location.state.item.id,
      nome: nome,
      categoriaItemModel: categoriaItemModel,
      quantidade: parseInt(quantidade),
      descricao: descricao,
    };

    const updatedItemList = location.state.meuAnuncio.itemList.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );

    const updatedAnuncio = {
      ...location.state.meuAnuncio,
      cep: formatarNumero(location.state.meuAnuncio.cep),
      telefone: formatarNumero(location.state.meuAnuncio.telefone),
      dataInicioDisponibilidade: formatDateISO(
        location.state.meuAnuncio.dataInicioDisponibilidade
      ),
      dataFimDisponibilidade: formatDateISO(
        location.state.meuAnuncio.dataFimDisponibilidade
      ),
      listaItens: updatedItemList,
    };

    if ("itemList" in updatedAnuncio) delete updatedAnuncio.itemList;

    try {
      await updateMeuAnuncio(updatedAnuncio, location.state.meuAnuncio.id);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }

    return navigate(-1);
  };

  useEffect(() => {}, [categoriaItemModel]);

  return (
    <>
      <main>
        <Header title="Meus anúncios" />

        {errorPopup && (
          <Error error={error} onClick={() => setErrorPopup(false)} />
        )}
        {location.state.item ? (
          <form className="flex flex-col mx-9 my-3 pb-20">
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
                  onChange={(e) => setQuantidade(e.target.value)}
                  value={quantidade}
                  className="w-full"
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
              className="bg-primary bg-opacity-20 p-2 mb-2 rounded-md"
            ></textarea>

            <button
              onClick={continuarEdicao}
              className="rounded-md mx-auto mt-3 xl:mt-56 bg-primary text-white text-xl font-bold px-14 py-2 w-fit"
            >
              Finalizar
            </button>
          </form>
        ) : (
          <div className="text-center mt-4">
            <LoadingPrimary />
          </div>
        )}

        <Navbar />
      </main>
    </>
  );
}
