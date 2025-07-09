const express = require('express')
const projects = require('../controller/projectController')
const router = express.Router()
const auth = require('../middleware/authvalidator')
router.route('/').get(auth,projects.getProjects).post(auth,projects.createProject)
router.route('/:id').put(auth,projects.updateproject).delete(auth,projects.deleteproject)


module.exports= router
