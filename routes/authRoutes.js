const express = require('express')
const route = express.Router()
const authController = require('../controllers/authController')


// Login
route.get('/login', authController.showLogin) 
route.post('/login', authController.toLogin)

// Register
route.get('/register', authController.showRegister) 
route.post('/register', authController.toRegister)


module.exports = route;