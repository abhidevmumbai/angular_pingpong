const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let port = 4000;
app.listen(port, () => {
	console.log('Server is up and running on port number: ' + port);
});