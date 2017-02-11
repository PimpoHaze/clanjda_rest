'use strict';

const express = require('express');

const blogRouter = express();
const blogCtrl = require('../controllers/blog');

blogRouter.post('/blog/post', blogCtrl.addPost);
blogRouter.get('/blog/posts', blogCtrl.getPosts);
blogRouter.get('/blog/post/:id', blogCtrl.getPost);
blogRouter.get('/blog/post/titulo/:titulo', blogCtrl.getPostsByTitle);
blogRouter.get('/blog/post/usuario/:id_usuario', blogCtrl.getPostsByUserName);
blogRouter.put('/blog/post/:id', blogCtrl.updatePost);
blogRouter.delete('/blog/post/:id', blogCtrl.deletePost);

module.exports = blogRouter;