const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const User = require("./models/User");

//passport
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const googleCredencials = require("./config/google.json");

require("dotenv").config({ path: "variables.env" });

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS
app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

//Port listen
app.listen(3000, (err) => {
  if (err) {
    return console.log("err");
  } else {
    mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser: true }, err => {
      if(err) {
        console.log("erㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ");
      }else{
        console.log('connected to data gㅎㅎ');
      }
    })
    console.log("sucesssssss");
  }
});

// const passport = require("./lib/passport");
const placeRouter = require("./routers/nearPlace");
const specialWayRouter = require("./routers/specialWay");
const whereverPlacesRouter = require("./routers/whereverPlaces");
const bottomMenuRouter = require("./routers/bottomMenu");
const locationRouter = require("./routers/location");
const { Session } = require("express-session");
const { urlencoded } = require("body-parser");

// app.use("/auth/google", passport);
app.use("/place", placeRouter);
app.use("/special_way", specialWayRouter);
app.use("/whereverPlaces", whereverPlacesRouter);
app.use("/bottomMenus", bottomMenuRouter);
app.use("/location", locationRouter);

// Use session with Mongo
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://aaaa:aaaa@cluster0.q3dj2.mongodb.net/airbb?retryWrites=true&w=majority",
      collection: session,
    }),
  })
);

//3000 prot basic
app.post("/", (req, res) => {
  if (!req.session.number) {
    req.session.number = 1;
  } else {
    req.session.number += 1;
  }
  res.send("Hello " + req.session.number);
});

//user.js
app.post("/user", (req, res) => {
  const newUser = new User();
  newUser.id = "vvvv";
  newUser.pwd = "vvvv";
  newUser
    .save()
    .then((user) => {
      if (req.body.id == user.id && req.body.pwd == user.pwd) {
        req.session.isLogined = true;
        res.json({
          message: "로그인 되었습니다.",
        });
      } else {
        res.json({
          mesaage: "등록되지 않은 사용자 입니다.",
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "등록되지 않은 사용자 입니다 err.",
      });
    });
});

// passport 
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
      {
        clientID: googleCredencials.web.client_id,
        clientSecret: googleCredencials.web.client_secret,
        callbackURL: googleCredencials.web.redirect_uris[0],
      },
      function (accessToken, refreshToken, profile, done) {
          console.log("GoogleStratege",accessToken, refreshToken, profile)
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return done(err, user);
      //   });
      }
    )
);
app.get("/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);
app.get("/auth/google/callback", 
passport.authenticate("google", { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });


