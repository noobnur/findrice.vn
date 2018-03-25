const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cityJobs = new Schema({
  joblistingid
  cityid fk
  jobtitle
  Sector
  edu_req
  lang_req
  salary_min
  salary_max
  benefits
  hyperlink
  searchprovider

})

const city = new Schema({
  cityid pk
  city name
})
