var Joi = require('joi');
var express = require('express');
var app = express();
app.use(express.json());
var fs = require('fs');
let date = new Date();

const Details =[{
    id : 1, 
    name :"sai", 
    profession : "student"
}];

app.get('/',function(req,res){
    const time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var data = req.url +"  "+req.method+"  "+time+"\n"; 
    console.log(data,'is data');
    fs.writeFileSync("./log.txt",data,{flag:'a'});
    res.send("hello");
});


// app.get('/',function(req,res){
//     res.send("Hello");
// });

// To fetch the details of user 
app.get('/api/Details', function(req, res){
    res.send(Details);
});

// To fetch the details of user POSTMAN
app.post('/api/Details', function(req, res){
    const Detail = {
        id : Details.length + 1,
        name : req.body.name,
        profession : req.body.profession
    };
    Details.push(Detail);
    res.send(Detail);
   
});

//To update the user details with name
app.put('/api/Details/update/:id/name', function(req,res){
    const Detail = Details.find(c => c.id === parseInt(req.params.id));
    if(!Detail) res.status(404).send("Details of a person not found....");

    const { error } = validateUser(req.body);
    if(error)
    {
        res.status(400).send(error.details[0].message);
    }
    Detail.name = req.body.name;
    res.send(Details);
    
});

//To update user details with profession
app.put('/api/Details/update/:id/profession', function(req,res){
    const Detail = Details.find(c => c.id === parseInt(req.params.id));
    if(!Detail) res.status(404).send("Details of a person not found....");

    const { error } = validatePro(req.body);
    if(error)
    {
        res.status(400).send(error.details[0].message);
    }
    Detail.profession = req.body.profession;
    res.send(Details);
    
});

app.delete('/api/Details/delete/:id', function(req,res){
    const Detail = Details.find(c => c.id === parseInt(req.params.id));
    if(!Detail) res.status(404).send("Details of a person not found....");

    Details.pop(Detail);
    res.send(Detail);
    
});

//Function to validate the given data 
function validateUser(User)
{
    const schema = {
        name : Joi.string().min(3).required()
    };
    return Joi.validate(User, schema);
}
function validatePro(User)
{
    const schema = {
        profession : Joi.string().min(3).required()
    };
    return Joi.validate(User, schema);
}
app.listen(6000,()=>{
    console.log('listening on port 6000');
});