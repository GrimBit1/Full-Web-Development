const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  myname: String,
  myemail: String,
  mynumber: String,
  myconcern: String,
});

const form = mongoose.model("form", contactSchema);

let message;

const dataSave = async (data) => {
  await mongoose.connect("mongodb://127.0.0.1:27017/contact");
  const newData = new form(data);

  let query = await form.findOne({ myname: data.myname });

  if (query == [] || query == null) {
    await newData.save();

    message = "Data saved successfully";
    console.log(message);
    return message
  } else {
    message = "Data is Already saved";
    console.log(message);
    return message
  }
};

// module.exports = dataSave;
module.exports = dataSave;
