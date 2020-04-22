var mysql = require('mysql');
var connect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"bekadia"
})
module.exports = connect;