const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
      await mongoose.connect(process.env.MONGO_URL);

      console.log("Database connected sucessfully")
    } catch (error) {
        console.log("datacase cant connect")
    }  
}

module.exports=connectDB