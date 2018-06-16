var mysql = require('mysql');

var connectMYSQL = function () {
    if (!process.env.NODEENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'backery'
        });
    }
    if (process.env.NODEENV == 'test') {
        return mysql.createConnection({
            host: '',
            user: '',
            password: '',
            database: ''
        });
    }
}

module.exports = function () {
    return connectMYSQL;
}