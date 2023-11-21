import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderAdmin } from "../components/HeaderAdmin";
import { useEffect, useState } from "react";
import {
  aceitarConta,
  downloadDocumento,
  getConta,
  recusarConta,
} from "../api";
import { FormLabel } from "../components/FormLabel";
import { FormInput } from "../components/FormInput";
import { LoadingPrimary } from "../components/LoadingPrimary";
import { Error } from "../components/Error";
import { Message } from "../components/Message";

export function AceitarUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [conta, setConta] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  async function fetchConta() {
    try {
      const result = await getConta(id);
      setConta(result);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function download() {
    try {
      const blob = await downloadDocumento(id);
      const url = URL.createObjectURL(blob);

      window.open(url, "_blank");
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function aceitar() {
    try {
      await aceitarConta(id);
      setMessage("A conta foi aceita!");
      setPopup(true);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  async function recusar() {
    try {
      await recusarConta(id);
      setMessage("A conta foi recusada!");
      setPopup(true);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  useEffect(() => {
    fetchConta();
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

        {conta ? (
          <div className="lg:w-1/2 md:w-1/2 w-3/4">
            <h1 className="text-primary text-center font-bold text-xl mb-2">
              Cadastro de usuário
            </h1>

            <FormLabel className="block" name="nome">
              Nome:
            </FormLabel>
            <FormInput
              className="w-full"
              disabled
              name="nome"
              type="text"
              value={conta.nome}
            />

            <FormLabel className="block" name="telefone">
              Telefone:
            </FormLabel>
            <FormInput
              className="w-full"
              disabled
              name="telefone"
              type="text"
              value={conta.telefone}
            />

            <FormLabel className="block" name="documento">
              CPF/CNPJ:
            </FormLabel>
            <FormInput
              className="w-full"
              disabled
              name="documento"
              type="text"
              value={conta.documento}
            />

            <FormLabel className="block" name="cep">
              CEP:
            </FormLabel>
            <FormInput
              className="w-full"
              disabled
              name="cep"
              type="text"
              value={conta.cep}
            />

            <FormLabel className="block" name="endereco">
              Endereço:
            </FormLabel>
            <FormInput
              className="w-full"
              disabled
              name="endereco"
              type="text"
              value={`${conta.logradouro}, ${conta.numero}, ${conta.complemento}`}
            />

            <div
              onClick={download}
              className="px-4 py-2 rounded flex gap-x-6 text-lg mx-auto items-center hover:cursor-pointer hover:bg-light-gray
              transition mt-4 w-fit"
            >
              <h1>Documentação</h1>
              <FontAwesomeIcon className="text-menu-gray" icon={faDownload} />
            </div>

            <div className="flex flex-wrap gap-y-4 justify-center gap-x-12 text-white mt-8">
              <button
                onClick={aceitar}
                className="px-10 rounded-lg font-bold py-2 bg-primary hover:bg-primary-hover transition"
              >
                Válido
              </button>
              <button
                onClick={recusar}
                className="px-10 rounded-lg font-bold py-2 bg-primary hover:bg-primary-hover transition"
              >
                Inválido
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
