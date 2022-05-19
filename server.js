const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const storeRoute = require('./routes/store')
const authRoute = require('./routes/auth')

const app = express()

//connect database
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useUnifiedTopology:false
})
.then(()=>console.log("เชื่อมต่อเรียบร้อย"))
.catch((err)=>console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use('/api',storeRoute)
app.use('/api',authRoute)
// //ทดสอบ route
// app.get("*",(req,res)=>{
// 	res.json({
// 		data:"message from server"	
// 	})
// })

const port = process.env.PORT
app.listen(port,()=>console.log(`start server in port ${port}`))
