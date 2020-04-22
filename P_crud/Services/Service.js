const connect = require('../Database/Database');
const Select = ()=>{
    return new Promise((resolve,reject)=>{
        connect.query(`select * from User;`,(err,res)=>{
        if(res)
        resolve(res);
        else
        reject(err);
        });
    })
}
const Insert = (email, password)=>{
    console.log(email, password);
    return new Promise((resolve,reject)=>{
        console.log("In service");
        connect.query(`insert into User (email, password) values('${email}','${password}');`,(err,res)=>{
        if(err){
            console.log("error");
            reject(err);
        }
        else{
            console.log("inserted");
            resolve(res);
        }
        });
        
    })
}
const Update = (id, password)=>{
    return new Promise((resolve,reject)=>{
        console.log(password);
        // 'UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id],
        connect.query(`update User set password = '${password}' where id = ${id};`,(err,res)=>{
        if(res){    
            console.log("updated"); 
            resolve(res);
            
        }
        else{
            console.log("error");
        reject(err);
        }
        });
    })
}

const Delete = (id)=>{
    return new Promise((resolve,reject)=>{
        connect.query(`delete from User where id =${id};`,(err,res)=>{
        if(res){
        console.log("deleted");
        resolve(res);
        }
        else
        reject(err);
        });
        
    })
}
module.exports = {Select, Insert, Update, Delete};