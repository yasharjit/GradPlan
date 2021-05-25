const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
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
    },
    passwordConfirm: {
        type: String,
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: "Passwords Do Not Match",
        },
    },
});

module.exports = mongoose.model("User", userSchema);
