const Game = require('../models/game.model');

let controller = {};

controller.test = function(req, res) {
	res.send('Greetings from test controller');
};

module.exports = controller;