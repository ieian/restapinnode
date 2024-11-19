const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

module.exports = function() {
    router.post('/clientes', clienteController.nuevoCliente);

    router.get('/clientes', clienteController.mostrarClientes);
    return router;
}