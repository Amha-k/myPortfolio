const express = require('express')
const skills = require('../controller/skillController')
const router = express.Router()

router.route('/').get(skills.getSkill)


module.exports= router
