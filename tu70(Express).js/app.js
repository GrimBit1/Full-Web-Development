console.log("Hi");
const port = 80;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("We got a request");
  res.status(200).send("Hi"); // to also send the status code
//   res.send("Hi");
});

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
