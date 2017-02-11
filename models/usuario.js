'use strict';
var uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      usuarioSchema = new Schema({
        nombre : {type:String, required: 'El campo nombre obligatorio'},
        email : {type:String, unique: true,index: true},
        password: {type:String, required: 'El campo password es obligatorio'},
        grupo : {
          acceso: {type: String, enum: ['admin','usuario','miembro'],default: 'usuario'},
        },
        fecha_registro: {type:Date,default: Date.now}
      }); 
usuarioSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Usuario', usuarioSchema); 
