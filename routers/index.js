const express = require('express')
const router = express.Router()
const destination = require('./destinationRouter')
const cart = require('./cartRouter')

router.use('/destinations',destination)
router.use('/cart',cart)

module.exports = router