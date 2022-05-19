const jwt = require("jsonwebtoken")

exports.login=(req,res)=>{
  //ข้อมูลของ user, password ที่ login เข้าสู่ระบบ
  const {username,password} = req.body
  if(password === process.env.PASSWORD ){
    //login เข้าสู่ระบบ
    const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'1d'})
    return res.json({token,username})
  }else{
    return( res.status(400)
      .json({
        error:"รหัสผ่านไม่ถูกต้อง!"
      })
    )
  }
  // //ทดสอบให้ response useername, password
  // res.json({
  //   username,password
  // })
}