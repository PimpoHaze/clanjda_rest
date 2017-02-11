'use strict';

const express = require('express');

const indexRouter = express();

// Importar las rutas
const authRout = require('./auth');
const usuarioRout = require('./usuario');
const cuotaRout = require('./cuota');
const blogRout = require('./blog');
// Usar las rutas
indexRouter.get('/', function(req, res){
    res.status(200).send({message: 'Página principal'});
})
indexRouter.use(authRout);
indexRouter.use(usuarioRout);
indexRouter.use(cuotaRout);
indexRouter.use(blogRout);

module.exports = indexRouter;