const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)
const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/sessionController')

routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)
routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)
module.exports = routes
