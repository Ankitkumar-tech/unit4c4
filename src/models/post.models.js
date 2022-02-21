const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    "body":{type:String,required:true},
    "likes":{type:Number,required:true},
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},{
    timestamps:true
})

const Post=mongoose.model("post",postSchema)
module.exports=Post