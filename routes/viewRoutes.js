const express = require("express");
const viewController = require("../controllers/viewController");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const Project = require("../models/projectModel");
const User = require("../models/userModel");

router.get("/", viewController.indexPage);

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

router.get("/projectPageDetails", (req, res) => {
    return res.render("projectPageDetails", {
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

router.get("/roadmapBuilder1", (req, res) => {
    return res.render("roadmapBuilder1", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder2", (req, res) => {
    return res.render("roadmapBuilder2", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder3", (req, res) => {
    return res.render("roadmapBuilder3", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder4", (req, res) => {
    return res.render("roadmapBuilder4", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder5", (req, res) => {
    return res.render("roadmapBuilder5", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder6", (req, res) => {
    return res.render("roadmapBuilder6", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder7", (req, res) => {
    return res.render("roadmapBuilder7", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder8", (req, res) => {
    return res.render("roadmapBuilder8", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder9", (req, res) => {
    return res.render("roadmapBuilder9", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder10", (req, res) => {
    return res.render("roadmapBuilder10", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder11", (req, res) => {
    return res.render("roadmapBuilder11", {
        title: "Roadmap Builder",
    });
});

router.get("/roadmapBuilder12", (req, res) => {
    return res.render("roadmapBuilder12", {
        title: "Roadmap Builder",
    });
});

router.get("/createRoadmap", (req, res) => {
    return res.render("createRoadmap", {
        title: "Create Roadmap Form",
    });
});
router.get("/inviteForm", (req, res) => {
    return res.render("inviteForm", {
        title: "Invite Form",
    });
});

router.get("/inviteList", (req, res) => {
    return res.render("inviteList", {
        title: "Invite List",
    });
});

router.get(
    "/project/:id/postedBy/:userid",
    catchAsync(async function (req, res) {
        const poster = await User.findById(req.params.userid);
        const project = await Project.findById(req.params.id);
        const user = await User.findById(req.logged);
        res.render("projectPageDetails", { project, user, poster });
    })
);

router.get(
    "/search",
    catchAsync(async (req, res) => {
        let q = req.query.projectName;
        Project.find(
            { projectName: { $regex: q, $options: "$i" } },
            function (err, data) {
                res.json(data);
            }
        ).limit(10);
    })
);

router.get("/teamFormationDetails", (req, res) => {
    return res.render("teamFormationDetails", {
        title: "Team Members Details",
    });
});

module.exports = router;
