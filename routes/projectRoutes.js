const express = require("express");
const router = express.Router();
const Project = require("./../models/projectInformation");
router.post("/", async (req, res) => {
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
});

module.exports = router;
