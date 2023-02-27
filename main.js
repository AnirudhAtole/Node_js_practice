const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("My name is Anirudh");
})

server.listen(4000);
