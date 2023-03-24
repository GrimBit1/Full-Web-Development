const express = require('express')
const app = express()
const pug = require('pug')
let port = 3000

// Set the view engine to pug
app.set('view engine','pug') 
// Set the template directory to 
app.set('views','templates')

app.get('/',(req,res)=>{
    res.render('index',{
        title : 'Aditya',
        name:'Harry '
    })
})


app.listen(port,()=>{
    console.log(`Started on http://localhost:3000`)
})