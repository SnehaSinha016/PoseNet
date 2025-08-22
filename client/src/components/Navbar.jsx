import React from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import LoginUp from "./LoginUp";

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav className="w-full fixed top-0  bg-gradient-to-r from-blue-200 to-purple-200 shadow-lg">
      <div className="max-w-3xl mx-auto  flex items-center justify-between">
        <div className="text-3xl font-bold font-rustic text-white ml-[2px]">Postura</div>
        <ul className=" md:flex space-x-8 text-white font-medium mr-[2px]">
          <li><a href="" className="hover:underline text-2xl">Home</a></li>
          <li><a href="" className="hover:underline text-2xl" onClick={()=>navigate('/LoginUp')}>log Out</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
