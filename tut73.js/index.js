const express = require('express')
const app = express()
const port = 3000 

// -- Express specific stuff
app.use('/public', express.static('public')) // Servicing static files

// -- Pug Specific Stuff
app.set('view engine', 'pug') // Setting the view engine/ render engine to pug
app.set('views','templates') // seting the views folder to templates

app.get('/',(req,res)=>{
    let slug = req.params.slug
    res.status(200).render('index',{
        name:'Aditya',
        age:18
    })
})

app.get('/:slug',(req,res)=>{
    let slug = req.params.slug
    res.status(200).render('index',{
        name:slug,
        age:18
    })
})

app.listen(port, (req,res)=>{
    console.log(`Server is running on http://localhost:${port}`)
})