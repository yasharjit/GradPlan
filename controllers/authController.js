const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");
const AppError = require("./../utils/appError");

const signToken = (id) =>
    jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
    });

exports.signup = async (req, res, next) => {
    const newUser = await User.create({
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
            Date.now() + process.env.JWT_COOKIE_EXPIRESIN * 24 * 60 * 60 * 1000
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
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(
            new AppError("Please provide correct email and password", 400)
        );
    }
    const user = await User.findOne({ email: email });
    if (!user || (await user.verifyPassword(password, user.password))) {
        return next(new AppError("No user found", 400));
    }

    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRESIN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
    try {
        res.cookie("jwt", token, cookieOptions);
        res.status(200).json({
            status: "success",
            token,
            data: {
                user,
            },
        });
    } catch (err) {
        console.log(error);
        return next(new AppError("Email Not Sent", 500));
    }
};
