const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cityjobSchema = new Schema({
      Job_listing_id : String,
      City_id : String,
      city_name: String,
      title : String,
      sector : String,
      edu_req : String,
      lang_req : String,
      salary_min : String,
      salary_max : String,
      benefits : String,
      hyperlink : String,
      search_provider :String
})

const Cityjob = mongoose.model('Job', cityjobSchema)
module.exports = Cityjob
