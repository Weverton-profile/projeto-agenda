const express = require('express');
const route = express.Router();
const loginController = require('./src/controllers/loginController');
const homeController = require('./src/controllers/homeController');

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

module.exports = route;