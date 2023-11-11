import { FormInput } from "../components/FormInput";
import { FormLabel } from "../components/FormLabel";
import { SubmitButton } from "../components/SubmitButton";
import { useEffect, useState } from "react";
import { ComprovanteInput } from "../components/ComprovanteInput";
import logo from "../assets/logo.jpeg";
import { consultaCep, registerUsuario } from "../api";
import { useLocation, useNavigate } from "react-router-dom";
import { Error } from "../components/Error";

export function CadastroPessoa() {
  const location = useLocation();
  const navigate = useNavigate();

  const [documento, setDocumento] = useState("");
  const [cep, setCEP] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [comprovante, setComprovante] = useState("");
  const [consulta, setConsulta] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      nome: location.state.nome,
      telefone: location.state.telefone,
      documento,
      email: location.state.email,
      senha: location.state.senha,
      cep,
      cidade,
      uf,
      bairro,
      logradouro,
      numero,
      complemento,
      comprovante,
    };

    try {
      await registerUsuario(body);
      return navigate("/cadastro-cliente-info");
    } catch (error) {
      setError(error.response.data.title);
      setErrorPopup(true);
    }
  }

  useEffect(() => {
    if (consulta) {
      clearTimeout(consulta);
    }

    setConsulta(
      setTimeout(async () => {
        try {
          const response = await consultaCep(cep);
          setUf(response.state);
          setCidade(response.city);
          setLogradouro(response.street);
          setBairro(response.neighborhood);
        } catch (error) {
          console.log(error);
        }
      }, 1000)
    );

    return () => {
      if (consulta) {
        clearTimeout(consulta);
      }
    };
  }, [cep]);

  return (
    <main className="flex flex-col items-center bg-primary pb-20">
      {errorPopup && (
        <Error error={error} onClick={() => setErrorPopup(false)} />
      )}

      <img src={logo} alt="Logo Doar Mais" className="mb-7 mt-9 mx-auto w-32" />

      <div className="w-72 h-auto mb-2 px-5 py-3 rounded-xl bg-white">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h1 className="font-bold text-2xl text-primary mb-2 text-center">
            Cadastro
          </h1>

          <FormLabel name="cpf">CPF:</FormLabel>
          <FormInput
            id="cpf"
            name="cpf"
            type="text"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />

          <FormLabel name="cep">CEP:</FormLabel>
          <FormInput
            id="cep"
            name="cep"
            type="text"
            value={cep}
            onChange={(e) => setCEP(e.target.value)}
          />

          <FormLabel name="logradouro">Endereço:</FormLabel>
          <FormInput
            id="logradouro"
            name="logradouro"
            type="text"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
          />

          <div className="flex gap-6">
            <div>
              <FormLabel name="numero">Número:</FormLabel>
              <FormInput
                id="numero"
                className="w-full"
                name="numero"
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>

            <div>
              <FormLabel name="complemento">Complemento:</FormLabel>
              <FormInput
                id="complemento"
                className="w-32"
                name="complemento"
                type="text"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </div>
          </div>

          <FormLabel name="comprovante">Comprovante de residência:</FormLabel>
          <ComprovanteInput
            value={comprovante}
            onChange={(e) => setComprovante(e.target.value)}
          />

          <SubmitButton type="submit">Finalizar</SubmitButton>
        </form>
      </div>
    </main>
  );
}
