const jwt = require('jsonwebtoken')
const adminUser = {
email:process.env.EMAIL,
password:process.env.PASSWORD
}
const logincontroller= async(req,res)=>{
try {
    const { email, password } = req.body;
if (email != adminUser.email && password != adminUser.password) {return res.status(401).json({ message: 'Invalid credentials' });}
   
const token = jwt.sign(
   {
email:email,
password:password,
    },
    process.env.ACCESS_SECRET_TOKEN,
{expiresIn:"1d"}
    );
return res.status(200).json({token})

} catch (error) {
   res.status(500).json({message:error})
}
}
module.exports=logincontroller