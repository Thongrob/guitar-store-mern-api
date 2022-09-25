//ติดต่อกับฐานข้อมูล
const slugify = require("slugify")
const Stores = require("../models/stores")
const { v4: uuidv4 } = require('uuid')

//บันทึกข้อมูล
exports.create=(req,res)=>{
  const {brand, model, price, image, description} = req.body
  const sumSlug = brand + model
  let slug = slugify(sumSlug)
  
  //ถ้า slug เป็นภาษาไทย ให้ generate id  ออกมา
  if(!slug)slug = uuidv4()
 
  //Validate
 switch(true){
   case !brand:
     return res.status(400).json({error:"กรุณาป้อนชื่อ brand"})
     break
    case !model:
     return res.status(400).json({error:"กรุณาป้อนชื่อรุ่น"})
     break
 }
 //บันทึกข้อมูล
 Stores.create({brand, model, price, image,description , slug},(err,store)=>{
  if(err){
    res.status(400).json({error:"รุ่นซ้ำกัน"})
  }
  res.json(store)
 })
}

//ดึงข้อมูลทั้งหมด 
exports.readAll=(req,res)=>{
  Stores.find({}).exec((err,stores)=>{
    res.json(stores)
  })

  // //ทดสอบ API
// res.json({
//  data:req.body
// })

  //ทดสอบการส่งข้อมูล
  // res.json({
  //   data:"Hello"
  // })
}

//ดึงข้อมูลสินค้าทีละตัว
exports.singleStore=(req,res)=>{
  const {slug} = req.params
  Stores.find({slug}).exec((err,store)=>{
    res.json(store)
  })
}

//ลบข้อมูลสินค้า
exports.remove=(req,res)=>{
  const {slug} = req.params
  Stores.findOneAndRemove({slug}).exec((err,store)=>{
    if(err) console.log(err)
    res.json({
      message:"ลบข้อมูลสำเร็จ"
    })
  })
}

//การแก้ไขข้อมูล
exports.update=(req,res)=>{
  const {slug} = req.params
  //ส่งข้อมูล brand, model, price
  const {brand, model, price, image, description} = req.body
  Stores.findOneAndUpdate({slug},{brand,model,price, image, description},{new:true}).exec((err,store)=>{
    if(err) console.log(err)
    res.json(store)
  })
}

