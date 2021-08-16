const express = require('express')
const route = express.Router()
const frontController = require('../controllers/frontController')


// Accueil
route.get('/', frontController.showHome)
// Blog
route.get ('/blog', frontController.showBlog)
// Article
route.get('/article', frontController.showArticle)
// Equipe
route.get('/equipe', frontController.showEquipe)
// Emission
route.get('/emission', frontController.showEmission)


// // Commentaires
// route.post('/article', frontController.doComments)


module.exports = route;