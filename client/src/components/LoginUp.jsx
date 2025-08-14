import React from "react";
import './signup.css';
import Signup from "./signUp";
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Login from '../assets/Login.png'
import Home from "../pages/home";
import { useState } from "react";
import axios from "axios";


const LoginUp = () => {
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/login',{
      password:Password,
      email:Email,
    }).then(result=>{
         console.log(result)
         if(result.data==="success"){
             navigate('/Home')
         }
        else{
          alert(result.data);
        }
        }
  )
    .catch(err=>
      console.log(err))
        }
  return (
    <div className="h-screen w-screen flex flex-col items-end justify-center py-10 pr-80 bg-cover bg-center absolute" style={{backgroundImage:`url(${Login})`}}>
      <div className="w-[1000px] h-[900px]  border-gray-300 rounded-lg p-6 bg-white shadow-lg  ">
        <h1 className="text-[180px] font-bold text-gray-800 text-center font-rustic">Postura</h1>
<p className="text-5xl text-gray-500 text-center mb-20">AI That Has Your Back.</p>
        <form className="space-y-10 " onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full h-[100px] text-4xl px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-2xl"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full h-[100px] text-4xl px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-2xl"
          />
          <button
            type="submit"
            className="w-[300px] h-[70px] mt-[5%] text-5xl bg-gradient-to-r from-blue-600 to-blue-300 text-white py-2 font-semibold hover:bg-blue-600 rounded-3xl ml-[38%]">
            Log in
          </button>
        </form>
      </div>
      <div className="w-[1000px] h-[200px] border border-gray-300 rounded-lg p-6 bg-white shadow-sm  mt-[30px]">
        <p className="text-5xl font-bold text-center">Don't have an account?</p>
        <button className="text-4xl font-bold text-blue-500 hover:text-purple-400 text-center mt-[10px] ml-[45%]" onClick={()=>navigate('/')}>Sign up</button>
      </div>
    </div>
  );
};

export default LoginUp;
