var express = require ('express');
var user = express.Router();
var schema = require('./schema');
var UserModel = schema.UserModel;




user.get ('/get',function (req,res){
    res.send({data : UserModel});
    console.log(data);
});

user.post('/add', function (req, res) {
    UserModel.push(req.body);
    console.log(req.body);
    res.send({status: 200, data: UserModel})
});

module.exports = user;