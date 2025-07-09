const joi = require('joi')

const contactShcema = joi.object({
    name:joi.string().required(),
    email:joi.string().email().required(),
    message:joi.string().max(200).required()
}
).options({stripUnknown:true})

module.exports =contactShcema;