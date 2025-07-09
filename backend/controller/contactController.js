const contact = require('../model/contact')
const contactValidator = require('../validator/contactValidator')
const createContact = async(req,res)=>{
    try{
   const { value, error } = await contactValidator.validate(req.body);
if (error) {
  return res.status(400).json({ message: error.details[0].message }); // correct spelling
}

await contact.create(value)
res.status(200).json({message:"successfull"})
}
catch(error){
res.status(500).json({message:"error"})
console.log(error)
}
}

module.exports = createContact