const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser');      
const session = require('express-session');
const MongoStore = require('connect-mongo');

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//CORS
app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
});

// const passport = require('./lib/passport');
const placeRouter = require("./routers/nearPlace");
const specialWayRouter = require("./routers/specialWay");
const whereverPlacesRouter = require("./routers/whereverPlaces");
const bottomMenuRouter = require("./routers/bottomMenu");
const locationRouter = require("./routers/location");
const { Session } = require('express-session');

// app.use('/auth/google',passport);
app.use('/place', placeRouter);
app.use('/special_way',specialWayRouter);
app.use('/whereverPlaces',whereverPlacesRouter);
app.use('/bottomMenus', bottomMenuRouter);
app.use('/location', locationRouter);

// Use session with Mongo
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://aaaa:aaaa@cluster0.q3dj2.mongodb.net/airbb?retryWrites=true&w=majority",
    collection: session,
})
}));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.post('/', (req, res) => {
  // res.send(req.body);
  if(!req.session.number) {
    req.session.number = 1;
  } else {
    req.session.number += 1;
  }
  res.send('Hello ' + req.session.number);
})

app.get('/',(req, res) => {
  console.log(req.session)
})
