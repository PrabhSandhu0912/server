const mongoose = require("mongoose")

const mongoDbUrl="mongodb+srv://clickitserver:okgoogle@cluster0.uqcqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
