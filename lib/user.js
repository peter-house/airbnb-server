/* mongoose.js */
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log("erㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ");
  } else {
    console.log("connected to data gㅎㅎ");
  }
});

const UserSchema = mongoose.Schema({
  ID: String,
  PWD: String,
});

const User = mongoose.model("user", UserSchema);

const person = new User();
person.id = "cccccc";
person.pwd = "ccccc";
person.save();

silence.save();
