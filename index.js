const dbUrl = 'mongodb://localhost:27017/Sentosa'
const port = 4000


// ======= Setup of Dependencies & Middlewares ======= //
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

// require model files
const Job = require('./models/cityjobs')

// initiate express
const app = express()

mongoose.connect(dbUrl)
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
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setup bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//=====GET PAGES==== //
app.get('/', (req, res) => {
  Job.find()
  // .limit(10)
.then(jobs => {
  res.render('homepage', {
    jobs
  })
})
.catch(err => {
  console.log(err)
})
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/hello', (req, res) =>
  Job.find()
.then(jobs => {
  res.json(jobs)
})
.catch(err => {
  console.log(err)
})
)

app.get('/prospect', (req, res) => {
  res.render('prospect')
})



// ======   ====== //
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
