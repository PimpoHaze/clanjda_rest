'use strict';

module.exports = {

    // propiedades
    port: process.env.PORT || 8080,
    mongoDB: 'mongodb://localhost:27017/clanjda_rest',
    keySecret: 'jinetesdelapocalipsis2017',
    authRoutes: {
        path: [
            '/',
            '/api',
            '/api/login',
            '/api/registro',
            '/api/blog/posts'
            
        ]
    }

}