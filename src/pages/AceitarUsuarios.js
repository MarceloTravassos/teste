import { Link } from "react-router-dom";
import { HeaderAdmin } from "../components/HeaderAdmin";
import { useEffect, useState } from "react";
import { getContas } from "../api";
import { Error } from "../components/Error";

export function AceitarUsuarios() {
  const [contas, setContas] = useState([]);
  const [error, setError] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);

  async function fetchContas() {
    try {
      const result = await getContas();
      setContas(result);
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  useEffect(() => {
    fetchContas();
  }, []);

  return (
    <>
      <HeaderAdmin />

      <main className="flex flex-col lg:gap-y-10 md:gap-y-5 gap-y-4 pb-20">
        {errorPopup && (
          <Error error={error} onClick={() => setErrorPopup(false)} />
        )}

        {contas.map((conta, index) => (
          <Link
            key={index}
            to={`/administrador/aceitar-usuarios/${conta.id}`}
            className="bg-div-gray hover:bg-light-gray transition rounded-2xl text-center
            shadow-[inset_1px_2px_4px_0_rgba(88,101,242,0.30),3px_3px_4px_2px_rgba(0,0,0,0.25)] py-12 px-8 mx-auto
            w-3/4 lg:w-1/2 md:w-1/2"
          >
            <h2 className="font-bold lg:text-2xl md:text-xl text-sm text-menu-gray">
              {conta.nome}
            </h2>
          </Link>
        ))}
      </main>
    </>
  );
}
