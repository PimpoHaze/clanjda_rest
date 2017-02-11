'use strict';
var uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    cuotaSchema = new Schema({
        miembro : {type:String, required: 'El nombre del usuario es obligatorio',unique:true},
        cuota: {type:Number, default:10},
        fecha: {type: Date, default: Date.now}
    });
cuotaSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Cuota', cuotaSchema);