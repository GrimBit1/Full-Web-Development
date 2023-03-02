const http = require("http");

const fs = require("fs");

const hostname = "localhost"; 

const port = 3000;

const home = fs.readFileSync("home.html", "utf-8");
const contact = fs.readFileSync("contact.html", "utf-8");
const about = fs.readFileSync("about.html", "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;

  res.setHeader("Content-type", "text/html");
  if (req.url == "/") {
    res.end(home);
  } else if (req.url == "/home.css") {
    res.setHeader("Content-type", "text/css");

    res.end(fs.readFileSync("home.css", "utf-8"));
  } else if (req.url == "/about") {
    res.end(about);
  } else if (req.url == "/contact") {
    res.end(contact);
  } else {
    res.statusCode = 404;
    res.end(`<h1>Error not Found</h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log("Hi");
});

console.log("Hi");
