const bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(5)
let hash = bcrypt.hashSync("testpassword", salt)

console.log(hash)