require('dotenv').config();

console.log(process.env.SESSION_SECRET);

var express = require('express');
var port  = 3000;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route.js');
var authRouter = require('./routes/auth.route.js');
var productRoute = require('./routes/product.route.js');
var cartRoute = require('./routes/cart.route.js');

var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware.js');

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);

app.use(express.static('public'))

app.get('/', function(req, res){
    //res.send('<h1>Hello</h1>');
    res.render('index', {
        name: 'kun',
    });
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRouter);
app.use('/product',  productRoute);
app.use('/cart', cartRoute);

app.listen(port, function(){
    console.log('Server listening on port', port);
})
