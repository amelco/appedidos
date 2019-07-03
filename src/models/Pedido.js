const mongoose = require('mongoose');

const PedidoSchema = mongoose.Schema({
    cliente: String,
    produto: String,
    entrega: String,
    isEntregue: Boolean,
});

module.exports = mongoose.model('Pedido', PedidoSchema);
