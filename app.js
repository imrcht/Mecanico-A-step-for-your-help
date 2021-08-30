const express = require('express');
const ejs = require('ejs')

const app = express();


app.set('view engine','ejs')
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})


app.get('/signup',(req,res)=>{
    res.render('signup', {
        type: req.query.type,
    })
})




app.listen(7000, () => {
    console.log(`Listening to port 7000`);
});
