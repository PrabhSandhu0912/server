const mongoose = require("mongoose")

const mongoDbUrl="mongodb+srv://clickitserver:yXkvXYlVJI5n9JbQ@serverclickit.pasm1v7.mongodb.net/?retryWrites=true&w=majority"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
