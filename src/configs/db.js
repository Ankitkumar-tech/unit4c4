const mongoose=require('mongoose')

const connect=()=>{
    return mongoose.connect('mongodb+srv://Ankitsharma:Ankit1010@cluster0.brj8m.mongodb.net/test')
}

module.exports=connect