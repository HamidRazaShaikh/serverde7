var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    father: {type: String}
});

exports.UserModel = mongoose.model("Users", UserSchema);