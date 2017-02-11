'use strict';
// Importar objetos 
const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      router = require('./routes/index'),
      config = require('./config'),
      mongo = require('./midlewares/db'),
      expressJWT = require('express-jwt');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressJWT({secret: config.keySecret}).unless(config.authRoutes))
// Iniciar el servidos express
app.listen(config.port, function(err){
    if(err) return console.log(err);
    console.log("Servidor express corriendo en el puerto: "+ config.port);
}); 
// Conexion a la base de datos
app.use(function(req,res,next){
    mongo.db;
    next();
});
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, OPTIONS, SEARCH');
    res.header('Access-Control-Allow-Headers: Content-Type ');
    res.header('Content-Type: text/html; charset=utf-8');
    res.header('Content-Type: multipart/form-data');
    res.header('Content-Type: application/x-www-form-urlencoded');
    res.header('Content-Type: application/json');
    next();
})
// Rutas de la aplicacion
app.use('/api',router );