require('dotenv').config()
const express = require('express')
const connectDB= require('./config/connect')
const skills = require('./routes/home')
const projects = require('./routes/projectRoute')
const contact = require('./routes/contactRoute')
const login = require('./routes/loginRoute')
const adminProject = require('./routes/adminProject')
const adminSkill = require('./routes/adminSkill')
const app=express()
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173", // Replace with your React app's URL
    credentials: true
}));

const Port = process.env.Port || 5000
app.use(express.json());
app.use('/api/portfolio', skills)
app.use('/api/portfolio/projects', projects)
app.use('/api/portfolio/contact', contact)
app.use('/api/portfolio/auth/login', login)
app.use('/api/portfolio/projects/admin', adminProject)
app.use('/api/portfolio/skills/admin', adminSkill)
const start= async()=>{

   try{
  
   await  connectDB() 
   app.listen(Port, ()=>{
    console.log(`server is listening Port ${Port}`)
   
}) 

}
catch(error){
console.log(error)
 process.exit(1);
}
}


start();