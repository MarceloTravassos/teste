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

export const postPedido = async (body) => {
  try {
    await axios.post("http://localhost:8080/pedido", body, config);
  } catch (error) {
    console.log(error);
  }
};

export const propostaPedido = async (body) => {
  try {
    console.log(body);
    // await axios.post("http://localhost:8080/pedido/proposta", body, config);
    console.log("criou");
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

export const postDoacao = async (body) => {
  try {
    await axios.post("http://localhost:8080/doacao", body, config);
  } catch (error) {
    console.log(error);
  }
};

export const propostaDoacao = async (body) => {
  try {
    console.log(body);
    // await axios.post("http://localhost:8080/doacao/proposta", body, config);
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

export const postDoacaoRapida = async (body) => {
  try {
    await axios.post("http://localhost:8080/doacaorapida", body, config);
  } catch (error) {
    console.log(error);
  }
};

export const propostaDoacaoRapida = async (body) => {
  try {
    console.log(body);
    // await axios.post("http://localhost:8080/doacaorapida/proposta", body, config);
    console.log("criou");
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
    throw error;
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
    const response = await axios.get(
      "http://localhost:8080/atividades/agendados",
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAgendado = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/atividades/agendados/${id}`,
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const cancelarEncontro = async (id) => {
  try {
    await axios.patch(
      `http://localhost:8080/atividades/agendados/${id}/cancelar`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const ocorreuEncontro = async (id) => {
  try {
    await axios.patch(
      `http://localhost:8080/atividades/agendados/${id}/ocorrenciaencontro`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const naoOcorreuEncontro = async (id) => {
  try {
    await axios.patch(
      `http://localhost:8080/atividades/agendados/${id}/naoocorrenciaencontro`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const getPendentes = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/atividades/pendentes",
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPendente = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/atividades/pendentes/${id}`,
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const confirmarPendente = async (id) => {
  try {
    await axios.patch(
      `http://localhost:8080/atividades/pendentes/${id}/confirmar`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const recusarPendente = async (id) => {
  try {
    await axios.patch(
      `http://localhost:8080/atividades/pendentes/${id}/recusar`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const getMeusAnuncios = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/atividades/anuncios",
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMeuAnuncio = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/atividades/anuncios/${id}`,
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnuncio = async (id) => {
  try {
    await axios.patch(
      `http://localhost:8080/atividades/anuncios/${id}/cancelar`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnuncioItem = async (idItem) => {
  try {
    await axios.delete(
      `http://localhost:8080/atividades/anuncios/${idItem}`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const getHistoricos = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/atividades/historico",
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHistorico = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/atividades/historico/${id}`,
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const consultaCep = async (cep) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/brasilapi/infocep/${cep}`
    );
    return await response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUsuario = async (body) => {
  try {
    console.log(body);

    // await axios.post(
    //   "http://localhost:8080/auth/registrarusuario",
    //   config,
    //   body
    // );
  } catch (error) {
    console.log(error);
  }
};

export const registerONG = async (body) => {
  try {
    console.log(body);

    // await axios.post(
    //   "http://localhost:8080/auth/registrarusuario",
    //   config,
    //   body
    // );
  } catch (error) {
    console.log(error);
  }
};

export const getContas = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/gerenciarcontas",
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getConta = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/gerenciarcontas/${id}`,
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const downloadDocumento = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/gerenciarcontas/${id}/download`,
      config
    );
    return await response.data;
  } catch (error) {
    throw error;
  }
};

export const recusarConta = async (id) => {
  try {
    await axios.patch(
      `http://localhost:8080/gerenciarcontas/${id}/recusarconta`,
      config
    );
  } catch (error) {
    throw error;
  }
};

export const aceitarConta = async (id) => {
  try {
    await axios.patch(
      `http://localhost:8080/gerenciarcontas/${id}/aceitarconta`,
      config
    );
  } catch (error) {
    throw error;
  }
};

export const getDenuncias = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/gerenciardenuncias",
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDenuncia = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/gerenciardenuncias/anuncios/${id}`,
      config
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};
