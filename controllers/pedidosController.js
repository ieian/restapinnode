const router = require('express');
const Pedidos = require('../models/Pedidos');

exports.nuevoPedido = async (req, res) => {
    const pedido = new Pedidos(req.body);

    try{
        await pedido.save();
        res.json({ mensaje : 'Se agrego un nuevo pedido'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.mostrarPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.mostrarPedido = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);

    if(!cliente){
        res.json({mensaje : 'Ese cliente no existe'});
        return next();
    }

    res.json(cliente);
}

exports.actualizarPedido = async (req, res, next) => {
    try {
        const cliente = await Clientes.findByIdAndUpdate({ _id : req.params.idCliente }, req.body, {
            new : true
        });
        res.json(cliente);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarPedido = async (req, res, next) => {
    try {
        await Clientes.findOneAndDelete({ _id : req.params.idCliente });
        res.json({mensaje : 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}