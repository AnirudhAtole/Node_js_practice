const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next) =>{
    res.send('<form action ="/add-product" method ="POST" > <input type = "text" name="title"> <input type = "text" name="title2"><button type = "submit"> Add product </button></form>');
})

router.post('/product',(req,res ,next) =>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;