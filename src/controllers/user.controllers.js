const express=require("express")
const router=express.Router()
const {body,validationResult}=require("express-validator")
const upload=require("../middlewares/file.upload")
const User=require("../models/user.models.js")
const fs=require('fs')

router.post('',
body('firstName').isLowercase().isLength({min:3,max:30}),
body('age').isNumeric().custom(value=>{
    if(value>150 || value<=0){
        throw new Error("Enter the Valid Age")
    }
}),
body('email').isEmail().custom(async(value)=>{
    const users=await User.findOne({email:value})
    if(users){
        throw new Error("Email Already Exists")
    }
    else{
        return true
    }
}),
body("profileImages").isLength({min:1}),
async(req,res)=>{
    try {
        const users=await User.create(req.body)
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        return res.send(users)
    } catch (error) {
        return res.status(201).send(error.message)
    }
})

router.post('/single',upload.single("profileImages"),async(req,res)=>{
    try {
        const users=await User.create({
            firstName:req.body.firstName,
            age:req.body.age,
            email:req.body.email,
            profileImages:req.file.path
        })
        return res.send(users)
    } catch (error) {
        return res.status(201).send(error.message)
    }
})

router.get('',async(req,res)=>{
    try {
        const users=await User.find().lean().exec()
        res.send(users)
    } catch (error) {
        return res.status(201).send(error.message)
    }
})

module.exports=router