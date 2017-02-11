'use strict';
var uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    blogSchema = new Schema({
        titulo : {type:String, required: 'El titulo es obligatorio',unique:true},
        descripcion: {type:String, required: String('El campo descripción es obligatorio')},
        texto: {type:String, required: String('El texto es obligatorio')},
        id_usuario: {type:String, required: String('El nombre usuario es obligatorio')},
        fecha: {type: Date, default: Date.now}
    });
blogSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Blog', blogSchema);