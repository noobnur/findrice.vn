// ======= Setup of Dependencies & Middlewares ======= //
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')



const dbUrl = 'mongodb://localhost/Sentosa'
const port = 4000

const app = express()

mongoose.connect(dbUrl, {
  useMongoClient: true
})
.then(
  () => { console.log('db is connected') },
  (err) => { console.log(err) }
)

// ======= Use Middlewares ====== //
app.use(express.static(path.join(__dirname, 'public')))
app.use(function (req, res, next) {
  console.log('Method: ' + req.method + ' Path: ' + req.url)
  next()
})


// ======= Setup of main GET reqs ======= //
/* Using handlebars template engine */
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('homepage')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/prospect', (req, res) => {
  res.render('prospect')
})



// ======   ====== //
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
