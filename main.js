const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');

    if(req.url === '/home'){
        res.write('<html><head>My first page</head> <body> <h1> Welcome to home </h1> </body>  </html>');
        res.end();
    }
    else if(req.url === '/about'){
        res.write('<html><head>My first page</head> <body> <h1> Welcome to about us page </h1> </body>  </html>');
        res.end();
    }
    else if(req.url === '/node'){
        res.write('<html><head>My first page</head> <body> <h1> Welcome to my Node Js project </h1> </body>  </html>');
        res.end();
    }
    
});


server.listen(4000);

