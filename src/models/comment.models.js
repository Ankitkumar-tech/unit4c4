const mongoose=require('mongoose')

const commentSchema=mongoose.Schema({
    "body":{type:String,required:true},
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    postID:{type:mongoose.Schema.Types.ObjectId,ref:"post",required:true}
},{
    timestamps:true
})

const Comment=mongoose.model("comment",commentSchema)
module.exports=Comment