const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    projectName: {
        type: String,
    },
    description: {
        type: String,
    },
    field: {
        type: String,
    },
    skillsNeeded: {
        type: String,
    },
    experience: {
        type: String,
    },
});

module.exports = mongoose.model("Project", projectSchema);
