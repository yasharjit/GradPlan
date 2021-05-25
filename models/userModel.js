const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
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
