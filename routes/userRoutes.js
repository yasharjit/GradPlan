const express = require("express");
const authController = require("./../controllers/authController");
const router = require("./viewRoutes");

router.post("/signup", authController.signup);

router.post("/login", authController.login);

//router.get("/userPage", authController.userPage);
router.get("/userPage", (req, res) => {
    return res.render("userPage", {
        title: "User Page",
    });
});


module.exports = router;
