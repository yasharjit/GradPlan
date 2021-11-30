const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const Project = require("../models/projectModel");
const User = require("../models/userModel");

router.get("/", (req, res) => {
    return res.render("index", {
        title: "GradPlan",
    });
});

router.get("/login", (req, res) => {
    return res.render("login", {
        title: "Login",
    });
});

router.get("/signup", (req, res) => {
    return res.render("signup", {
        title: "Signup",
    });
});

router.get("/about", (req, res) => {
    return res.render("about", {
        title: "About",
    });
});

router.get("/projectCatalog", async (req, res) => {
    const allProjects = await Project.find();
    return res.render("projectCatalog", {
        title: "Project Catalog",
        projects: allProjects,
    });
});

router.get("/createProject", (req, res) => {
    return res.render("createProject", {
        title: "Add Project",
    });
});

router.get("/projectPage", (req, res) => {
    return res.render("projectPage", {
        title: "Project details",
    });
});

router.get("/rating", (req, res) => {
    return res.render("rating", {
        title: "Rating",
    });
});

router.get("/settings", (req, res) => {
    return res.render("settings", {
        title: "Account Settings",
    });
});

router.get("/contact", (req, res) => {
    return res.render("contact", {
        title: "Contact Us",
    });
});

router.get("/userPage", (req, res) => {
    return res.render("userPage", {
        title: "User Page",
    });
});

router.get("/roadmapBuilder", (req, res) => {
    return res.render("roadmapBuilder", {
        title: "Roadmap Builder",
    });
});

router.get(
    "/project/:id/postedBy/:userid",
    catchAsync(async function (req, res) {
        const poster = await User.findById(req.params.userid);
        const project = await Deal.findById(req.params.id);
        const user = await User.findById(req.logged);
        res.render("projectCatalogPage", { project, user, poster });
    })
);

module.exports = router;
