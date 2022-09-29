const express = require('express')
const app = express()
const port = 5000


// body-parser for getting form/api/postman data
const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

// require router
const router = require('./routes/routes')
app.set('view engine', 'hbs')



app.use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})