const express = require('express')
const login = require('../controller/logincontroller')
const auth = require('../middleware/authvalidator')
const router = express.Router()

router.route('/').post(login)


module.exports= router
