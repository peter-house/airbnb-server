// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const userSchema = new Schema({
//     id: String,
//     pwd: String,
//   },{timestamps: true});

//   module.exports = mongoose.model('User', userSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log("erㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ");
  } else {
    console.log("connected to data gㅎㅎ");
  }
});

const userSchema = new Schema(
  {
    id: String,
    pwd: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
