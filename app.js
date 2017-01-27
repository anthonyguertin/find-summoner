var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.set('view engine', 'handlebars');
var routes = require('./routes/summoner.js')(app);

app.get('/', function(req,res){
    res.render('index')
});

app.listen(3000, 'localhost');
console.log('localhost is listening on port 3000');