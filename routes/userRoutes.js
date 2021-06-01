const express = require("express");
const authController = require("./../controllers/authController");
const router = require("./viewRoutes");

router.post("/signup", authController.signup);

router.post("/login", authController.login);

module.exports = router;
