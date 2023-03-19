// This mongoose version is 7.0.2 , the cwh video code is depreciated for this

const mongoose = require("mongoose");


const mongoose_connection = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/test").then(
    // this will connect to DataBase and if some thing gets error ,
    (value) => {
      console.log("Connected Successfully");

    },
    (err) => {
      console.log(`Got Error ${err}`); // this will catch it

    }
  );


  const nameSchema = new mongoose.Schema({
    // Schema for database
    name: String,
    age: Number,
  });


  const Name = mongoose.model("names", nameSchema); // This makes a model / template for the documents according to Schema


  const Harry = new Name({ name: "Harry", age: 18 }); // A new document for DB


  // await Harry.save() // this save the document in the database

  let query = await Name.find({ name: "Harry" }); // we are waiting for query and it will store in query variable


//   console.log(query);

};


mongoose_connection();

