const express = require('express')
const router = express.Router()
const cart = require('../controllers/cartController')

router.get('/',cart.cartAll)
router.get('/:id/delete',cart.cartDelete)
router.get('/:id/edit',cart.cartEdit)
router.post('/:id/edit',cart.cartEditPost)

module.exports = router