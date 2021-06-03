const express = require('express')
const router = express.Router()
const destination = require('../controllers/destinationControl')

router.get('/',destination.destinationAll)
router.get('/buy/:id/:location',destination.buyForm)
router.post('/buy',destination.buy)
router.get('/:location',destination.destinationLocation)

module.exports = router