import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  enviarDenunciaDoacao,
  enviarDenunciaDoacaoRapida,
  enviarDenunciaPedido,
} from "../api";
import { Error } from "../components/Error";

export function DenunciarAnuncio() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [showPopupCancelled, setPopupCancelled] = useState(false);
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [outroMotivo, setOutroMotivo] = useState("");

  const motivos = [
    { id: 1, descricao: "Apresenta itens ofensivos" },
    { id: 2, descricao: "Contém produtos ilícitos" },
    { id: 3, descricao: "Usuário rude ou imoral" },
    { id: 4, descricao: outroMotivo },
  ];

  async function denunciar(descricao) {
    const body = {
      tipoDenunciaModel: {
        id: 4,
      },
      anuncioModel: {
        id: parseInt(id),
      },
      descricao: descricao,
    };

    try {
      switch (location.state.tipoAnuncio) {
        case 1:
          await enviarDenunciaDoacao(body);
          setPopupCancelled(true);
          break;

        case 2:
          await enviarDenunciaPedido(body);
          setPopupCancelled(true);
          break;

        case 3:
          await enviarDenunciaDoacaoRapida(body);
          setPopupCancelled(true);
          break;

        default:
          console.log("Nenhum tipo de anúncio especificado!");
          break;
      }
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  const handleClick = async (motivoId, motivoDescricao) => {
    if (motivoId === 4) {
      setPopupCancelled(true);
      return;
    }

    await denunciar(motivoDescricao);
  };

  const handleClickOutroMotivo = async () => {
    setShowPopup(false);
    await denunciar(outroMotivo);
  };

  const redirectToHome = () => {
    setPopupCancelled(false);
    return navigate("/home");
  };

  return (
    <>
      <Header title="Denunciar anúncio" />
      <main className="flex flex-col gap-y-5 mt-4 pb-40">
        {errorPopup && (
          <Error error={error} onClick={() => setErrorPopup(false)} />
        )}

        {showPopup && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div
              className="flex flex-col text-menu-gray leading-tight font-medium w-4/5 bg-white border-[2.5px] border-light-gray
              px-6 py-5 rounded-lg shadow-md justify-center"
            >
              <h1 className="text-lg mb-4">Comente mais sobre:</h1>
              <textarea
                name="outroMotivo"
                onChange={(e) => setOutroMotivo(e.target.value)}
                value={outroMotivo}
                placeholder="Digite aqui..."
                rows="5"
                className="bg-light-gray bg-opacity-50 text-sm px-4 py-2 rounded-xl
                border-2 border-light-gray"
              ></textarea>
              <button
                className="mt-4 mx-auto w-fit md:w-64 px-14 py-3 font-bold text-sm bg-primary text-white rounded-md"
                onClick={handleClickOutroMotivo}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {showPopupCancelled && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            <div
              className="flex flex-col text-menu-gray leading-tight font-medium w-4/5 bg-white border-[2.5px] border-light-gray
            px-6 py-5 rounded-lg shadow-md justify-center"
            >
              <h1 className="text-lg mb-4">
                Agradecemos pela notificação, sua mensagem foi salva e enviada
                para um de nossos analistas e logo o problema será tratado.
              </h1>
              <button
                className="mt-4 mx-auto w-fit md:w-64 px-16 py-3 font-bold text-sm bg-primary text-white rounded-md"
                onClick={redirectToHome}
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col text-menu-gray mx-5 text-lg">
          <h1 className="font-semibold mb-5">Por qual motivo?</h1>
          <div>
            <ul className="font-medium px-2">
              {motivos.map((motivo) => (
                <li
                  key={motivo.id}
                  className="border-b-2 py-5"
                  onClick={() => handleClick(motivo.id, motivo.descricao)}
                >
                  {motivo.id !== 4 ? motivo.descricao : "Outro motivo..."}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Navbar />
    </>
  );
}
