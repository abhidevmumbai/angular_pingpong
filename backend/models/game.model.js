const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameSchema = new Schema({
	date: {type: Date, required: true},
	player1: {type: String, required: true},
	player1Name: {type: String, required: true},
	player2: {type: String, required: true},
	player2Name: {type: String, required: true},
	player1Score: {type: Number, required: true},
	player2Score: {type: Number, required: true}
});

module.exports = mongoose.model('Game', GameSchema)