const express = require("express")
const router = express.Router()
const {create,readAll,singleStore,remove,update} = require("../controllers/storeController")

router.post('/create', create)
router.get('/stores', readAll)
router.get('/product/:slug', singleStore)
router.delete('/store/:slug', remove)
router.put('/store/:slug', update)

module.exports=router
