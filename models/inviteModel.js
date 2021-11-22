const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");
const random = require("../utils/utils");

const inviteSchema = new mongoose.Schema({
    // the user who sent this request
    from_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    // the user who accepted this request
    to_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Invite = mongoose.model("Invite", inviteSchema);
module.exports = Invite;
