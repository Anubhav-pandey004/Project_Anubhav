const mongoose= require('mongoose');

const answerSchema= new mongoose.Schema({
    answer:{
        type:String,
        required:true
    },
    answeredByUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    image:{
        type:String
    },
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    verified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model("Answer",answerSchema)