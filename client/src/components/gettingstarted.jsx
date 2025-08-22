import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import detection from './detection'

const gettingstarted = () => {
  const navigate=useNavigate();
  return (
    <div className="w-[500px] h-[700px] border mt-[200px] ml-[30%] rounded-3xl bg-gradient-to-r from-purple-400 to to-blue-400 transition flex-col">
<p className="font-rustic text-3xl mt-[100px] ml-[100px]">Your Back Deserves Better.</p>
<button className="w-[450px] h-[100px] text-3xl border flex rounded-3xl bg-blue-400 border-blue-400 items-center justify-center ml-[5%] mt-[30%]" onClick={()=>navigate('/detection')}>Let's get Started <FaArrowRight/></button> 
    </div>
  )
}

export default gettingstarted
