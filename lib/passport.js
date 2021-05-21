const passport = require('passport');
const express = require('express')
const app = express()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const googleCredencials = require('../config/google.json');


passport.use(new GoogleStrategy({
    clientID: googleCredencials.web.client_id,
    clientSecret: googleCredencials.web.client_secret,
    callbackURL: googleCredencials.web.redirect_uris[0]
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));

app.get('/',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


return passport