const express=require('express');
const app=express();
app.use(express.json());

// require('dotenv').config();

const db = require('./Database/db');
const getRoute=require('./Routes/Routes');

app.use(getRoute);


const port=3000;
app.listen(port,()=>console.log(`Listening to port ${port}....`));