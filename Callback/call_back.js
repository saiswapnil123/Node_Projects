function verifyUser(uname,upwd,callback)
{
            if(uname == 'sai' && upwd == 'vodela')
            {
                callback(uname);                
            }
            else{
                console.log('error')
            }
}

var arr  = {
    "employees":[
        {"name":"sai","role":"HR"},
        {"name":"vodela","role":"Admin"}
    ]
}
function getRoles(uname,callback)
{
        if(uname != "No_User"){
            for(i in arr.employees)
            {
                if(arr.employees[i].name)
                {
                    callback(arr.employees[i].role);
                }
            }
        }
}

function checkUserAccess(arr,callback)
{
    
            if(arr == 'HR'){
        callback("Success");
            }
}

function authUser(uname, upwd)
{
     verifyUser(uname,upwd,function(a){
         getRoles(a,function(b){
             checkUserAccess(b,function(c){
                     console.log(c);
             })
         })
     })
}


authUser("sai","vodela");