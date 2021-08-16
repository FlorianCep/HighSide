const express = require('express')
const route = express.Router()
const adminController = require('../controllers/adminController')
const authController = require('../controllers/authController')


// Index admin
route.get ('/', [authController.isLoggedIn, adminController.allArticles])

// Création nouvel article
route.get('/new', [authController.isLoggedIn, adminController.formAddArticle])
route.post('/new', [authController.isLoggedIn, adminController.addArticle])

// Voir l'article
route.get('/show', [authController.isLoggedIn, adminController.showArticle])

// Edit article
route.get('/edit', [authController.isLoggedIn, adminController.formEditArticle])
route.post('/edit', [authController.isLoggedIn, adminController.editArticle])

// Supprimer
route.get('/delete', [authController.isLoggedIn, adminController.deleteArticle])


module.exports = route;