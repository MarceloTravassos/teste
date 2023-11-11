import { Link, useNavigate, useParams } from "react-router-dom";
import { HeaderAdmin } from "../components/HeaderAdmin";
import { useEffect, useState } from "react";
import { getDenuncia, suspenderAnuncio, validarAnuncio } from "../api";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { LoadingPrimary } from "../components/LoadingPrimary";
import { Error } from "../components/Error";
import { Message } from "../components/Message";

const tipoDenuncia = {
  1: "Melhoria",
  2: "Bug",
  3: "Denúncia de usuário",
  4: "Denúncia de anúncio",
};

export function Denuncia() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [denuncia, setDenuncia] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  async function fetchDenuncia() {
    try {
      const result = await getDenuncia(id);
      setDenuncia(result);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function validar() {
    try {
      await validarAnuncio(id);
      setMessage("A denúncia foi validada e o anúncio não foi excluído!");
      setPopup(true);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function excluirAnuncio() {
    try {
      await suspenderAnuncio(id);
      setMessage("O anúncio foi excluído!");
      setPopup(true);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  useEffect(() => {
    fetchDenuncia();
  }, []);

  return (
    <>
      <HeaderAdmin />

      <main className="flex flex-col lg:gap-y-10 md:gap-y-5 gap-y-4 pb-20 items-center">
        {popup && (
          <Message
            message={message}
            onClick={() => navigate("/administrador/aceitar-usuarios")}
          />
        )}

        {errorPopup && (
          <Error error={error} onClick={() => setErrorPopup(false)} />
        )}

        {denuncia ? (
          <div className="lg:w-1/2 md:w-1/2 w-3/4">
            <h1 className="text-primary text-center font-bold text-xl mb-2">
              Dados da denúncia
            </h1>

            <FormLabel className="block" name="titulo">
              Título:
            </FormLabel>
            <FormInput
              value={denuncia.titulo}
              className="w-full"
              disabled
              name="titulo"
              type="text"
            />

            <FormLabel className="block" name="tipoDenuncia">
              Tipo de denúncia:
            </FormLabel>
            <FormInput
              value={`${tipoDenuncia[denuncia.idtipoDenuncia]}`}
              className="w-full"
              disabled
              name="tipoDenuncia"
              type="text"
            />

            <FormLabel className="block" name="dataDenuncia">
              Data da denúncia:
            </FormLabel>
            <FormInput
              value={denuncia.dataCriacao}
              className="w-full"
              disabled
              name="dataDenuncia"
              type="text"
            />

            <FormLabel className="block" name="denunciado">
              Quem denunciou:
            </FormLabel>
            <FormInput
              value={denuncia.nome}
              className="w-full"
              disabled
              name="denunciado"
              type="text"
            />

            <FormLabel className="block" name="relato">
              Relato:
            </FormLabel>
            <textarea
              name="relato"
              value={denuncia.descricaoDenuncia}
              disabled
              rows="3"
              cols="40"
              className="bg-primary bg-opacity-20 p-2 mb-2 rounded-md w-full"
            ></textarea>

            <div className="flex flex-wrap gap-y-4 justify-center gap-x-12 text-white mt-8">
              <button
                onClick={validar}
                className="px-10 rounded-lg font-bold py-2 bg-primary hover:bg-primary-hover transition"
              >
                Válido
              </button>
              <button
                onClick={excluirAnuncio}
                className="px-10 rounded-lg font-bold py-2 bg-primary hover:bg-primary-hover transition"
              >
                Excluir anúncio
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-4">
            <LoadingPrimary />
          </div>
        )}
      </main>
    </>
  );
}
