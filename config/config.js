let mysql = require('mysql');
 
let connection = mysql.createConnection({
    host : process.env.DATABSE_HOST,
    user : process.env.DATABSE_USER,
    password : process.env.DATABSE_PASSWORD,
    database : process.env.DATABSE
});
 
connection.connect();


module.exports = connection;