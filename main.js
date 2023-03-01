const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:true}));

app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1> Page not found </h1>')
})

app.listen(4000);
