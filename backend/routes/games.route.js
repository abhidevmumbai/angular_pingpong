const express = require('express');
const router = express.Router();
let jwt = require('express-jwt');

let auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

const auth_controller = require('../controllers/auth.controller');
const profile_controller = require('../controllers/profile.controller');
const game_controller = require('../controllers/game.controller');

router.get('/test', game_controller.test);

router.get('/profile', profile_controller.profileRead);
router.post('/register', auth_controller.register);
router.post('/login', auth_controller.login);

router.get('/', game_controller.game_all);

router.get('/:id', game_controller.game_details);

router.post('/create', game_controller.game_create);

router.put('/:id', game_controller.game_update);

router.delete('/:id', game_controller.game_delete);




module.exports = router;