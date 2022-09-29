const passport = require('passport');
const User = require('../models/user');
const localStrategy = require('passport-local').Strategy

passport.use(new localStrategy({
    usernameField: 'email',
    passReqToCallback: true
}, function (req, username, password, done){

    User.findOne({ email: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (user.password !== password) { return done(null, false); }
        return done(null, user);
      });

}))


passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});


module.exports = passport
