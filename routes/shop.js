const express = require('express');
const path = require('path')
const router = express.Router();


router.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname  ,'..','views','shop.html'));
})

router.get('/contactus',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contactus.html'))
    res.redirect('/success')
})

router.get('/success',(res,req) =>{
    res.send('<h1>Form sucessfully filled</h1>')
})

module.exports = router;