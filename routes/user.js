var express = require('express');
var user = express.Router();
var schema = require('./schema');
var UserModel = schema.UserModel;


user.get('/get', function (req, res) {
    UserModel.find().exec(function (error, data) {
        res.send({error: error, data: data})
    });
});

user.post('/add', function (req, res) {
    var user = new UserModel(req.body);
    user.save(function (error, data) {
        res.send({error: error, data: data})
    })
});

module.exports = user;