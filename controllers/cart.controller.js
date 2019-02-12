var db = require('../db.js');

module.exports.addToCart = function(req, res, next){
    var productId = req.params.productId;
    var seesionId = req.signedCookies.sessionId;
    
    if(!seesionId){
        res.redirect('/product');
        return;
    }

    var count = db.get('sessions').find({id: seesionId}).get('cart.' + productId, 0).value();

    db.get('sessions').find({id: seesionId}).set('cart.' + productId, count + 1).write();
    res.redirect('/product');
}