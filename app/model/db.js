var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '13.233.12.213',
    user: 'ganesh',
    password: 'root',
    database: 'reactDemo',
    port: 3306
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
});

module.exports = connection;