const express = require("express");
const router = express.Router();
const projectController = require("./../controllers/projectController");
const reviewRouter = require("./../routes/reviewRoutes");
const authController = require("./../controllers/authController");
//router.use("/:tourId/reviews", reviewRouter);

router
    .route("/")
    .post(projectController.createProject)
    .get(projectController.getAllProjects)
    .post(projectController.projectpage);

router
    .route("/:id")
    .get(projectController.getProject)
    .patch(projectController.updateProject);

    router
    .route('/:id/rate')
    //.get(projectController.getRating)
    .patch(
      projectController.updateRating
    )
module.exports = router;
