const mongoose = require("mongoose")

const mongoDbUrl="mongodb://mongo:2hB2bG3gBBGcBf23e161GGDae1f1b4E6@monorail.proxy.rlwy.net:12754"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
