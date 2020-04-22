var service = require('../Services/Service');
var express = require('express');
var Router = express.Router();

Router.get('/select', async(req,res)=>{
    try{
    const result = await service.Select();
    res.send(result);
    }
    catch(error)
    {
        res.send(error);
    }
    
})
Router.post('/insert', async(req,res)=>{
    console.log("Before Try");
    email = req.body.email;
    password = req.body.password;
    console.log(email,password);
    try
        {            
            const result = await service.Insert(email, password);
            if(result)
                res.send(result);
        }
        catch(error)
        {
            res.send(error);
        }
    
});
Router.delete('/delete/:id', async(req,res)=>{
    try{
        id = req.params.id;
    const result = service.Delete(id);
    if(result)
        res.send({"msg" : "deleted"});
    }
    catch(error)
    {
        console.log("error");
        res.send(error);
    }
})
Router.put('/update/:id', async(req,res)=>{
    console.log(req.params.id);
    try{
        id= req.params.id;
        password = req.body.password;
        console.log(id,password);
    const result = service.Update(id, password);
    if(result)
    res.send({"msg" : "Updated"});
    }
    catch(error)
    {
        res.send(error);
    }
    
})

module.exports = Router;