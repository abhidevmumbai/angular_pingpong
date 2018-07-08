var mongoose = require('mongoose');
const User = require('../models/user.model');

let controller = {};

controller.profileRead = function(req, res) {

    // If no user ID exists in the JWT return a 401
    console.log(req.payload);
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        // Otherwise continue
        User
            .findById(req.payload._id)
            .exec(function(err, user) {
                res.status(200).json(user);
            });
    }

};

controller.users_all = function(req, res, next) {
    User.find(function(err, users) {
        if(err) {
            return next(err);
        }
        res.send(users);
    })
};

module.exports = controller;