const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');



module.exports = function() {
    //----------------------------CLIENTES------------------------------------//

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

    //----------------------------PRODUCTOS-----------------------------------//

    // Nuevos productos
    router.post('/productos',productosController.subirArchivo, productosController.nuevoProducto);

    // Obten todos los productos
    router.get('/productos', productosController.mostrarProductos);

    // Muestra un producto en especifico (ID)
    router.get('/productos/:idProducto', productosController.mostrarProducto);

    // Actualizar un producto por su id
    router.put('/productos/:idProducto',productosController.subirArchivo, productosController.actualizarProducto);

    // Eliminar un producto por su id
    router.delete('/productos/:idProducto', productosController.eliminarProducto);


    //----------------------------PEDIDOS-------------------------------------//

    router.post('/pedidos', pedidosController.nuevoPedido);

    router.get('/pedidos', pedidosController.mostrarPedidos);

    // Muestra un producto en especifico (ID)
    router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);

    // Actualizar un producto por su id
    router.put('/pedidos/:idPedido', pedidosController.actualizarPedido);

    // Eliminar un producto por su id
    router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido);

    return router;
}