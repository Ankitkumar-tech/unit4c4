const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    "firstName":{type:String,required:true},
    "age":{type:Number,required:true},
    "email":{type:String,required:true},
    "profileImages":[{type:String}]
},{
    timestamps:true
})

const User=mongoose.model("user",userSchema)
module.exports=User