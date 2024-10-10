import React from 'react'
import Logo from "../assets/logo.png"
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TbMapPinPin } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Falter from "../assets/fotter.png"

const Footer = () => {
  return (
    <footer id='footer' className='py-[150px] bg-[#222]'>
        <div className="max-w-container mx-auto">
         <div className="flex items-center">
         <div className="">
        <picture>
            <img src={Logo} alt="" />
        </picture>
       <div className="py-[33px]">
       <div className="flex items-center">
           <MdOutlineMail className='font-pops font-normal text-[16px] text-[white]'/>
           <p className='font-pops font-normal text-[16px] text-[white] pl-2'>mail@yourcompany.com</p>
        </div>
        <div className="flex items-center py-2">
           <MdOutlinePhoneInTalk className='font-pops font-normal text-[16px] text-[white]'/>
           <p className='font-pops font-normal text-[16px] text-[white] pl-2'>+896 120 5889 (Toll free)</p>
        </div>
        <div className="flex items-center">
           <TbMapPinPin className='font-pops font-normal text-[16px] text-[white]'/>
           <p className='font-pops font-normal text-[16px] text-[white] pl-2'>101 Baker Street, New York, USA, 12345</p>
        </div>
       </div>

       <div className="flex gap-x-6 items-center relative after:absolute after:top-0 after:left-0 after:z-30 z-20">
         <a className='text-[#297e8a] text-[20px] p-4 border-2 border-[white] rounded-[50%] bg-[white] hover:bg-[green] inline-block hover:text-[white]' href="#"><FaFacebook /></a>
         <a className='text-[#297e8a] text-[20px] p-4 border-2 border-[white] rounded-[50%] bg-[white] hover:bg-[green] inline-block hover:text-[white]' href="#"><FaTwitter /></a>
         <a className='text-[#297e8a] text-[20px] p-4 border-2 border-[white] rounded-[50%] bg-[white] hover:bg-[green] inline-block hover:text-[white]' href="#"><FaInstagramSquare /></a>
         <a className='text-[#297e8a] text-[20px] p-4 border-2 border-[white] rounded-[50%] bg-[white] hover:bg-[green] inline-block hover:text-[white]' href="#"><CiLinkedin /></a>
       </div>
    </div>   


    <div className="pl-[160px]">
      <h6 className='text-[20px] font-semibold text-[white]'>Company</h6>
      <ul>
         <li className='text-[white] font-normal font-pops text-[14px] py-2'>Home</li>
         <li className='text-[white] font-normal font-pops text-[14px]'>About</li>
         <li className='text-[white] font-normal font-pops text-[14px] py-2'>Services</li>
         <li className='text-[white] font-normal font-pops text-[14px]'>Gallery</li>
      </ul>
    </div>
    <div className="pl-[150px]">
    <h6 className='text-[20px] font-semibold text-[white]'>Others</h6>
      <ul>
         <li className='text-[white] font-normal font-pops text-[14px] py-2'>Blog</li>
         <li className='text-[white] font-normal font-pops text-[14px]'>Contact</li>
         <li className='text-[white] font-normal font-pops text-[14px] py-2'>Terms & Conditions</li>
         <li className='text-[white] font-normal font-pops text-[14px]'>Privacy Policy</li>
      </ul>
    </div>
    <div className="pl-[150px] justify-end">
    <h6 className='text-[20px] font-semibold text-[white] pb-[10px] inline-block'>Certificate</h6>
    <div className="flex">
    <picture>
      <img src={Falter} alt="" className='pr-[10px]'/>
    </picture>
    <picture>
      <img src={Falter} alt="" />
    </picture>
    </div>
    </div>
         </div>
   </div>
    </footer>
  )
}

export default Footer