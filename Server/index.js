const express = require("express");
const app = express();
const parse = require("body-parser");

app.use(parse.urlencoded({extendedd : false}));
app.use(parse.json());

app.use(express.static('formSibling'));

app.listen(3000,(err,res)=>{
    console.log("listening on port 3000 ......");
});
