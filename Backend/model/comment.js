const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    questionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",
    }
})
module.exports = mongoose.model("Comment",commentSchema)