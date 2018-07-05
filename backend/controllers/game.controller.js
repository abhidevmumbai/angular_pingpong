const Game = require('../models/game.model');

let controller = {};

controller.test = function(req, res) {
	res.send('Greetings from test controller');
};

controller.game_details = function(req, res, next) {
	Game.findById(req.params.id, function(err, game) {
		if(err) {
			return next(err);
		}
		res.send(game);
	})
};

controller.game_create = function(req, res, next) {
	let game = new Game({
		date: req.body.date,
		player1: req.body.player1,
		player2: req.body.player2,
		player1Score: req.body.player1Score,
		player2Score: req.body.player2Score
	});

	game.save(function(err) {
		if(err) {
			return next(err);
		}
		res.send('Game created successfully');
	})
};

controller.game_update = function(req, res, next) {
	Game.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err) {
		if(err) {
			return next(err);
		}
		res.send('Game updated');
	})
};

controller.game_delete = function(req, res, next) {
	Game.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			return next(err);
		}
		res.send('Game deleted');
	})
};

module.exports = controller;