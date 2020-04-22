var connection = require('../Database/db.js');
const getUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from demo', (err, res) => {
            if (err) {
                reject(err);
            }
            else{
            resolve(res);}
        })
    });

}
module.exports = getUsers;