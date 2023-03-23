//**** Starting the Express
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('hi')  
    res.sendFile(`${__dirname}/index.html`)
})


app.listen(port,'localhost' ,()=>{
console.log(`Running on http://localhost:${port}`)
})
