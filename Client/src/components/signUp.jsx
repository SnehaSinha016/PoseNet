import React from "react";
import './signup.css'
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import LoginUp from "./LoginUp";

const Signup = () => {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("You Have Successfully signed up")
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 py-10">
      <div className="w-[1000px] h-[1500px] border border-gray-300 rounded-3xl p-6 bg-white shadow-lg items-center justify-center  ">
        <h1 className="text-[180px] font-bold text-gray-800 text-center font-rustic">Postura</h1>
<p className="text-6xl text-gray-500 text-center mb-20">AI That Has Your Back.</p>
        <form className="space-y-10" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Mobile Number or Email"
            className="w-full h-[100px] text-4xl px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-2xl"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full h-[100px] text-4xl px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-2xl"
          />
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full h-[100px] text-4xl px-3 py-2 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-2xl"
          />
          <input
            type="text"
            required
            placeholder="Username"
            className="w-full h-[100px] text-4xl px-3 py-2 border border-gray-300   focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-2xl"
          />
          <button
            type="submit"
            className="w-[300px] h-[100px] mt-[15%] text-5xl bg-gradient-to-r from-blue-800 to-blue-400 text-white py-2 font-semibold hover:bg-blue-600 rounded-3xl ml-[30%]"
            onClick={()=>navigate('/LoginUp')}
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="w-[1000px] h-[200px] border border-gray-300 rounded-lg p-6 bg-white shadow-lg  mt-[30px]">
        <p className="text-5xl font-bold text-center">Have an account?</p>
        <button className="text-4xl font-bold text-blue-500 hover:text-blue-700 text-center  mt-[10px] " onClick={()=>navigate('/LoginUp')}>Log in</button>
      </div>
    </div>
  );
};

export default Signup;
