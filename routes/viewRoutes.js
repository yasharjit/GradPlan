const express = require("express");
const router = express.Router();

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

router.get("/projectCatalog", (req, res) => {
    return res.render("projectCatalog", {
        title: "Project Catalog",
    });
});

router.get("/createProject", (req, res) => {
    return res.render("createProject", {
        title: "Add Project",
    });
});
module.exports = router;
