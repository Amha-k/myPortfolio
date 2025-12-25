const joi = require('joi')

const projectSchema = joi
    .object({
        title: joi.string().required(),
        description: joi.string().required(),
        details: joi.string().max(2000).optional(),
        imageUrl: joi.string().uri().allow('').optional(),
        url: joi.string().uri().max(200).allow('').optional(),
    })
    .options({ stripUnknown: true })

module.exports = projectSchema;