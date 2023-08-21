const express = require('express');
const router =  express.Router();
const {Insert,View,Singleview,Delete,Update, Register} = require('../controller/student')
router.post('/insert',Insert)
router.get('/view/:id',View)
router.get('/singleview',Singleview)
router.delete('/delete/:id',Delete)
router.put('/update/:id',Update)
router.post('/register',Register)
module.exports=router;