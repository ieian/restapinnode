const router = require('express');
const Clientes = require('../models/Clientes');

exports.nuevoCliente = async (req, res) => {
    const cliente = new Clientes(req.body);

    try{
        await cliente.save();
        res.json({ mensaje : 'Se agrego un nuevo cliente'});
    } catch (error) {
        res.send(error);
        next();
    }
}

exports.mostrarClientes = async (req, res, next) => {
    try {
        const cliente = await Clientes.find({});
        res.json(cliente);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.mostrarCliente = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);

    if(!cliente){
        res.json({mensaje : 'Ese cliente no existe'});
        return next();
    }

    res.json(cliente);
}

exports.actualizarCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findByIdAndUpdate({ _id : req.params.idCliente }, req.body, {
            new : true
        });
        res.json(cliente);
    } catch (error) {
        res.send(error);
        next();
    }
}

exports.eliminarCliente = async (req, res, next) => {
    try {
        await Clientes.findOneAndDelete({ _id : req.params.idCliente });
        res.json({mensaje : 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}