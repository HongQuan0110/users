var db = require('../db.js');
var Product = require('../models/product.model.js');

module.exports.getProduct = async function(req, res){
    // var seesionId = req.signedCookies.sessionId;

    // var page = parseInt(req.query.page) || 1;
    // var perPage = 8;

    // var start = (page - 1) * perPage;
    // var end = page * perPage;

    // //var products = db.get('products').value().slice(start, end);
    // var products = db.get('products').take(end).drop(start).value(); // lodash

    // var cart = db.get('sessions').find({id: seesionId}).value().cart;
    // var number = 0;
    // for(var key in cart){
    //     number += cart[key];
    // }

    // res.render('products/index.pug', {
    //     products: products,
    //     page: page,
    //     number: number
    // });

    // Product.find().then(function(products){
    //     res.render('products/index.pug', {
    //         products: products    
    //     })
    // })

    var products = await Product.find();
    res.render('products/index.pug', {
        products: products    
    })
}