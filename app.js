// const bodyParser = require('body-parser');
// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(bodyParser.urlencoded());

// app.get('/',(res,req) => {
//     fs.readFile("username.txt",(err,data)=>{
//         if(err){
//             console
//             data = "no chat exist";
//         }
//         res.send(
//             `${data}<form action = "/" method ="POST" onSubmit = "document.getelementById("username").value = localStorage.getItem()
//             <input type = "text" name ="message" id ="message">
//             <br />
//             <button type = "submit">Send</button>
//             </form>
//             `
//         )
//     })
    
// })

// app.post("/",(req,res) =>{
//     console.log(req.body.username)
//     console.log(req.body.message)
//     fs.writeFile("username.txt",`${req.body.username}: ${req.body.message}`,(err) => err? console.log(err):res.redirect("/"));
// })

// app.get('/login',(req,res,next)=>{

//     res.send('<form onSubmit="(localStorage.setItem(`username`, document.getElementById(`username`).value)" action ="/product" method ="POST" > <input type = "text" name="username" placeholder ="username"><button type = "submit"> login </button></form>')
    
// })


// app.listen(5000);