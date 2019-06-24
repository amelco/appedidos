const Pedido = require('../models/Pedido');

module.exports = {
    async index(req, res) {
        res.end();
    },

    async adicionar(req, res) {
        const {
            cliente,
            produto,
            entrega,
        } = req.body;
        const isEntregue = false;

        const registro = await Pedido.create({
            cliente,
            produto,
            entrega,
            isEntregue,
        });
        
        return res.json(registro);
    },

    async listar(req, res) {
        const pedidos = await Pedido.find();

        return res.json(pedidos);
    },
}