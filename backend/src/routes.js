const express = require('express');

const PostController = require('./controllers/PostController');

const routes = new express.Router();

routes.get('/', PostController.index);
routes.post('/addPedido', PostController.adicionar);
routes.get('/listPedidos', PostController.listar);

module.exports = routes;