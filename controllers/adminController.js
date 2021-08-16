const AdminArticles = require('../models/adminModel')


// Index admin
exports.allArticles = (req, res) => {
    AdminArticles.getAllArticles(req, res)
}


// Création nouvel article
exports.formAddArticle = (req, res) => { 
    res.render('pages/admin/new') 
}

exports.addArticle =  (req, res) => {
    AdminArticles.addArticle(req, res)
}


// Voir l'article
exports.showArticle = (req, res) => {
    AdminArticles.showArticle(req, res)
}


// Edit article
exports.formEditArticle = (req, res) => {
    AdminArticles.showEditArticle(req, res)
}

exports.editArticle = (req, res) => {
    AdminArticles.editArticle(req, res)
}


// Supprimer
exports.deleteArticle = (req, res) => {
    AdminArticles.deleteArticle(req, res)
}