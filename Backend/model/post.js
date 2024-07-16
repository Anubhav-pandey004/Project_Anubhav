const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    subject:{
        type:String
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    answers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Answer",
        default:[]
    }],
    Comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment",
        default:[]
    }],

}, { timestamps: true });
module.exports = mongoose.model("Post",postSchema)