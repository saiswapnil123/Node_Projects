const conn = require('../Database/db');
const welcome= ()=>{
    return new Promise((resolve,reject)=>{
        conn.query('select * from demo',(err,result)=>{
            if(err){
                console.log('er')
            reject(err);
        }
            else{
                console.log('errrr')
            resolve(result);}
        });
    });
}
module.exports = welcome;

