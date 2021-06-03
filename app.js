const session = require('express-session')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketio(server)
const router = require('./routers/index')
const PORT = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('views'))
app.use(session({
    secret: 'travel jjn',
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
}))

app.get('/chat',(req,res)=>{
    res.render('chat')
})

app.use('/',router)


io.on('connection',socket=>{
    console.log('connect io.on');
    socket.emit('message','welcome to jalan - jalan ngab')
    socket.broadcast.emit('message','A user has join the chat')
    socket.on('disconnect',()=>{
        io.emit('message','A user has left the chat')
    })
    socket.on('chatMessage',(msg)=>{
        io.emit('message',msg)
    })
})

server.listen(PORT,()=>{
    console.log(`this server run on port :${PORT}`);
})