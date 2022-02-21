const express=require("express")
const connect=require('./configs/db')

const userController=require("./controllers/user.controllers")
const postController=require("./controllers/post.controllers")
const commentController=require("./controllers/comment.controllers")

const app=express()
app.use(express.json())

app.use("/users",userController)
app.use('/posts',postController)
app.use('/comments',commentController)

app.listen(1810,async function(){
try {
    await connect()
    console.log(" 1810 kam kr rha hai  ")
} catch (error) {
    console.log(error)
}
})
