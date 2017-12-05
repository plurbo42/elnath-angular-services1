var express = require('express');
var bodyParser = require('body-parser');
var company = require('./routes/company');
var car = require('./routes/car');

var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/company', company);
app.use('/car', car);

app.listen(port, function () {
    console.log('up and running on port', port);
});