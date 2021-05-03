const express = require("express");
const router = express.Router();
const Project = require("./../models/projectModel");
router
    .route("/")
    .post(async (req, res) => {
        try {
            const newProject = await Project.create(req.body);
            res.status(201).json({
                status: "success",
                data: { newProject }
            });
        } catch (err) {
            res.status(404).json({
                status: "fail"
            });
        }
    })
    .get(async (req, res) => {
        try {
            const allProjects = await Project.find();
            res.status(200).json({
                status: "success",
                length: allProjects.length,
                data: { allProjects }
            });
        } catch (err) {
            res.status(404).json({
                status: "fail"
            });
        }
    });

module.exports = router;
