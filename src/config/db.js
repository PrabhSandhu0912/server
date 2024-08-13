const mongoose = require("mongoose")

const mongoDbUrl="mongodb+srv://user2000:test123@serverclickit.pasm1v7.mongodb.net/?retryWrites=true&w=majority&appName=serverclickit"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
