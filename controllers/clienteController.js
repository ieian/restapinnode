const router = require('express');
const Clientes = require('../models/Clientes');

exports.nuevoCliente = async (req, res) => {
    const cliente = new Clientes(req.body);

    try{
        await cliente.save();
        res.json({ mensaje : 'Se agrego un nuevo cliente'});
    } catch (error) {
        console.log(error);
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
        res.json({mensaje: 'Ese cliente no existe'});
        next();
    }

    res.json(cliente);
}