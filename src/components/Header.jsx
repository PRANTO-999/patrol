import React from 'react'
import { CiMail } from "react-icons/ci";
import { FiPhoneForwarded } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";

const Header = () => {
  return ( 
   <header className="py-3 bg-stone-950" >
     <div className='max-w-container mx-auto'>
       <div className="lg:flex items-center justify-between">
       <div className="lg:w-[20%]">
        <div className="flex items-center lg:justify-start justify-center relative after:absolute after:top-[6px] after:right-[10px] after:content-['']
         after:h-[15px] after:w-[2px] after:bg-[white]">
         <CiMail className="pr-2 text-[25px] text-white"/>
          <p className='font-pops text-white'>mail@yourcompany.com</p>
        </div>
        </div>
        <div className="lg:w-[20%]">
          <div className="flex items-center pl-[10px] lg:justify-start justify-center">
            <FiPhoneForwarded className='pr-2 inline-block text-[25px] text-white'/>
            <p className='font-pops text-white'>+896 120 5889 (Toll free)</p>
          </div>
        </div>
        <div className="lg:w-[60%]">
        <div className="flex items-center gap-x-4 justify-center lg:justify-end">
            <FaFacebookSquare className='text-white'/>
            <FaTwitter className='text-white'/>
            <FiInstagram className='text-white'/>
            <FaLinkedinIn className='text-white'/>
        </div>
        </div>
       </div>
    </div>
   </header>
  )
}

export default Header