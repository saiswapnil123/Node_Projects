async function verifyUser(uname,upwd)
{
    if(uname == 'sai' && upwd == 'vodela')
            {
                return uname;
            }
}

var arr  = {
    "employees":[
        {"name":"sai","role":"HR"},
        {"name":"vodela","role":"Admin"}
    ]
}
async function getRoles(uname)
{
    
            for(i in arr.employees)
            {
                if(arr.employees[i].name)
                {
                    return arr.employees[i].role;
                }
            }
}

async function checkUserAccess(arr)
{
 
            if(arr == 'HR'){
        return "Success";
            }
    else{
        return "Error";
    } 
}

async function authUser(uname,upwd)
{
   var first = await verifyUser(uname,upwd);
   var second = await getRoles(first);
   var third = await checkUserAccess(second);
   console.log(third);
}

authUser("sai","vodela");