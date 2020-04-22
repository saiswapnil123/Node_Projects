const express = require('express');
const app = express();

const route = require('./Routes/Route');
app.use(route);

require('dotenv').config();

app.listen(3000,()=>{
    console.log("listening on port 3000.....");
});