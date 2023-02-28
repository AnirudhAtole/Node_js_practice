const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) =>{
    console.log("Hello world");
    next(); // this allow requst to continue next line
})

app.use((req,res,next) =>{
    console.log("Hello world 2");
    res.send({key1:24})
})

app.listen(4000);
