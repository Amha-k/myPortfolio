const mongoose = require("mongoose")

const schema = mongoose.Schema

const skillsChema= new schema(
    {
name:{
    type: String,
    required:[true,"please enter name"]
},
level:{
    type:Number,
    required:[true,"please provide level"]
}
},
{
            timestamps:true,
        },)

module.exports = mongoose.model("skills",skillsChema)