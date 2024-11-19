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