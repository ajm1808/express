const express=require('express');
const hbs=require('express-handlebars');
const path=require('path');
const getPlaceholder=require('./lib/getplaceholder');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs',hbs({
    defaultLayout:'main',
    extname:'.hbs',
    layoutsDir:path.join(__dirname,'views','layouts'),partialsDir:path.join(__dirname,'views','partials')
}));

app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',async(req,res)=>{
    let data=await getPlaceholder();
    res.render('index', {data, listExists: true});
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('*',(req,res)=>{
    res.render('404');
});

app.listen(3000,()=>{
    console.log("Listening to port 3000")
});