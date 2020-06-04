const express=require('express');
const hbs=require('express-handlebars');
const path =require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs',hbs({
    extname:'.hbs',
    defaultLayout:'main',
    layoutsDir:path.join(__dirname,'views','layouts'),
    partialsDir:path.join(__dirname,'views','partials')
}));

app.set('view-engine','.hbs');

app.get('/',(req,res)=>{
    res.render('index');
});