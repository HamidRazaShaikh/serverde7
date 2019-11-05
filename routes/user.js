var express = require ('express');
var user = express.Router();

var data = [];


user.get ('/get',function (req,res){
    res.send({data : data});
    console.log(data);
});

user.post('/add', function (req, res) {
    data.push(req.body);
    console.log(req.body);
    res.send({status: 200, data: data})
});

module.exports = user;