const express = require('express');
const bodyParser = require('body-parser');
let cors = require('cors');
let passport = require('passport');
let cookieParser = require('cookie-parser');

require('./models/user.model');
require('./config/passport');

const games = require('./routes/games.route');

const app = express();

app.use(passport.initialize());

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://root:root123@ds127811.mlab.com:27811/pingpong';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/games', games);

// error handlers
// Catch unauthorised errors
app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({ "message": err.name + ": " + err.message });
    }
});


// Start app server
let port = 4000;
app.listen(port, () => {
    console.log('Server is up and running on port number: ' + port);
});