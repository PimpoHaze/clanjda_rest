'use strict';

const MongoClient = require('mongoose');
const config = require('../config');
MongoClient.connect(config.mongoDB, function(err, db) {
        if (err) {
            throw err;
        }
        console.log("Conexion con mongodb correcta");
    });

module.exports = {
    MongoClient
};