const mongoose = require("mongoose")

const schema = mongoose.Schema

const projectschema= new schema(
        {
            title: {
                type: String,
                required: [true, "please enter title"],
            },
            description: {
                type: String,
                required: [true, "please provide description"],
            },
            details: {
                type: String,
            },
            imageUrl: {
                type: String,
            },
            url: {
                type: String,
            },
        },
        {
            timestamps: true,
        }
);

module.exports = mongoose.model("project", projectschema);