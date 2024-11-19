const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

module.exports = function() {
    router.post('/cliente', clienteController.nuevoCliente);

    return router;
}