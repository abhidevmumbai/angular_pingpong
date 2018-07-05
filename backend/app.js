const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://root:root123@ds127811.mlab.com:27811/pingpong';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Start app server
let port = 4000;
app.listen(port, () => {
    console.log('Server is up and running on port number: ' + port);
});