const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");

const signToken = (id) =>
    jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
    });

exports.signup = async (req, res, next) => {
    try {
        const newUser = User.create({
            name: req.body.name,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            university: req.body.university,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
        });
        const token = signToken(newUser._id);
        const cookieOptions = {
            expires: new Date(
                Date.now() +
                    process.env.JWT_COOKIE_EXPIRESIN * 24 * 60 * 60 * 1000
            ),
            // secure: true,
            httpOnly: false,
        };
        if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
        res.cookie("jwt", token, cookieOptions);
        res.status(201).json({
            status: "success",
            token,
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
        });
    }
};

exports.login = async (req, res, next) => {
    try {
    } catch (err) {
        res.status(404).json({
            status: "fail",
        });
    }
};

exports.userPage = async (req, res, next) => {
    try {
    } catch (err) {
        res.status(404).json({
            status: "fail",
        });
    }
};
