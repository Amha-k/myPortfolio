const mongoose= require('mongoose')
const validator = require('validator')
const { default: isEmail } = require('validator/lib/isEmail')

const schema = mongoose.Schema

const contactSchema = new schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            lowercase:true,
            validate:{
            validator:isEmail,
            message:"please enter email"
            }
        },
        message:{
            type:String,
            maxlength:200,
        }
    },
        {
            timestamps:true,
        },
    )

    module.exports = mongoose.model("contact",contactSchema);