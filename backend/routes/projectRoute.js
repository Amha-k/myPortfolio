const express = require('express')
const projects = require('../controller/projectController')
const router = express.Router()

router.route('/').get(projects.getProjects)


module.exports= router
