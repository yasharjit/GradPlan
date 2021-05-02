const express = require("express");
const port = 8000;
const path = require("path");

const app = express();

const viewRouter = require("./routes/viewRoutes");

app.use("/public", express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));

app.listen(port, (err) => {
    if (err) {
        console.log("Error in running server ", err);
        return;
    }
    console.log("Express server is running on port: ", port);
});

app.use("/", viewRouter);
