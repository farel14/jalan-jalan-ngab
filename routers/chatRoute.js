module.exports = function(io){
    const express = require('express')
    const router = express.Router()
    const chat = require('../controllers/chatController')


    router.get('/',(req,res)=>{
        let io = req.app.get('socketio')
        
        io.on('connection',socket=>{
            console.log('connect io.on');
            socket.emit('message','welcome to jalan - jalan ngab')
            socket.broadcast.emit('message','A user has join the chat')
            socket.on('disconnect',()=>{
                io.emit('message','A user has left the chat')
            })
            socket.on('chatMessage',(msg)=>{
                io.emit('message',msg)
                console.log(msg);
            })
    })
    res.render('chat')
    })

    return router
} 
    