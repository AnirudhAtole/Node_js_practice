const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next) =>{
    console.log("Hello world");
    next(); // this allow requst to continue next line
})


app.use('/add',(req,res,next) =>{
    res.send('<form action ="/product" method ="POST" > <input type = "text" name="title"> <input type = "text" name="title2"><button type = "submit"> Add product </button></form>');
})

app.post('/product',(req,res ,next) =>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res) =>{
    res.send({key1:24})
})

app.listen(4000);
