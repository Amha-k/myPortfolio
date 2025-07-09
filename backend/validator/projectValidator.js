const joi = require('joi')

const contactShcema = joi.object({
    title:joi.string().required(),
    description:joi.string().required(),
    imageUrl:joi.string().required(),
    link:joi.string().max(200).required()
}
).options({stripUnknown:true})

module.exports =contactShcema;