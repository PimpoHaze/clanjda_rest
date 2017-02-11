'use strict';

const usuarioModel = require('../models/usuario');

function getUsuarios(req, res){
    usuarioModel.find({}, function(err, usuarioDB){
        if(err) return res.status(500).send({error: String(err)});
         res.status(200).send({respuesta: usuarioDB});
    })
}
function getUsuario(req, res){

    usuarioModel.findById(req.params.id, function(err, usuarioDB){
        if(err) return res.status(500).send({error: String(err)});
         res.status(200).send({respuesta: usuarioDB});
    })

}
function addUsuario(req, res){
 
    let usuario = new usuarioModel();

    usuario.nombre =  req.body.nombre;
    usuario.email =  req.body.email;
    usuario.password =  req.body.password;
        
    usuario.save(function(err, usuarioDB){
        if(err) return  res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: usuarioDB});
    });
    
}
function deleteUsuario(req, res){
    usuarioModel.findByIdAndRemove(req.params.id, function(err, usuarioDb){
        if(err) return res.status(500).send({error: String(err)});
         res.status(200).send({respuesta: 'El usuario con id: ' + req.params.id + ' eliminado.'});
    })
}
function updateUsuario(req, res){
    let usuario = {
        nombre: req.body.nombre,
        email : req.body.email
    }
    usuarioModel.findByIdAndUpdate(req.params.id,usuario, function(err, usuarioDB){
        if(err) return res.status(500).send({error: String(err)});
         res.status(200).send({respuesta: 'El usuario con id: ' + usuarioDB._id + ' actualizado.'});
    })

    
}
module.exports = {
    getUsuario,
    getUsuarios,
    addUsuario,
    deleteUsuario,
    updateUsuario
}