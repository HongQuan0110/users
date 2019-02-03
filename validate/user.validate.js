module.exports.postCreate = function(req, res ,next){
    var errors = [];

    if(!req.body.name){
        errors.push('Name is required');
    }
    if(!req.body.phone){
        errors.push('Phone is required');
    }

    if(errors.length){
        res.render('users/create.pug', {
            errors: errors,
            user: req.body
        })
        return;
    }

    res.locals.validate = true;
    next();
}