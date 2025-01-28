import React from 'react'
import {NavLink} from "react-router-dom"
import { IoMdNotifications } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
const Header = () => {
  return (
    <header className='flex p-4 items-center justify-between bg-purple-800 text-white '>
        <div className='flex'>
        <div className='w-[50px] p-2 '>
          <img className='rounded-full' src="https://evolve2023.in/wp-content/uploads/2014/10/speaker-3.jpg" alt="profile-pic" />

        </div>
        <div className='flex flex-col mx-3'>
          <span>Hello , Welcome 🎉</span>
          <span className='text-xl font-bold'>John Weak</span>
        </div>
        </div>
       <NavLink className="font-bold bg-green-600 p-2 rounded-md flex items-center " to={"/contact"}>
       <MdContactPhone className='mx-2'/>

       Contact Us
       </NavLink>
        <IoMdNotifications className='text-4xl'/>
      </header>
  )
}

export default Header
