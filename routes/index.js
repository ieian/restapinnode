const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

module.exports = function() {
    // Agrega nuevo cliente via post
    router.post('/clientes', clienteController.nuevoCliente);

    // Obten todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    // Muestra un cliente en especifico (ID)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);

    // Actualizar cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    return router;
}