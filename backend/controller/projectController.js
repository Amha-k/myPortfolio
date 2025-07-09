const Project = require('../model/project')
const projectValidator = require('../validator/projectValidator')

const getProjects=async(req,res)=>{
  try {
   const projects= await Project.find()
   res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({message:error})
  }
}
const createProject = async (req, res) => {
  const { error, value } = projectValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const project = await Project.create(value);
  res.status(201).json(project);
};

const deleteproject = async (req, res) => {

  
  const projectId= req.params.id;
  
  await Project.findOneAndDelete({_id:projectId});


  res.status(200).json({message:'succesfully deleted'});
};

const updateproject = async (req, res) => {
 const { error, value } = projectValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

const projectId=req.params.id;
const updatedProject =await Project.findOneAndUpdate({_id:projectId},value,{new:true,runValidators:true})

 if(!updatedProject){
    res.status(404).json({message:'project not found'})
  }
  res.send(updatedProject);
};


module.exports= {createProject,getProjects,updateproject,deleteproject }