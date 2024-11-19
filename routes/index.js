const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');


module.exports = function() {
    // Agrega nuevo cliente via post
    router.post('/clientes', clienteController.nuevoCliente);

    // Obten todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    // Muestra un cliente en especifico (ID)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);

    // Actualizar un cliente por su id
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    // Eliminar un cliente por su id
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

    //-----------------------------------------------------------------------//

    // Nuevos productos
    router.post('/productos',productosController.subirArchivo, productosController.nuevoProducto);

    // Obten todos los productos
    router.get('/productos', productosController.mostrarProductos);

    // Muestra un producto en especifico (ID)
    router.get('/productos/:idProductos', productosController.mostrarProducto);

    // Actualizar un producto por su id
    router.put('/productos/:idProductos', productosController.actualizarProducto);

    // Eliminar un producto por su id
    router.delete('/productos/:idProductos', productosController.eliminarProducto);

    return router;
}