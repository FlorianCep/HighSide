const connection = require('../config/config')


class FrontArticles {
    
    static showBlogArticles(req, res) {
        let sqlQuery = 'SELECT * FROM articles ORDER BY date DESC';
        connection.query(sqlQuery, (err, result) => {
            if (err) throw err;
            res.render('pages/blog', { datas: result })
        });
    }


    static showArticle(req, res) {
        const idArticle = req.query.id;

        let sqlQuery = 'SELECT * FROM articles WHERE id_article = ?';
        connection.query(sqlQuery, [idArticle], (err, result) => {
            if (err) throw err;
            res.render('pages/article', { datas: result })
        });
    }



    // static doComments(req, res) {
    //     let comment = {
    //         nom: req.body.nom,
    //         id_article: req.query.id,
    //         date: new Date(),
    //         commentaire: req.body.commentaire
    //     }
    
    //     if (comment.nom && comment.commentaire) {
    //         let sqlQuery = "INSERT INTO commentaires SET ?";
    //         connection.query(sqlQuery, comment, (err, result) => {
    //             if (err) throw err;
    //             res.render('pages/article', { message: 'Commentaire ajouté'})
    //         });
    //     } else {
    //         res.render('pages/article', { errMessage: 'Commentaire non ajouté' })
    //     }
    // }


    // static showComments(req, res) {
    //     const idArticle = req.query.id;

    //     let sqlQuery = 'SELECT * FROM commentaires WHERE id_article = ? ORDER BY date DESC';
    //     connection.query(sqlQuery, [idArticle], (err, result) => {
    //         if (err) throw err;
    //         res.render('pages/article', { comments: result })
    //     });
    // }

}



module.exports = FrontArticles;