const router = require('express');
const Usuarios = require('../models/Usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registrarUsuario = async (req, res) => {
    const usuario = new Usuarios(req.body);
    usuario.password = await bcrypt.hash(req.body.password, 10);

    try {
        await usuario.save();
        res.json({mensaje: 'Usuario creado correctamente'});
    } catch (error) {
        console.log(error);
        res.json({mensaje: 'hubo un error'});
    }
}

exports.autentificarUsuario = async (req, res, next) => {
    const { email, password } = req.body;
    const usuario = await Usuarios.findOne({ email });

    if(!usuario){
        await res.status(401).json({mensaje : 'Ese usuario no existe'});
        next();
    } else {
        if(!bcrypt.compareSync( password, usuario.password )) {
            await res.status(401).json({mensaje : 'Password Incorrecto'});
            next();
        } else {
            const token = jwt.sign({
                email: usuario.email,
                nombre: usuario.nombre,
                id: usuario._id
            }, 'LLAVESECRETA',
            {
                expiresIn: '1h'
            });

            res.json({ token });
        }
    }
}