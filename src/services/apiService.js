import axios from "axios";
import clientList from "../pages/clientList"

const API_URL = process.env.REACT_APP_API_URL;
const API_PORT = process.env.REACT_APP_API_PORT;


export async function getFunction() {

    try {
        const response = await fetch(`${API_URL}:${API_PORT}/clients/list/`);
        const data = await response.json();
        return data.result
    } catch (error) {
        console.error('Erro ao obter dados dos clientes:', error);

    }

}



export async function postFunction(clientName, clientEmail, clientAddress, clientCpf) {
    let dataPost = { clientName: clientName, clientEmail: clientEmail, clientAddress: clientAddress, clientCpf: clientCpf }

    const response = await axios.post(`${API_URL}:${API_PORT}/clients/register/`, dataPost)
    return response.data
}



export async function clientDelete(clientId) {
    const response = await axios.delete(`${API_URL}:${API_PORT}/clients/delete/` + clientId);
}



export async function clientPut(clientId, clientName, clientEmail, clientAddress) {
    let dataPost = { clientName: clientName, clientEmail: clientEmail, clientAddress: clientAddress }

    const response = await axios.put(`${API_URL}:${API_PORT}/clients/update/${clientId}`, dataPost)
    return response.data
}


