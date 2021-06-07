const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://aaaa:aaaa@cluster0.q3dj2.mongodb.net/tttt?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));



const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://aaaa:aaaa@cluster0.q3dj2.mongodb.net/aaaa?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


  const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    saveDate: {
      type: Date,
      default: Date.now,
    },
  });
