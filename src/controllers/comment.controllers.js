const express=require("express")
const router=express.Router()


const Comment=require("../models/comment.models.js")

router.post('',async(req,res)=>{
    try {
        const comments=await Comment.create(req.body)
        return res.send(req.body)
    } catch (error) {
        return res.status(201).send(error.message)
    }
})

module.exports=router