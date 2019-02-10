var db = require('../db.js');
var shortid = require('shortid');

module.exports.index = function(req, res){
    //res.send('<h1>Hello user</h1>');

    res.render('users/index.pug', {
        //users: users 
        users: db.get('users').value()
    });
};

module.exports.search = function(req, res){
    console.log(req.query);
    var q = req.query.q;
    var matchedUsers = db.get('users').value().filter(function(item){
        return item.name.toLowerCase().indexOf(q.toLowerCase()) >= 0;
    })
    res.render('users/index',{
        users: matchedUsers,
        val: q
    })
};

module.exports.getCreate = function(req, res){
    console.log(req.cookies);
    res.render('users/create.pug')
};

module.exports.postCreate = function(req, res){
    //users.push({name: req.body.name});
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('/');

    console.log(req.body);
    console.log(res.locals);

    db.get('users').push((req.body)).write();
    res.redirect('/users');
};

module.exports.getID = function(req, res){
    var iden = req.params.idx;
    var user = db.get('users').find({id: iden}).value();
    console.log(user);
    res.render('users/view', {
        user: user
    })
};