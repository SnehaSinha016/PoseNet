import React from 'react'
import detection from '../components/detection'
import Blog from '../components/blog'
import Gettingstarted from '../components/gettingstarted'
import Navbar from '../components/Navbar'
const home = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <div className="w-1/2 p-0 m-0"><Blog/></div>
      <div className="w-1/2 p-0 m-0 "><Gettingstarted/></div>
    </div>
  )
}

export default home
