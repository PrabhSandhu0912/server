const mongoose = require("mongoose")

const mongoDbUrl="mongodb://mongo:9tw3FIuAJl02ozOUrfmg@containers-us-west-190.railway.app:7401"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
