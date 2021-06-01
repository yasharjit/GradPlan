const express = require("express");
const router = express.Router();
const Project = require("../models/projectModel");

router.get("/", (req, res) => {
    return res.render("index", {
        title: "Home",
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

router.get("/ProjectPage", (req, res) => {
    return res.render("projectCatalogPage", {
        title: "Project details",
    });
});

module.exports = router;
