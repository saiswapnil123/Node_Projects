const express=require('express');
const connect = require('../Database/db');

const route=express.Router();
route.get('/', async (req,res)=>{

    try{
        const post=await connect.find();
        res.json(post);
        }
        catch(err)
        {
            res.json({message:err});
        }
    
});

route.post('/', async (req,res)=>{
    const data=new connect({
        name:req.body.name,
        age:req.body.age,
        marks:req.body.marks
    });

try{
const savedpost=await data.save();
res.json(savedpost);
}
catch(err)
{
    res.json({message:err});
}


});

route.delete('/:Id',async (req,res)=>{
try{
    const Deleted=await connect.deleteOne({name:req.params.Id});
    res.json(Deleted);
}
catch(err){
res.json({message:err});
}
});

route.put('/:postId',async (req,res)=>{
    try{
        const update=await connect.patch({name:req.params.postId},
           {$set:{name:req.body.name}} );
        res.json(update);
    }
    catch(err){
    res.json({message:err});
    }
    });


module.exports=route;