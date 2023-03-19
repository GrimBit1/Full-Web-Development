const mongoose = require("mongoose"); // Importing the module mongoose

mongoose.connect("mongodb://127.0.0.1:27017/test").then(
  // This will run a promise to connect the Mongod
  () => console.log("Connected!"), // After successfully connection this function runs
  () => {
    console.log("Error Occured"); // After unsuccessfully connection this function runs
  }
);


