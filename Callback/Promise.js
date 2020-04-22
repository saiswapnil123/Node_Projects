function verifyUser(uname,upwd)
{
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            if(uname == 'sai' && upwd == 'vodela')
            {
                resolve(uname);
                
            }
            else{
                reject("Error in credentials");
            }
        },1000)
    })
}

var arr  = {
    "employees":[
        {"name":"sai","role":"Admin"},
        {"name":"vodela","role":"Admin"}
    ]
}
function getRoles(uname)
{
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            for(i in arr.employees)
            {
                if(arr.employees[i].name==uname)
                {
                    resolve(arr.employees[i].role);
                }
            }
            reject("Error");
            },1000)
    })
}

function checkUserAccess(arr)
{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(arr == 'HR'){
                    console.log("ggcvb");
                resolve("Success");
            }
    else{
        reject("Error");
    }
        },1000)
    }) 
}


function authUser(uname,upwd)
{
    
    verifyUser(uname, upwd)
    .then(getRoles)
    .then(checkUserAccess)
    .catch(console.log());
}

authUser("sai","vodela");