const mongoose = require("mongoose")

const mongoDbUrl="mongodb+srv://sandhuprabh342:iocQuBh3O828IB5k@cluster0.gcpnusw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
