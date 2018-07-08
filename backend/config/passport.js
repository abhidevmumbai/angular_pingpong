let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let mongoose = require('mongoose');
let User = mongoose.model('User');

passport.use(new LocalStrategy({
        emailField: 'email',    // define the parameter in req.body that passport can use as email and password
    	passwordField: 'password'
    },
    function(email, password, done) {
        User.findOne({ email: email }, function(err, user) {
            if (err) { return done(err); }
            // Return if user not found in database
            if (!user) {
                return done(null, false, {
                    message: 'User not found'
                });
            }
            // Return if password is wrong
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Password is wrong'
                });
            }
            // If credentials are correct, return the user object
            return done(null, user);
        });
    }
));