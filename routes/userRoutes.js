const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");
const router = require("./viewRoutes");
//const router=express.Router();
//const router=express.Router();
router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.post("/user", authController.login);
router.route("/allusers").get(authController.getAllUsers);
router.route('/:id').get(authController.getUser);
module.exports = router;
