const express = require('express')
const router = express.Router()
const destination = require('./destinationRouter')
const cart = require('./cartRouter')
const profileRoute = require('./profileRoute')
const AuthController = require('../controllers/authController')
const loginCheck = require('../middlewares/loginCheck')

router.use('/destinations',destination)
router.use('/cart',cart)
router.use('/profile', profileRoute)
// router.get('/register', AuthController.getRegister)
// router.post('/register', AuthController.postRegister)
router.get('/login', AuthController.getLogin)
router.post('/login', AuthController.postLogin)
router.get('/logout', AuthController.getLogout)

router.use(loginCheck)
router.use('/profile', profileRoute)



module.exports = router