const express = require('express')
const app = express()
const router = require('./routes')
const port = 3000
const session = require('express-session')

app.set('view engine', 'ejs')

// app.set('trust proxy', 1) // trust first proxy
app.use(express.urlencoded({ extended:false }))
app.use(express.static('public'))

app.use(session({
  secret: 'travel jjn',
  resave: false,
  saveUninitialized: true
  // cookie: { secure: true }
}))


app.use('/', router)

app.listen(port, () => {
    console.log(`Connected at http://localhost:${port}`)
  })