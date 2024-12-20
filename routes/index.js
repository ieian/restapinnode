const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');
const usuariosController = require('../controllers/usuariosController');

const auth = require('../middleware/auth');

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
    router.post('/productos', productosController.subirArchivo, productosController.nuevoProducto);

    // Obten todos los productos
    router.get('/productos', productosController.mostrarProductos);

    // Muestra un producto en especifico (ID)
    router.get('/productos/:idProducto', productosController.mostrarProducto);

    // Actualizar un producto por su id
    router.put('/productos/:idProducto', productosController.subirArchivo, productosController.actualizarProducto);

    // Eliminar un producto por su id
    router.delete('/productos/:idProducto', productosController.eliminarProducto);

    // Busqueda de productos
    router.post('/productos/busqueda/:query', productosController.buscarProducto);

    //----------------------------PEDIDOS-------------------------------------//

    // Agrega nuevos pedidos
    router.post('/pedidos/nuevo/:idUsuario', pedidosController.nuevoPedido);

    // Mostrar todos los pedidos
    router.get('/pedidos', pedidosController.mostrarPedidos);

    // Muestra un pedido en especifico (ID)
    router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);

    // Actualizar un pedido por su id
    router.put('/pedidos/:idPedido', pedidosController.actualizarPedido);

    // Eliminar un pedido por su id
    router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido);

    //----------------------------USUARIOS------------------------------------//

    // Crear usuarios
    router.post('/crear-cuenta', usuariosController.registrarUsuario);

    router.post('/iniciar-sesion', usuariosController.autentificarUsuario);

    return router;
}