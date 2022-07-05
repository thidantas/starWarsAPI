import api from '../api';

export async function pegarFilmes() {
  try {
    const resultado = await api.get('/films');
    return resultado.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
