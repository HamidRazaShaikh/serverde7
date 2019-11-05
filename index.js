var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var user = require('./routes/user');
var app = express();




app.use(bodyParser.json({limit: '5000kb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('./user', user )


app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});