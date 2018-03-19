const express = require('express'),
      bodyParser = require('body-parser'),
      validator = require('express-validator'),
      ejs = require('ejs'),
      userRoutes = require('./routes/user-routes'),
      session = require('express-session'),
      app = express();


app.set('view engine', 'ejs');
app.use(validator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));

app.use(userRoutes);

app.listen(3000, (req, res)=>{
  console.log('app now listening on port 3000');
});
