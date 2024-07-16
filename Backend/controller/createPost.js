const postModule=require('../model/post')

module.exports=createPost =async(req,res)=>{
    try{
        const {post,subject}=req.body
        if(!post || !subject){
            throw new Error("Post and subject are required")
        }
        const newPost=await new postModule(req.body)
        let Post=await newPost.save();
        res.status(201).json({
            message : "Question Posted successfully",
            error : false,
            success : true,
            data : Post,
        })

    }catch(err){
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}