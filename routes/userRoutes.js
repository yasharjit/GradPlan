const express = require("express");
const authController = require("./../controllers/authController");
const router = require("./viewRoutes");

router.post("/signup", authController.signup);

module.exports = router;
