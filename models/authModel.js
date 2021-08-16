const connection = require('../config/config');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { promisify } = require('util');


class Auth {

    static toLogin(req, res) {
        try {
            const { name, password } = req.body;
    
            connection.query('SELECT * FROM users WHERE nom = ?', [name], async (err, results) => {
                
                if (!results || !(await bcrypt.compare(password, results[0].mdp))) {
                    res.redirect('/login')
                } else {
                    const id = results[0].idUser;
                    const token = jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    
                    const cookieOptions = {
                        expires: new Date(
                            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 100
                        ),
                        httpOnly: true
                    }
    
                    res.cookie('jwt', token, cookieOptions);
                    res.redirect('/admin');
                }
    
            })
    
        } catch (error) {
            console.log(error)
        }
    }

    static toRegister(req, res) {
        
        const { name, password } = req.body;

        connection.query('SELECT nom FROM users WHERE nom = ?', [name], async (err, results) => {
            if(err) {
                console.log(err)
            }

            if(results.length > 0) {
                return res.render('pages/auth/register', {
                    message: "nom déjà prit"
                }) 
            }

            let hashedPassword = await bcrypt.hash(password, 8);

            connection.query('INSERT INTO users SET ?', { nom: name, mdp: hashedPassword, isAdmin: 1}, (err, result) => {
                if(err) {
                    console.log(err)
                } else {
                    return res.render('pages/auth/register', {
                        message: "c ok"
                    }) 
                }
            })
        })
    }

    static async isLoggedIn(req, res, next) {

        if(req.cookies.jwt) {
            try {
                //1) verify the token
                const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
                
                //2) Check if the user still exists
                connection.query('SELECT * FROM users WHERE idUser = ?', [decoded.id], (error, result) => {
                    
                    if(!result) {
                        return next();
                    }
                    
                    req.user = result[0];
                    return next();
                
                });

            } catch (error) {
                console.log(error);
                return next();
            }
            
        } else {
            res.redirect('/login')
        }
    }

}



module.exports = Auth;