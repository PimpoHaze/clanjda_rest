'use strict';
const config = require('../config');
function token(usuarioDB){
    let jwt = require('jsonwebtoken');
    let payload = {
            "iat": Math.floor(Date.now() / 1000) - 30 ,
            "exp": Math.floor(Date.now() / 1000) + (60 * 60),
            "sub": usuarioDB._id,
            "name": usuarioDB.nombre,
            "admin": false
        };
   return jwt.sign(payload,config.keySecret);

}
module.exports = {
    token
}