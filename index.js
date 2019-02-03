
var express = require('express');
var port  = 3000;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRoute = require('./routers/user.router.js');

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use(express.static('public'))

app.get('/', function(req, res){
    //res.send('<h1>Hello</h1>');
    res.render('index', {
        name: 'kun',
    });
});

app.use('/users', userRoute);

app.listen(port, function(){
    console.log('Server listening on port', port);
})
