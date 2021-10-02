const crypto = require("crypto");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");
const random = require("../utils/utils");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name"],
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Enter email"],
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    //photo: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    phoneNo: {
        type: Number,
    },
    university: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Enter Passeord"],
        minlength: 8,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, "Confirm Password"],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: "Passwords Do Not Match",
        },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false,
    },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;

    next();
});

userSchema.pre("save", async function (next) {
    // this.password = await bcrypt.hash(this.password, 12);
    this.verification_token = random();
    this.verification_token_time = Date.now() + 10 * 60 * 1000;
    this.timeStamp = Date.now();
    console.log(this._id);
    this.id = this._id;
    next();
});

userSchema.pre("save", function (next) {
    if (!this.isModified("password") || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next();
});

userSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } });
    next();
});

userSchema.methods.verifyPassword = async function (
    LoginPassword,
    signUpPassword
) {
    return await bcrypt.compare(LoginPassword, signUpPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );

        return JWTTimestamp < changedTimestamp;
    }

    // False means NOT changed
    return false;
};

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString("hex");

    this.passwordResetToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
};

module.exports = mongoose.model("User", userSchema);
