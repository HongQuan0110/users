var Product = require('../../models/product.model.js');

module.exports.getProduct = async function(req, res){
    var products = await Product.find();
    res.json(products);
}