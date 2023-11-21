import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error } from "./routes/Error";
import { TelaInicial } from "./pages/TelaInicial";
import { Login } from "./pages/Login";
import { EsqueceuSenha1 } from "./pages/EsqueceuSenha1";
import { EsqueceuSenha2 } from "./pages/EsqueceuSenha2";
import { BemVindo } from "./pages/BemVindo";
import { CadastroPessoa } from "./pages/CadastroPessoa";
import { CadastroONG } from "./pages/CadastroONG";
import { CadastroCliente } from "./pages/CadastroCliente";
import { CadastroClienteInfo } from "./pages/CadastroClienteInfo";
import { AlterarSenha } from "./pages/AlterarSenha";
import { RedefinirSenha } from "./pages/RedefinirSenha";
import { Home } from "./pages/Home";
import { Reportar } from "./pages/Reportar";
import { AlterarDadosCadastrais } from "./pages/AlterarDadosCadastrais";
import { AlterarEndereco } from "./pages/AlterarEndereco";
import { Doacoes } from "./pages/Doacoes";
import { Pedidos } from "./pages/Pedidos";
import { DoacoesRapidas } from "./pages/DoacoesRapidas";
import { MinhasAtividades } from "./pages/MinhasAtividades";
import { Doacao } from "./pages/Doacao";
import { Pedido } from "./pages/Pedido";
import { DoacaoRapida } from "./pages/DoacaoRapida";
import { CriarAnuncio1 } from "./pages/CriarAnuncio1";
import { CriarAnuncio2 } from "./pages/CriarAnuncio2";
import { AdicionarProduto } from "./pages/AdicionarProduto";
import { MarcarCompromisso1Doacao } from "./pages/MarcarCompromisso1Doacao";
import { MarcarCompromisso2Doacao } from "./pages/MarcarCompromisso2Doacao";
import { MarcarCompromisso1DoacaoRapida } from "./pages/MarcarCompromisso1DoacaoRapida";
import { MarcarCompromisso2DoacaoRapida } from "./pages/MarcarCompromisso2DoacaoRapida";
import { MarcarCompromisso1Pedido } from "./pages/MarcarCompromisso1Pedido";
import { MarcarCompromisso2Pedido } from "./pages/MarcarCompromisso2Pedido";
import { Agendado } from "./pages/Agendado";
import { Pendente } from "./pages/Pendente";
import { MeuAnuncio } from "./pages/MeuAnuncio";
import { Historico } from "./pages/Historico";
import { EditarItemAnuncio } from "./pages/EditarItemAnuncio";
import { AceitarUsuarios } from "./pages/AceitarUsuarios";
import { Denuncias } from "./pages/Denuncias";
import { AceitarUsuario } from "./pages/AceitarUsuario";
import { Denuncia } from "./pages/Denuncia";
import { MeuAnuncio2 } from "./pages/MeuAnuncio2";
import { DenunciarAnuncio } from "./pages/DenunciarAnuncio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <TelaInicial />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <BemVindo />,
      },
      {
        path: "/cadastro-cliente",
        element: <CadastroCliente />,
      },
      {
        path: "/cadastro-cliente-info",
        element: <CadastroClienteInfo />,
      },
      {
        path: "/autenticacaoemail",
        element: <CadastroClienteInfo />,
      },
      {
        path: "/cadastro-pessoa",
        element: <CadastroPessoa />,
      },
      {
        path: "/cadastro-ong",
        element: <CadastroONG />,
      },
      {
        path: "/esquecer-senha",
        element: <EsqueceuSenha1 />,
      },
      {
        path: "/esquecer-senha-info",
        element: <EsqueceuSenha2 />,
      },
      {
        path: "senha/",
        element: <EsqueceuSenha2 />,
      },
      {
        path: "/redefinir-senha",
        element: <RedefinirSenha />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/reportar",
        element: <Reportar />,
      },
      {
        path: "/alterar-dados",
        element: <AlterarDadosCadastrais />,
      },
      {
        path: "/alterar-senha",
        element: <AlterarSenha />,
      },
      {
        path: "/alterar-endereco",
        element: <AlterarEndereco />,
      },
      {
        path: "/doacoes",
        element: <Doacoes />,
      },
      {
        path: "/doacao/:id",
        element: <Doacao />,
      },
      {
        path: "/criar-doacao",
        element: <CriarAnuncio1 />,
      },
      {
        path: "/criar-doacao-2",
        element: <CriarAnuncio2 />,
      },
      {
        path: "/adicionar-produto",
        element: <AdicionarProduto />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
      {
        path: "/pedido/:id",
        element: <Pedido />,
      },
      {
        path: "/criar-pedido",
        element: <CriarAnuncio1 />,
      },
      {
        path: "/criar-pedido-2",
        element: <CriarAnuncio2 />,
      },
      {
        path: "/doacoes-rapidas",
        element: <DoacoesRapidas />,
      },
      {
        path: "/doacoao-rapida/:id",
        element: <DoacaoRapida />,
      },
      {
        path: "/criar-doacao-rapida",
        element: <CriarAnuncio1 />,
      },
      {
        path: "/criar-doacao-rapida-2",
        element: <CriarAnuncio2 />,
      },
      {
        path: "/minhas-atividades",
        element: <MinhasAtividades />,
      },
      {
        path: "/marcar-compromisso-doacao",
        element: <MarcarCompromisso1Doacao />,
      },
      {
        path: "/marcar-compromisso-doacao-2",
        element: <MarcarCompromisso2Doacao />,
      },
      {
        path: "/marcar-compromisso-doacaorapida",
        element: <MarcarCompromisso1DoacaoRapida />,
      },
      {
        path: "/marcar-compromisso-doacaorapida-2",
        element: <MarcarCompromisso2DoacaoRapida />,
      },
      {
        path: "/marcar-compromisso-pedido",
        element: <MarcarCompromisso1Pedido />,
      },
      {
        path: "/marcar-compromisso-pedido-2",
        element: <MarcarCompromisso2Pedido />,
      },
      {
        path: "/atividades/agendados/:id",
        element: <Agendado />,
      },
      {
        path: "/atividades/pendentes/:id",
        element: <Pendente />,
      },
      {
        path: "/atividades/anuncio/:id",
        element: <MeuAnuncio />,
      },
      {
        path: "/atividades/anuncio/continuar-edicao",
        element: <MeuAnuncio2 />,
      },
      {
        path: "/atividades/historico/:id",
        element: <Historico />,
      },
      {
        path: "/editar-item-anuncio",
        element: <EditarItemAnuncio />,
      },
      {
        path: "/administrador/aceitar-usuarios",
        element: <AceitarUsuarios />,
      },
      {
        path: "/administrador/aceitar-usuarios/:id",
        element: <AceitarUsuario />,
      },
      {
        path: "/administrador/denuncias",
        element: <Denuncias />,
      },
      {
        path: "/administrador/denuncias/:id",
        element: <Denuncia />,
      },
      {
        path: "/denunciar-doacao/:id",
        element: <DenunciarAnuncio />,
      },
      {
        path: "/denunciar-pedido/:id",
        element: <DenunciarAnuncio />,
      },
      {
        path: "/denunciar-doacao-rapida/:id",
        element: <DenunciarAnuncio />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
