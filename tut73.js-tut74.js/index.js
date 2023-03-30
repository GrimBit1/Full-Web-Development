const express = require("express");

const app = express();

const fs = require("fs");

let data = fs
  .readFileSync(`${__dirname}/data/data.json`, "utf-8")

  .slice(0, fs.readFileSync(`${__dirname}/data/data.json`, "utf-8").length - 1);

// console.log(data);

// console.log(Array.from(data));

const port = 3000;


// -- Express specific stuff
app.use("/public", express.static("public")); // Servicing static files


app.use(express.urlencoded({ extended: true }));


// -- Pug Specific Stuff
app.set("view engine", "pug"); // Setting the view engine/ render engine to pug


app.set("views", "templates"); // seting the views folder to templates



app.get("/", (req, res) => {


  let slug = req.params.slug;

  res.status(200).render("index", {

    name: "Aditya",

    age: 18,

  });

});

app.post("/", (req, res) => {


  let slug = req.params.slug;

  res.status(200).render("index", {

    name: "Aditya",

    age: 18,

  });

  console.log(req.body);

  data += `,${JSON.stringify(req.body)}`;

  fs.writeFileSync(`${__dirname}/data/data.json`, `${data}]`);



});


app.get("/:slug", (req, res) => {


  let slug = req.params.slug;

  res.status(200).render("index", {

    name: slug,

    age: 18,

  });

});


app.listen(port, (req, res) => {


  console.log(`Server is running on http://localhost:${port}`);

});

