const express = require('express');
const app = express();
const route = require('./Routes/Routes');
const service = require('./Services/Services');
app.use(express.json());
app.use(route);

app.listen(3000,()=>{
    console.log("Listening to port 3000.....");
});