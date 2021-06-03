const express = require('express')
const router = express.Router()
const destination = require('../controllers/destinationControl')

router.get('/',destination.destinationAll)
router.get('/:location',destination.destinationLocation)
router.get('/:location/add',(req,res)=>{
    res.send(`masuk ke ${req.params.location}`)
})

module.exports = router