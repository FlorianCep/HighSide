const FrontArticles = require('../models/frontModel')


// Accueil
exports.showHome = (req, res) => {
    res.render('index')
}

// Blog
exports.showBlog = (req, res) => {
    FrontArticles.showBlogArticles(req, res)
}

// Voir un article
exports.showArticle = (req, res) => {
    FrontArticles.showArticle(req, res)
}

// L'équipe
exports.showEquipe = (req, res) => {
    res.render('pages/equipe')
}

// L'émission
exports.showEmission = (req, res) => {
    res.render('pages/emission')
}


// // Commentaires
// exports.showComments = (req, res) => {
//     FrontArticles.showComments(req, res)
// }
// exports.doComments = (req, res) => {
//     FrontArticles.doComments(req, res)
// }