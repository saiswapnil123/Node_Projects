const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
},()=>{
    console.log("Connected");
});


const schema = mongoose.Schema;
const Student = new schema({
    
    name:{
        type : String,
        required : true
    },
    age:{
        type:Number,
        required : true
    },
    marks:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("Colleges",Student);
