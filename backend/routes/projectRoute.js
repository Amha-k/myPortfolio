const express = require('express')
const projects = require('../controller/projectController')
const router = express.Router()

router.route('/').get(projects.getProjects)
router.route('/:id').get(projects.getProjectById)

module.exports= router
