import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{type:String ,required:true,trim:true},
    email:{type:String ,lowercase:true,required:true,unique:true, trim:true},
    password:{type:String ,required:true},
    fullname:{type:String,required:true}
})
const User =mongoose.model('user',userSchema);
export default User;
