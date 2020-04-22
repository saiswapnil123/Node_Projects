var express = require('express');
var app = express();
const cors = require('cors');

var body_parser = require('body-parser'); 
var connect = require('./Database/Database');
var routes = require('./Routes/Routes');
// app.use(body_parser.urlencoded({extended:true}));
// app.use(body_parser.json());
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000,()=>{
    console.log("listening on port 3000.....");
})

module.exports = app;