'use strict';

const express = require('express');

const authRouter = express();
const authCtrl = require('../controllers/auth');

authRouter.post('/login', authCtrl.entrar);
authRouter.post('/registro', authCtrl.registro);
module.exports = authRouter;