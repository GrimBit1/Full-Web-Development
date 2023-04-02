const express = require("express");

const app = express();

const pug = require("pug");

const port = 80;

const dataSave  = require('./mongo')

let data;





//Express Specific Stuff

app.use("/public", express.static(`${__dirname}/public`));

app.use(express.urlencoded({ extended: true }));

//Pug Specific Stuff
app.set("views", "templates");

app.set("view engine", "pug");

app.get("/", (req, res) => {
  // res.status(404).send('Hi')
  res.render("home", {
    message: "Hi, this is pug",
    title: "Home",
  });
});

app.get("/contact", (req, res) => {
  // res.status(404).send('Hi')
  res.render("contact", {
    message: "Hi, this is pug",
    title: "Home",
  });
});
app.post("/contact", async (req, res) => {
  console.log(req.body);
  data = req.body;
  let temp = await dataSave(data)
  console.log(temp);
  res.render("contact", {
    alertMessage: temp,
    title: "Home",

  });

  // res.status(404).send('Hi')

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost`);
});

