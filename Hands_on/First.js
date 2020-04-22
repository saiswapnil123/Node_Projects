var express = require('express');
var app = express();
app.use(express.json());
var connection = require('./Database/db.js');
var routes = require('./Routes/route.js');
require('dotenv').config();
app.use(routes);

// connection.connect(function(){
//     console.log("Database Connected....");

app.listen(3000,()=>{console.log('server running')});

