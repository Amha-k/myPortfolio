const express = require('express')
const skills = require('../controller/skillController')
const router = express.Router()
const auth = require('../middleware/authvalidator')
router.route('/').get(auth,skills.getSkill).post(auth,skills.createSkill)
router.route('/:id').put(auth,skills.updateskill).delete(auth,skills.deleteSkill)


module.exports= router
