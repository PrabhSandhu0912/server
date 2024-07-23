const mongoose = require("mongoose")

const mongoDbUrl="mongodb+srv://sandhuprabh342:Sandhu0912@justdial.4bhf7jr.mongodb.net/?retryWrites=true&w=majority&appName=JustDial"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
