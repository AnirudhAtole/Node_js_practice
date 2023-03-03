const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));

app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','notFound.html'));
})
app.listen(4000);
