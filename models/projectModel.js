const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    projectName: {
        type: String,
    },
    createdAt: {
        type: Number,
        default: Date.now(),
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
    ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, "Rating must be above 1.0"],
        max: [5, "Rating must be below 5.0"],
        set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        //required: true,
    },
});

projectSchema.index({ ratingsAverage: -1 });

// projectSchema.pre(/^find/, function(next) {
//     this.populate({
//       path: 'guides',
//       select: '-__v -passwordChangedAt'
//     });

//     next();
// });

// projectSchema.statics.calcAverageRatings = async function(projectId) {
//   console.log(projectId)
//     const stats = await this.aggregate([
//       {
//         $match: { project: projectId }
//       },
//       {
//         $group: {
//           _id: '$project',
//           nRating: { $sum: 1 },
//           avgRating: { $avg: '$rating' }
//         }
//       }
//     ]);
//     // console.log(stats);

//     if (stats.length > 0) {
//       await Project.findByIdAndUpdate(projectId, {
//         ratingsQuantity: stats[0].nRating,
//         ratingsAverage: stats[0].avgRating
//       });
//     } else {
//       await Project.findByIdAndUpdate(projectId, {
//         ratingsQuantity: 0,
//         ratingsAverage: 4.5
//       });
//     }
// };

// projectSchema.post('save', function() {
//   // this points to current review
//   this.constructor.calcAverageRatings(this.project);
// });

// // findByIdAndUpdate
// // findByIdAndDelete
// projectSchema.pre(/^findOneAnd/, async function(next) {
//   this.r = await this.findOne();
//   // console.log(this.r);
//   next();
// });

// projectSchema.post(/^findOneAnd/, async function() {
//   // await this.findOne(); does NOT work here, query has already executed
//   await this.r.constructor.calcAverageRatings(this.r.project);
// });

module.exports = mongoose.model("Project", projectSchema);
