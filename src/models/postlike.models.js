const mongoose=require('mongoose')

const postLikeSchema=mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    postID:{type:mongoose.Schema.Types.ObjectId,ref:"post",required:true}
},{
    timestamps:true
})

const PostLike=mongoose.model("postLike",postLikeSchema)
module.exports=PostLike