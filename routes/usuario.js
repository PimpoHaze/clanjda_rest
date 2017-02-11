'use strict';

const express = require('express');

const usuarioRouter = express();
const usuarioCtrl = require('../controllers/usuario');

usuarioRouter.get('/usuarios', usuarioCtrl.getUsuarios);
usuarioRouter.get('/usuario/:id', usuarioCtrl.getUsuario);
usuarioRouter.delete('/usuario/:id', usuarioCtrl.deleteUsuario);
usuarioRouter.put('/usuario/:id', usuarioCtrl.updateUsuario);
usuarioRouter.post('/usuario', usuarioCtrl.addUsuario);


module.exports = usuarioRouter;