const db = require('../Database/Database');
const select =(teams)=>{
    const arr  = [];
    const team = [];
    return new Promise((resolve,reject)=>
    {
        db.query('select * from team order by Rating desc',(err,res)=>
        {
            if(err)
            reject(err);
            else{                
                const len = Object.keys(res).length/teams;
                console.log(len);
                Object.keys(res).forEach(function(key){
                    arr.push(res[key]);
                });
                console.log(arr[0]);
                for(i = 0; i<len;i++)
                {
                    team[i] = [];
                }
                let count = 0;
                for(j = 0;j<len;j++)
                {
                    for(k = 0;k<teams;k++,count+=len)
                    {
                        team[j][k] = arr[count];
                        console.log(j,k,team[j][k],count);
                    }
                    count = j+1;
                }
                resolve(team);
                // for(i = 0;i<len;i++){
                //     if(i%2==0){
                //         for(j=0;j<teams;j++){

                //         }
                //     }
                // }
            
            }
        }
        );
    });
}
const Insert = (id, name, rating)=>{
    return new Promise((resolve,reject)=>{
        db.query(`insert into team values(${id},'${name}',${rating})`,(err,res)=>{
            if(err){
                console.log("Inserted",id,name,rating);
                reject(err);
            }
            else
            console.log(res);
            resolve(res);
        });
    });
}
const Delete = ()=>{
    return new Promise((resolve,reject)=>{
        db.query(`delete from team where Id=${id}`,(err,res)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            else{
                console.log(res);
                resolve(res);
            }
            });
        });
}
module.exports = {select, Insert, Delete};
