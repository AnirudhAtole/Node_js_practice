const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    const url = req.url;
    const method = req.method;
    const name = fs.readFileSync('name.txt',{encoding:'utf-8'});
    if(req.url === '/'){

        res.write('<html>');
        res.write('<head><title> Enter the message </title> </head>');
        res.write(`<body> <h1>${name}</h1> <form action = "/message" method ="POST" > <input type ="text" name ="message"> <button type = "submit">Send</button> </body>`);
        res.write('</html>');
        return res.end();
    }
    if(url === "/message" && method === "POST"){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message  = parsedBody.split('=')[1];
            fs.writeFileSync('name.txt',message);
        })
        fs.writeFileSync('name.txt','Dummy');
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end();
    }
    
});


server.listen(4000);

