const Project = require("./../models/projectModel");

exports.createProject = async (req, res) => {
    try {
        const newProject = await Project.create(req.body);
        res.status(201).json({
            status: "success",
            data: { newProject },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
        });
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const allProjects = await Project.find();
        res.status(200).json({
            status: "success",
            length: allProjects.length,
            data: { allProjects },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
        });
    }
};
exports.getProject = async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
  
      res.status(200).json({
        status: 'success',
        data: {
          project
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
exports.projectpage = async (req, res) => {
    try {
        const allProjects = await Project.find();
        res.status(200).json({
            status: "success",
            length: allProjects.length,
            data: { allProjects },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
        });
    }
};
exports.updateProject = async (req, res) => {
    // 1) Get user based on POSTed email
    const project = await Project.findByIdAndUpdate( req.params.id,req.body,{
        new: true
    } );
    
  
    try {
  
      res.status(200).json({
        status: 'success',
        data:{
            project
        }
      });
    } catch (err) {
      res.status(404).json({
          status:"fail",
      })
    }
};
  
exports.updateRating = async (req, res) => {

  const temp=await Project.findById(req.params.id);
  const k=temp.ratingsQuantity;
  const a=temp.ratingsAverage;
  const n=req.body.rating;
  const c=((k*a)+n)/(k+1);
    const project = await Project.findByIdAndUpdate( req.params.id,{ratingsQuantity:k+1,ratingsAverage:c},{
        new: true,
        runValidators: true
    } );
    
    
  
    try {
  
      res.status(200).json({
        status: 'success',
        data:{
            project
        }
      });
    } catch (err) {
      res.status(404).json({
          status:"fail",
      })
    }
  };