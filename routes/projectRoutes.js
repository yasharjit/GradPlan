const express = require("express");
const router = express.Router();
const projectController = require("./../controllers/projectController");
router
    .route("/")
    .post(projectController.createProject)
    .get(projectController.getAllProjects)
    .post(projectController.projectpage);
//kjjhkjhdkj
module.exports = router;
