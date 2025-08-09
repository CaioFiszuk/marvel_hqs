import axios from 'axios';

// ATENÇÃO:
// Em produção, NUNCA exponha a chave privada da Marvel no frontend.
// O correto seria criar um backend para gerar o hash MD5 com a chave privada.
// Aqui, por ser um desafio e sem backend, usamos um hash pré-gerado para simular.

const publicKey = '78ee73ecae3b922c416c7b10bfd62744';
const hash = '4197a2bea5c03c1bd1e14cfb5037b74e';
const ts = 1;
const urlBase = `https://gateway.marvel.com/v1/public/comics`;

export const getHqs = async (page = 1, limit = 20) => {
  const offset = (page - 1) * limit;
  const url = `${urlBase}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar HQs:', error);
    throw error;
  }
}

export const getHqById = async (id) => {
  const response = await axios.get(`${urlBase}/${id}`, {
    params: { apikey: publicKey }
  });
  return response.data.data.results[0];
};