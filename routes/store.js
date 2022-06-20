const express = require("express")
const router = express.Router()
const {create,readAll,singleStore,remove,update} = require("../controllers/storeController")
const {requireLogin} = require("../controllers/authController")

//การดรียกใช้งาน expressJWT
router.post('/create', requireLogin, create)
router.get('/stores', readAll)
router.get('/product/:slug', singleStore)
router.delete('/store/:slug', requireLogin, remove)
router.put('/store/:slug', requireLogin, update)

module.exports=router
