const express = require('express')
const router = express.Router()
const profileRoute = require('./profileRoute')

router.use('/profile', profileRoute)

module.exports = router