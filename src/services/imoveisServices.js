import axios from 'axios'

const baseURL = "http://localhost:3000"

export async function getAllImoveis() {
    try {
        const response = await axios.get(`${baseURL}/imovel`);
        return response;
    } catch (error) {
        console.error("Erro ao obter imóveis:", error);
        throw error; // Lançar o erro novamente para tratamento no componente
    }
}
