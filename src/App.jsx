import React from 'react'
import Gettingstarted from './components/gettingstarted'
import Signup from './components/signUp';
import LoginUp from './components/LoginUp';
import Navbar from './components/Navbar';
import Blog from './components/blog';
import Detection from './components/detection';
import Home from './pages/home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

const App = () => {
 return (
    <div >
          <Routes>
         <Route path="/" element={<Signup/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/LoginUp" element={<LoginUp/>}/>
        <Route path="/Detection" element={<Detection/>}/>
        <Route path="/Home" element={<Home/>}/>
        
      </Routes>
     
     
    </div>
 )
}

export default App
