const post=require('../model/post')

module.exports=getQuestionDetails=async(req,res)=>{
    try {
        const question = await post.findById(req.body.questionId)
        .populate('userId')
        .populate({
            path: 'Comments',
            populate: {
                path: 'userId'
            }
        });
    
    console.log("Populated Question:", question);
    
    res.json({
        message: { message: "question found" },
        error: false,
        success: true,
        data: question,
    });
    
    } catch (err) {
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}