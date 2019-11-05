var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var user = require('./routes/user');
var mongoose = require("mongoose");
var app = express();

var uri = "mongodb+srv://asdf:asdf@cluster0-v4e3c.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri , {useNewUrlParser: true});


app.use(bodyParser.json({limit: '5000kb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/user', user );


app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});