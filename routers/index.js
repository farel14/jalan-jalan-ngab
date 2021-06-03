const express = require('express')
const router = express.Router()
const destination = require('./destinationRouter')
const chat = require('./chatRoute')

router.use('/destinations',destination)
router.use('/chat',chat)

module.exports = router