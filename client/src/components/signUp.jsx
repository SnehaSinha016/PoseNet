import React from "react";
import './signup.css'
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import LoginUp from "./LoginUp";
import api from "../api";
import { useState } from "react";
import axios from 'axios';


const Signup = () => {
  const [Fullname,setFullname]=useState("");
  const [UserName,setUserName]=useState("");
  const [Password,setPassword]=useState("");
  const [Email,setEmail]=useState("");
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("You Have Successfully signed up")
    axios.post('http://localhost:3001/users',{
      fullname:Fullname,
      username:UserName,
      password:Password,
      email:Email,
    }).then(result=>
  navigate('/LoginUp')
  )
    .catch(err=>console.log(err))
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 py-10">
      <div className="w-[400px] h-[370px] border border-gray-300 rounded-3xl p-6 bg-white shadow-lg items-center justify-center  ">
        <h1 className="text-[70px] font-bold text-gray-800 text-center font-rustic">Postura</h1>
<p className="text-2xl text-gray-500 text-center mb-15">AI That Has Your Back.</p>
        <form className="space-y-3 " onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder=" Email"
            className="w-full h-[30px] text-2xl px-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-2xl"
             value={Email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full h-[30px] text-2xl px-3  border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-2xl"
             value={Password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full h-[30px] text-2xl px-3  border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-2xl"
             value={Fullname}
            onChange={(e) => setFullname(e.target.value)}
            autoComplete="name"
          />
          <input
            type="text"
            required
            placeholder="Username"
            className="w-full h-[30px] text-2xl px-3  border border-gray-300   focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-2xl"
              value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="username"
          />
          <button
            type="submit"
            className="w-[80px] h-[30px] mt-[15%] text-1xl bg-gradient-to-r from-blue-800 to-blue-400 text-white py-2 font-semibold hover:bg-blue-600 rounded-3xl ml-[30%]"
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="w-[400px] h-[100px] border border-gray-300 rounded-lg p-6 bg-white shadow-lg  mt-[30px]">
        <p className="text-2xl font-bold text-center">Have an account?</p>
        <button className="text-1xl font-bold text-blue-500 hover:text-blue-700 text-center  " onClick={()=>navigate('/LoginUp')}>Log in</button>
      </div>
    </div>
  );
};

export default Signup;
