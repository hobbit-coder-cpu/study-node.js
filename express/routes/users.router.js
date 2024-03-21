const usersController = require('../controllers/users.controller')

const express = require('express')
const usersRouter = express.Router()

usersRouter.get('/:userId', usersController.getUser)
usersRouter.get('/', usersController.getUsers)
usersRouter.post('/', usersController.postUser)


module.exports = usersRouter