var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.json({
        message: "Hello World"
    });
});


app.listen(2000);