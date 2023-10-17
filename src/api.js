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

export const getDoacoes = async () => {
  try {
    const response = await axios.get("http://localhost:8080/doacao", config);
    return await response.data;
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
