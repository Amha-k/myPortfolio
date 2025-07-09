const express = require('express')
const contact = require('../controller/contactController')
const router = express.Router()

router.route('/').post(contact)


module.exports= router
