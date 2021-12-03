const catchAsync = require("./../utils/catchAsync");
const Project = require("./../models/projectModel");

exports.autocomplete = catchAsync(async (req, res) => {
    const regex = new RegExp(req.query["term"], "i");
    const query = Project.find(
        { projectName: regex },
        { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    //   const query = await Deal.find(
    //     { $text: { $search: req.query.search } },
    //     { score: { $meta: "textScore" } }
    //   ).sort({ score: { $meta: "textScore" } });

    // Execute query in a callback and return users list
    query.exec(function (err, users) {
        if (!err) {
            // Method to construct the json result set
            res.send(
                users,
                {
                    "Content-Type": "application/json",
                },
                200
            );
        } else {
            res.send(
                JSON.stringify(err),
                {
                    "Content-Type": "application/json",
                },
                404
            );
        }
    });
});
