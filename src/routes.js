const express = require('express')
const UserController = require('./controllers/UserController')

require('./database')

const routes = express.Router()

routes.get('/users', UserController.index )
routes.post('/users', UserController.store )

// Rota para autenticação de usuário
routes.post("/login", UserController.login);

module.exports = routes
