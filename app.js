const express = require('express')
const app = express()
const router = require('./routes')
const port = 3000

// respond with "hello world" when a GET request is made to the homepage
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }))
app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })