'use strict';

const cuotaModel =require('../models/cuota');

function addCuota(req, res){
    let newCuota = new cuotaModel();
    newCuota.miembro = req.body.miembro;
    newCuota.save(function(err, cuotaDB){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: 'Cuota miembro: ' + cuotaDB.miembro + ' creada con exito.'});
    });
}
function deleteCuota(req, res){
    cuotaModel.findByIdAndRemove(req.params.id, function(err){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: 'Cuota con id: ' + req.params.id + ' borrada.'});
    });
}
function updateCuota(req, res){
    cuotaModel.findByIdAndUpdate(req.params.id,{miembro:req.body.miembro}, function(err, cuotaDB){
         if(err) return res.status(500).send({error: String(err)});
         res.status(200).send({respuesta: 'Cuota id: '+ cuotaDB._id + ' actualizada.'});
    });
}
function getCuota(req, res){
    cuotaModel.findById(req.params.id, function(err, cuotaDB){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: cuotaDB});
    });
}
function getCuotas(req, res){
    cuotaModel.find({}, function(err, cuotasDB){
        if(err) return res.status(500).send({error: String(err)});
        res.status(200).send({respuesta: cuotasDB});
    });
}
module.exports =  {
    addCuota,
    deleteCuota,
    updateCuota,
    getCuota,
    getCuotas

}