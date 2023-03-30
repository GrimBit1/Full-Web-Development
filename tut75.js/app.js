const express = require("express");

const app = express();

const https = require('http2')

const pug = require("pug");

const port = 80;

//Pug Specific Stuff

app.use("/", express.static("/public"));

app.use(express.urlencoded({extended:true}))

//Pug Specific Stuff
app.set("views", "templates");

app.set("view engine", "pug");


app.get("/", (req, res) => {
  // res.status(404).send('Hi')
  res.render("index", {
    message: "Hi, this is pug",
  });

});



app.listen(port, () => {
  console.log(`Server is running on http://localhost`);

});

