const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:String,
    assessmentyear:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    profilepic:{
        type:String
    },
    role:{
        type:String,
        default:"General"
    }
})
module.exports = mongoose.model("User",userSchema)