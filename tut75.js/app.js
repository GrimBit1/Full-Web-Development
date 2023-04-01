const express = require("express");

const app = express();

const https = require('http2')

const pug = require("pug");

const port = 80;

//Pug Specific Stuff

app.use("/public", express.static(`${__dirname}/public`));

app.use(express.urlencoded({extended:true}))

//Pug Specific Stuff
app.set("views", "templates");

app.set("view engine", "pug");



app.get("/", (req, res) => {
  // res.status(404).send('Hi')
  res.render("home", {
    message: "Hi, this is pug",
    title:'Home'
  });

});
app.get("/contact", (req, res) => {
  // res.status(404).send('Hi')
  res.render("contact", {
    message: "Hi, this is pug",
    title:'Home'
  });

});



app.listen(port, () => {
  console.log(`Server is running on http://localhost`);

});

