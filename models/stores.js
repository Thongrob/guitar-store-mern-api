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
    required:true
    // unique:true
  },
  price:{
    type:Number,
    required:true
  },
  image:{
    type:String,
    required:false
  },
  description:{
    type:String,
    required:false
  },
  slug:{
    type:String,
    lowercase:true
  }
},{timestamps:true})
module.exports = mongoose.model("stores",storeSchema)