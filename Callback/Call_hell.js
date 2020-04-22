function verifyUser(uname,upwd)
{
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            if(uname == 'sai' && upwd == 'vodela')
            {
                resolve('sai');
            }
            else{
                reject(console.log("Error in credentials"));
            }
        },1000)
    })
}

function getRoles(uname)
{
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            if(uname == 'rama')
        {
            resolve('HR');
        }
        if(uname == 'sai')
        {
            resolve('Admin');
        }
        else{
            reject(console.log("No Roles found"));
        }
        },1000)
    })
}

function checkUserAccess(arr)
{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(arr == 'Admin'){
        resolve("Success");
            }
    else{
        reject(console.log("Error"));
    }
        },1000)
    }) 
}

// function authUser(uname, upwd)
// {
//     verifyUser(uname,upwd,function(value){
//         getRoles(value,function(value){
//             checkUserAccess(value,function(err){
//                 if(err != "success"){
//                     console.log("Error");
//                 }
//                 else{
//                     console.log("Success");
//                 }
//             })
//         })
//     })
// }

function authUser(uname,upwd)
{
    var p = new Promise(function(resolve,reject){
        
    });
    p
    .then(verifyUser)
    .then(getRoles)
    .then(checkUserAccess)
    .catch(console.log("Error"));
}

authUser("sai","vodela");