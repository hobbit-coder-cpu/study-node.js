const postsController = require('../controllers/posts.controller')

const express = require('express')
const postsRouter = express.Router();
postsRouter.get('/', postsController.getPosts)

module.exports = postsRouter