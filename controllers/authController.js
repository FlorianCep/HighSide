const Auth = require('../models/authModel')


// Login
exports.showLogin = (req, res) => {
    res.render('pages/auth/login')
}

exports.toLogin = (req, res) => {
    Auth.toLogin(req, res)
}


// Register
exports.showRegister = (req, res) => {
    res.render('pages/auth/register')
}

exports.toRegister = (req, res) => {
    Auth.toRegister(req, res)
}


// Is logged In
exports.isLoggedIn = (req, res, next) => {
    Auth.isLoggedIn(req, res, next)
}
