var db = require('../db.js');

module.exports.getLogin = function(req, res){
    
    res.render('auth/login.pug');
}

module.exports.postLogin = function(req, res){
    var email = req.body.email;
    var password = req.body.password;

    var user = db.get('users').find({email: email}).value();

    if(!user){
        res.render('auth/login.pug', {
            errors: [
                'email does not exist' 
            ],
            user: req.body
        });
    }

    if(password !== user.password){
        res.render('auth/login.pug', {
            errors: [
                'password does not correct' 
            ],
            user: req.body
        });
    }

    res.cookie('userID', user.id);
    res.redirect('/users');
}