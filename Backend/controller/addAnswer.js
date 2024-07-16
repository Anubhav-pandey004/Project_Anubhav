const answerModel = require("../model/answer");

module.exports=addAnswer=async(req,res)=>{
    try {
        const ans =await new answerModel(req.body);
        const answerinDB=await ans.save()
        res.json({
            message:"Answer added successfully",
            error : false,
            success : true,
            data : answerinDB,
        })
    } catch (err) {
        res.json({
            message:err.message || "some error occured while adding answer",
            error : true,
            success : false,
        })
    }
}