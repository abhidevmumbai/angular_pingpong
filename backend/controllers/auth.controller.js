let passport = require('passport');
let mongoose = require('mongoose');
const User = require('../models/user.model');

let controller = {};

controller.register = function(req, res) {
    console.log("Registering user: " + req.body.email);
    let user = new User();

    user.email = req.body.email;
    user.name = req.body.name;

    user.setPassword(req.body.password);

    user.save(function(err) {
        let token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });
};


controller.login = function(req, res) {

    passport.authenticate('local', function(err, user, info) {
    	console.log(user);
        let token;

        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);

};

module.exports = controller;