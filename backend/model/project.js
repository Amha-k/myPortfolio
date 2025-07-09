const mongoose = require("mongoose")

const schema = mongoose.Schema

const projectschema= new schema(
    {
title:{
    type: String,
    required:[true,"please enter title"]
},
description:{
    type:String,
    required:[true,"please provide description"]
},

imageUrl:{
    type:String
},
link:{
type:String
}

},
{
            timestamp:true,
        },)

module.exports = mongoose.model("project",projectschema)