var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '123456',
    database: 'db1'
});

db.connect(function (err){
    if(err){
        console.log('Error al conectarse a la base de datos',err);
    } else {
        console.log('Connected to mysql');
    }
});

module.exports = db;