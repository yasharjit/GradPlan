const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  pname:{ 
  	type: String, 
  	required: true
  },
  pdesc:{ 
  	type: String, 
  	required: true 
  },
  pfield: { 
  	type: String, 
  	required: true 
  },
  skills:{ 
  	type: String, 
  	required: true 
  },
  checkbox:{ 
  	type: boolean, 
  	required: true 
  }
});

module.exports = mongoose.model('Project', projectSchema);