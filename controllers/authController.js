const { User } = require('../models')

class AuthController{
    static getLogin(req, res){
        // console.log(req.session.loginUser)
        res.render('login')
    }
    static postLogin(req, res){
        const { username, password } = req.body
        // const loginUser = { username, password }
        // req.session.loginStatus = true
        User.findAll({
            where: {
                username,
                password
            }
        })

        req.session.loginUser = { username, password }
        // console.log(req.session.loginStatus)
        res.redirect('/')
    }
    static getLogout(req, res){
        req.session.loginUser = false
        res.redirect('/')
    }
}

module.exports = AuthController