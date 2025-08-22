import React from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import LoginUp from "./LoginUp";

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav className="w-full fixed top-0  bg-gradient-to-r from-blue-200 to-purple-200 shadow-lg">
      <div className="max-w-9xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-7xl font-bold font-rustic text-white">Postura</div>
        <ul className=" md:flex space-x-8 text-white font-medium">
          <li><a href="" className="hover:underline text-5xl">Home</a></li>
          <li><a href="" className="hover:underline text-5xl" onClick={()=>navigate('/LoginUp')}>log Out</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
