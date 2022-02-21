const express=require("express")
const router=express.Router()
const {body,validationResult}=require("express-validator")

const Post=require("../models/post.models.js")

router.post('',
body('likes').isNumeric(),
async(req,res)=>{
    try {
        const posts=await Post.create(req.body)
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        return res.send(posts)
    } catch (error) {
         return res.status(201).send(error.message)
    }
})

router.get('',async(req,res)=>{
    try {
        const posts=await Post.find().lean().exec()
        res.send(posts)
    } catch (error) {
        return res.send(error)
    }
})

module.exports=router