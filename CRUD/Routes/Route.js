var express = require('express');
var welcome = require('../Services/Service');
var route = express.Router();
route.get('/welcome',async (res)=>{
    try{
    const result = await welcome();
    console.log('errrwe');
    console.log(result)
    if(result){
    res.send(result);}
} catch(error){
    console.log(error);
        res.send("error");
    }
    
});
module.exports =route;