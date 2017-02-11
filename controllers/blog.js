'use strict';
const blogModel = require('../models/blog');
function addPost(req, res){
    let newPost = new blogModel({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        texto: req.body.texto,
        id_usuario: req.body.id_usuario
    });
    newPost.save(function(err, postStored){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: String('Post creado con id: '+ postStored._id +'.')})
    });
}
function getPosts(req, res){
    blogModel.find({}, function(err, postStored){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: postStored})
    })
}
function getPost(req, res){
    blogModel.findById(req.params.id, function(err, postStored){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: postStored})
    })
}
function deletePost(req, res){
    blogModel.findByIdAndRemove(req.params.id, function(err, postStored){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: String('Usuario Eliminado')});
    });
}
function updatePost(req, res){
    let updatePost = {
        titulo : req.body.titulo,
        descripcion: req.body.descripcion,
        texto: req.body.texto,
        id_usuario :  req.body.id_usuario
    }
    blogModel.findByIdAndUpdate(req.params.id,updatePost, function(err, postStored){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: String('Post id: '+ postStored._id +' actualizado')});
    });
}
function getPostsByUserName(req, res){
    blogModel.find({id_usuario: req.params.id_usuario},function(err, postStored){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: postStored});
    });
}
function getPostsByTitle(req, res){
    blogModel.findOne({title: req.params.title},function(err, postStored){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: postStored});
    });
}
module.exports = {
    addPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
    getPostsByUserName,
    getPostsByTitle
};