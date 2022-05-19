// barnd, model, price, slug(url)
const mongoose = require("mongoose")

const storeSchema=mongoose.Schema({
  brand:{
    type:String,
    required:true
    //default:"Admin"
  },
  model:{
    type:String,
    required:true,
    // unique:true
  },
  price:{
    type:Number,
    required:true
  },
  slug:{
    type:String,
    lowercase:true
  }
},{timestamps:true})
module.exports = mongoose.model("stores",storeSchema)