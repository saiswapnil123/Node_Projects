var db = require('mysql');
var connect = db.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"bekadia"
});
connect.connect();
module.exports = connect;