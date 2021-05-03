const express = require("express");
const mongoose = require("mongoose");
const port = 8000;
const path = require("path");

const app = express();
const projectRouter = require("./routes/projectRoutes");
const viewRouter = require("./routes/viewRoutes");
app.use(express.json());
app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));

mongoose.connect(
    "mongodb+srv://user:N2O0PVe97QOmijGl@cluster0.kabvs.mongodb.net/test",
    { useNewUrlParser: true, useUnifiedTopology: true },
    error => {
        if (!error) {
            console.log("Connection to db successful");
        } else {
            console.log(error);
        }
    }
);
app.use("/api/v1/projects", projectRouter);
app.listen(port, err => {
    if (err) {
        console.log("Error in running server ", err);
        return;
    }
    console.log("Express server is running on port: ", port);
});

app.use("/", viewRouter);
