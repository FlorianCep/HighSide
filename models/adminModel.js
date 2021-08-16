const connection = require('../config/config');


class AdminArticles {
    
    static getAllArticles(req, res) {
        let sqlQuery = 'SELECT * FROM articles ORDER BY date DESC';
        connection.query(sqlQuery, (err, result) => {
            if (err) throw err;
            res.render('pages/admin/index', { datas: result })
        })
    }

    static addArticle(req, res) {
        let data = {
            nom_categorie: req.body.categorie,
            titre: req.body.titre,
            description: req.body.description,
            contenu: req.body.contenu,
            date: new Date(),
            image: req.body.image,
            note: req.body.note
        }
    
        if (data.nom_categorie && data.titre && data.description && data.contenu && data.image) {
            let sqlQuery = "INSERT INTO articles SET ?";
            connection.query(sqlQuery, data, (err, result) => {
                if (err) throw err;
                res.render('pages/admin/new', { message: 'Article ajouté '})
            });
        } else {
            res.render('pages/admin/new', { errMessage: 'Article non ajouté' })
        }
    }

    static showArticle(req, res) {
        const idArticle = req.query.id;

        let sqlQuery = 'SELECT * FROM articles WHERE id_article = ?';
        connection.query(sqlQuery, [idArticle], (err, result) => {
            if (err) throw err;
            res.render('pages/admin/show', { datas: result })
        });
    }

    static showEditArticle(req, res) {
        const idArticle = req.query.id;

        let sqlQuery = 'SELECT * FROM articles WHERE id_article = ?';
        connection.query(sqlQuery, [idArticle], (err, result) => {
            if (err) throw err;
            res.render('pages/admin/edit', { article: result })
        });
    }

    static editArticle(req, res) {
        let params = [
            req.body,
            req.query.id
        ]
    
        let sqlQuery = "UPDATE articles SET ? WHERE id_article = ?";
        connection.query(sqlQuery, params, (err, result) => {
            if (err) throw err;
            res.render('pages/admin/edit', { message: 'Article modifié '})
        });
    }

    static deleteArticle(req, res) {
        const id = req.query.id;

        let sqlQuery = 'DELETE FROM articles WHERE id_article = ?';
        connection.query(sqlQuery, id, (err, result) => {
            if (err) throw err;
            res.redirect('/admin')
    });
    }

}



module.exports = AdminArticles;