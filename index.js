
const express = require('express')
const app = express()
const adaro = require('adaro')

// CONFIG
const options = {
  helpers: [
    'dustjs-helpers'
  ],
  cache: false
}
app.engine('dust', adaro.dust(options))
app.set('view engine', 'dust')
app.use(express.static('public'))

// ROUTES
app.use('/', require("./routes/index"))

// START
app.listen(3000, function () {
  console.log('Listening on port: 3000!')
})

