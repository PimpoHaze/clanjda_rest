'use strict';

const express = require('express');

const cuotaRouter = express();
const cuotaCtrl = require('../controllers/cuota');

cuotaRouter.post('/cuota', cuotaCtrl.addCuota);
cuotaRouter.put('/cuota/:id', cuotaCtrl.updateCuota);
cuotaRouter.delete('/cuota/:id', cuotaCtrl.deleteCuota);
cuotaRouter.get('/cuota/:id', cuotaCtrl.getCuota);
cuotaRouter.get('/cuotas', cuotaCtrl.getCuotas);
module.exports = cuotaRouter;