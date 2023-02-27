
const fs = require('fs');
const requestHandler = (req ,res) =>{
    const url = req.url;
    const method = req.method;
    const name = fs.readFileSync('name.txt',{encoding:'utf-8'});
    res.setHeader('Content-Type','text/html');

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
            fs.writeFile('name.txt',message ,err =>{
                res.statusCode = 302;
                res.setHeader('Location','/')
                return res.end();
            });
        })
    }

}

// module.exports = {
//     handler : requestHandler,
//     someText: 'Some hard Coded text'
// }

module.exports.handler = requestHandler;
module.exports.someText = "Some hard coded text";