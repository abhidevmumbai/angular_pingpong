const express = require('express');
const router = express.Router();

const game_controller = require('../controllers/game.controller');

router.get('/test', game_controller.test);

router.get('/:id', game_controller.game_details);

router.post('/create', game_controller.game_create);

router.put('/:id', game_controller.game_update);

router.delete('/:id', game_controller.game_delete);




module.exports = router;