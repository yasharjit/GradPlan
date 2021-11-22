const express = require("express");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const port = 8000;
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
const projectRouter = require("./routes/projectRoutes");
const viewRouter = require("./routes/viewRoutes");
const userRoute = require("./routes/userRoutes");
const methodOverride = require("method-override");

app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());
app.use(xss());
app.use(
    hpp({
        whitelist: ["duration"],
    })
);
app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
app.use(helmet());
app.use(cookieParser());
app.use("/", viewRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/users", userRoute);

dotenv.config({ path: "./config.env" });

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "too many requests from this IP,please try again in an hour",
});

app.use("/api", limiter);

mongoose.connect(
    "mongodb+srv://user:N2O0PVe97QOmijGl@cluster0.kabvs.mongodb.net/test",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (!error) {
            console.log("Connection to db successful");
        } else {
            console.log(error);
        }
    }
);

app.listen(port, (err) => {
    if (err) {
        console.log("Error in running server ", err);
        return;
    }
    console.log("Express server is running on port: ", port);
});
