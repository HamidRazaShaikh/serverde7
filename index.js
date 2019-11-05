var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var data = [];


app.use(bodyParser.json({limit: '5000kb'}));
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.post('/add', function (req, res) {
    data.push(req.body);
    console.log(req.body);
    res.send({status: 200, data: data})


});


app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});