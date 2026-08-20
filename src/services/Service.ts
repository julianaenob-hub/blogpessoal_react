import axios from "axios";
 
// Conectar com o backend (baseURL = endereço Swagger)
const api = axios.create({
    baseURL: 'https://blogpessoall-lfng.onrender.com'
})
 
// Criar funções para enviar requisições ao backend
// 1. Função Cadastrar usuário:
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
// A função setDados vai atualizar o meu estado com os dados recebidos da api (ou seja, o ID - que vem da api e não é o usuário que escreve)
// .data é o corpo da resposta
 
// 2. Função Autenticar usuário:
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
 
// COM TOKENS
// Função Consultar com token
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
}
 
// Função Cadastrar com token
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}
 
 
// Função Atualizar com token
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}
 
 
// Função deletar com token
export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
}
 
 