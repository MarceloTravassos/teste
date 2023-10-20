import axios from "axios";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const getPedidos = async () => {
  try {
    const response = await axios.get("http://localhost:8080/pedido", config);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPedido = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/pedido/${id}`,
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDoacoes = async () => {
  try {
    const response = await axios.get("http://localhost:8080/doacao", config);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDoacao = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/doacao/${id}`,
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDoacao = async (request) => {
  try {
    await axios.post("http://localhost:8080/doacao", request, config);
  } catch (error) {
    console.log(error);
  }
};

export const getDoacoesRapidas = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/doacaorapida",
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDoacaoRapida = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/doacaorapida/${id}`,
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (email, senha) => {
  try {
    await axios
      .post("http://localhost:8080/auth/autenticar", {
        email: email,
        senha: senha,
      })
      .then((response) => localStorage.setItem("token", response.data.token));
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
};

export const editPassword = async (senhaAtual, novaSenha, confirmaSenha) => {
  try {
    await axios.patch(
      "http://localhost:8080/usuario/senha",
      {
        senhaAtual: senhaAtual,
        novaSenha: novaSenha,
        confirmaSenha: confirmaSenha,
      },
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (nome, telefone) => {
  try {
    await axios.patch(
      "http://localhost:8080/usuario",
      {
        nome: nome,
        telefone: telefone,
      },
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const getAgendados = async () => {
  try {
    await axios.get("http://localhost:8080/atividades/agendados", config);
  } catch (error) {
    console.log(error);
  }
};

export const getPendentes = async () => {
  try {
    await axios.patch("http://localhost:8080/atividades/pendentes", config);
  } catch (error) {
    console.log(error);
  }
};

export const getMeusAnuncios = async () => {
  try {
    await axios.patch("http://localhost:8080/atividades/anuncios", config);
  } catch (error) {
    console.log(error);
  }
};

export const getHistorico = async () => {
  try {
    await axios.patch("http://localhost:8080/atividades/historico", config);
  } catch (error) {
    console.log(error);
  }
};
