const post =require('../model/post')
const Comment =require('../model/comment')
module.exports=addcomment=async(req,res)=>{
    try {
        const cmt = await new Comment(req.body)
        const result = await cmt.save();
        console.log(result);

        const data = await post.findByIdAndUpdate(
            req.body.questionId,
            { $push: { Comments:result._id  } },
            { new: true, useFindAndModify: false }
        );
        res.json({
            message : "Comment added successfully",
            error : false,
            success : true,
            data : result,
        })
    } catch (err) {
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}