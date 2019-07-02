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
        const entregue = req.query.ent=='T' ? true : false
        const ordem = req.query.ord=='D' ? 'desc' : 'asc'

        const pedidos = await Pedido.find({ isEntregue: entregue }).sort({ cliente: ordem });

        return res.json(pedidos);
    },

    async entregar(req, res) {
        const pedido = await Pedido.findById(req.params.id);
        pedido.isEntregue = true;
        await pedido.save();

        return res.json(pedido);

    },

    async deletar(req, res) {
        const pedido = await Pedido.findById(req.params.id);
        console.log(pedido._id);
        await pedido.remove();
        return res.json(pedido);

    },
}