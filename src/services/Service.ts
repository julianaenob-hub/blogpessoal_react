import axios from "axios";

const api = axios.create({
  baseURL: " https://blogpessoall-lfng.onrender.com"
})

// Função Cadastrar Usuário
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) =>{
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// Função Autenticar Usuário
export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}