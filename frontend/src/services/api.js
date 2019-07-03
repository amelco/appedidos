import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', 
});

const delPedido = function (id) { 
    axios.delete( `http://localhost:3333/${id}/deletar`);
};

export default api;
