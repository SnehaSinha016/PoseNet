import mongoose from "mongoose";
import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import User from "./models/user.js"; 
import bcrypt, { hash } from "bcrypt";
dotenv.config();
const app=express();
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
const MONGODB_URL=process.env.MONGODB_URL;
const PORT=3001
if(!MONGODB_URL){
  console.error("Missing MONGODB_URL in .env");
  process.exit(1);
}
mongoose.connect(MONGODB_URL).then(()=>
  
  {console.log("MongoDB connected")
      app.listen(PORT,'0.0.0.0',()=>{
  console.log(`server is running at http://localhost:${PORT}`)
})
  })
  
.catch(err=>{
  console.error(err.message);
  process.exit(1);
})
app.get('/', (req, res) => res.json({ ok: true }));
app.get("/users", async (_req, res) => {
  const users = await User.find().select("-password").lean();
  res.json(users);
});


app.post('/users',async(req,res)=>{
  const {name, email,password}=res.body;
  bcrypt.hash(password,10).then(hash=>{
      const user= User.create({name,email,hash})
      .then(user=>res.json(user))
      .catch(err=>res.json(err))
 }).catch(err=>console.log(err.message))       
}
  )
 
    app.post('/login',async(req,res)=>{
      const {email, password}=req.body;
      const user=  User.findOne({email:email})
      .then(user=>{
        if(user){
        bcrypt.compare(password,user.password,(err,response)=>{
          if(err)return res.json("teh password is incorrect")
            if(response){
              res.json("Success")
            }
        })
      }
        else{
          res.json("No record existed")
        }
      })
    
    }
    
    )

  