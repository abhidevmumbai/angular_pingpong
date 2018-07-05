const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameSchema = new Schema({
	date: {type: Date, required: true},
	player1: {type: Number, required: true},
	player2: {type: Number, required: true},
	player1Score: {type: Number, required: true},
	player2Score: {type: Number, required: true}
});

module.exports = mongoose.model('Game', GameSchema)