const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,'Please tell us your name']
    },
    email: {
        type: String,
        unique: true,
        lowercase:true,
        required:[true,'Enter email'],
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    phoneNo: {
        type: Number,
    },
    university: {
        type: String,
    },
    password: {
        type: String,
        required:[true,'Enter Passeord'],
        minlength:8
    },
    passwordConfirm: {
        type: String,
        required:[true,'Confirm Password'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: "Passwords Do Not Match",
        },
    },
});

module.exports = mongoose.model("User", userSchema);
