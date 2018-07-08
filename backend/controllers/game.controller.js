const Game = require('../models/game.model');

let controller = {};

controller.test = function(req, res) {
	res.send('Greetings from test controller');
};

controller.game_all = function(req, res, next) {
	Game.find(function(err, game) {
		if(err) {
			return next(err);
		}
		res.send(game);
	})
};

controller.game_by_user = function(req, res, next) {
	let userId = req.params.userId;
	console.log('user id', userId);
	Game.find({player1: userId}, function(err, game) {
		if(err) {
			return next(err);
		}
		res.send(game);
	})
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
	console.log(game);

	game.save(function(err) {
		if(err) {
			return next(err);
		}
		res.send({msg:'Game created successfully'});
	})
};

controller.game_update = function(req, res, next) {
	Game.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err) {
		if(err) {
			return next(err);
		}
		res.send({msg:'Game updated'});
	})
};

controller.game_delete = function(req, res, next) {
	Game.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			return next(err);
		}
		res.send({msg:'Game deleted'});
	})
};

module.exports = controller;