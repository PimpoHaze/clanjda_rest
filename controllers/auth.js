'use strict';

const usuarioModel = require('../models/usuario');
const jwt = require('jsonwebtoken');
const token = require('../services/index').token;
function entrar(req,res){
    let auth = {
        email: req.body.email,
        password: req.body.password
    }
    usuarioModel.findOne({email:auth.email},function(err, authDB){
        if(err) return res.status(500).send({error: String(err)});
        if(authDB.password === auth.password ){
            return res.json({token: token(authDB)});
        }
        return res.status(401).send({error: String('El password es incorrecto.')});
    })
}
function salir(req, res){

}
function registro(req, res){
    let nuevoUsuario = new usuarioModel({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password
    });
    nuevoUsuario.save(function(err, usuarioStored){
        if(err) return res.status(500).send({error: String(err)});
        res.status(290).send({respuesta: 'Usuario registrado.'})
    });
}

module.exports = {
    entrar,
    salir,
    registro
}