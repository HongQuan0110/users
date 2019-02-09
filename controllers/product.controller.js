var db = require('../db.js');

module.exports.getProduct = function(req, res){
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;

    var start = (page - 1) * perPage;
    var end = page * perPage;

    //var products = db.get('products').value().slice(start, end);
    var products = db.get('products').take(end).drop(start).value(); // lodash
    res.render('products/index.pug', {
        products: products,
        page: page
    });
}