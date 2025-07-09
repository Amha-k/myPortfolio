const Skills = require("../model/skill")

const getSkill=async(req,res)=>{
    try {
        const skills= await Skills.find()
        res.status(200).json(skills)
    } catch (error) {
        res.status(500).json({message:message.error})
    }
};

    const createSkill = async (req, res) => {
     
    try {
       const skill = await Skills.create(req.body);
      res.status(201).json(skill);
    } catch (error) {
      console.log(error);
    }
     
    };
    
    const deleteSkill = async (req, res) => {
    
      
      const skillId= req.params.id;
      
      await Skills.findOneAndDelete({_id:skillId});
    
    
      res.status(200).json({message:'succesfully deleted'});
    };
    
    const updateskill = async (req, res) => {
     
    
    const skillId=req.params.id;
    const updatedSkill =await Skills.findOneAndUpdate({_id:skillId},req.body,{new:true,runValidators:true})
    
     if(!updatedSkill){
        res.status(404).json({message:'project not found'})
      }
      res.send(updatedSkill);
    };

module.exports= {getSkill,deleteSkill,createSkill,updateskill}