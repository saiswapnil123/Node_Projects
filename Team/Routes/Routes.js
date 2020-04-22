const express = require('express');
const db = require('../Database/Database');
const service = require('../Services/Services');
const Router = express.Router();
let result;
Router.get('/Select/:id',async (req,res)=>{
    const teams= parseInt(req.params.id);
    try{
    result = await service.select(teams);
    if(result)
        len = Object.keys(result).length;
        // for(i = 0;i<len;i++){
        //     for(j = 0;j<teams;j++)
        //     {
        //         res.send(result[i][j]);
        //     }
        // }
        res.send(result);
    }
    catch(err){
        console.log(err);
        console.log("hgvbkhgvbn");
    } 
    });
Router.post('/Insert',async (req,res)=>{
    id = req.body.Id;
    name = req.body.Name;
    rating = req.body.Rating;
    console.log("Insert Functioon ");
    try{
    const resultt = await service.Insert(id, name, rating);
    res.send(resultt);
    }
    catch(error){
        res.send("hi");
    }
    });
Router.delete('/Delete/:Id',async (req,res)=>{
    id = req.params.Id;
    console.log("Insert Functioon ");
        try{
        const resultt = await service.Delete(id);
        res.send(resultt);
        }
        catch(error){
            res.send("hi");
        }
        });

module.exports = Router;