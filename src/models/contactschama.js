const mongoose = require("mongoose");


const enployeeSchama = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    emails : {
        type: String,
        required:true,
        unique:true
    },
    
    phone: {
        type: Number,
        required:true,
        unique:true
    },
    
    add: {
        type: String,
        required:true
    },
    space :{
        type: String,
        required:true
    }
    
    
})


// We need to create collection
const contact= new mongoose.model("contact",enployeeSchama);
module.exports = contact ;  

//NOTE: The first name of resister should be uppercase



