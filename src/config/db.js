const mongoose = require("mongoose")

const mongoDbUrl="mongodb+srv://sandhuprabh342:vSIrudo2rEMScAIl@cluster0.g2dczlz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
