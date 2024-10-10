import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ScrollspyNav from "react-scrollspy-nav";

const Navbar = () => {
    let [show, setShow] = useState(false)


    let handleMenu = ()=>{
       setShow(!show)   
    }

    return (
        <nav className="bg-[#F40404] py-6 fixed left-0 top-0 z-50 w-full">
            <div className="max-w-container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="pl-2">
                        <picture>
                            <img src={logo} alt="" />
                        </picture>
                    </div>
                    <div className="">
                        <ScrollspyNav  scrollTargetIds={["home", "galary", "service","big","footer","hover","learn","map"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"

                        >
                        <ul className={`lg:flex items-center gap-x-6 absolute z-50 lg:static ${show == true ?
                             'top-[180px] bg-[green] left-0 w-full text-center duration-700 -z-30 py-3' :'top-[-200px] left-0  w-full text-center'}`}>
                            <li ><a className='text-[white] font-pops lg:py-0 py-2' href="#home">Home</a></li>
                            <li ><a className='text-[white] font-pops lg:py-0 py-2' href="#galary">Galary</a></li>
                            <li ><a className='text-[white] font-pops lg:py-0 py-2' href="#service">Service</a></li>
                            <li ><a className='text-[white] font-pops lg:py-0 py-2' href="#big">Big</a></li>
                            <li ><a className='text-[white] font-pops lg:py-0 py-2' href="#footer">Footer</a></li>
                            <li ><a className='text-[white] font-pops lg:py-0 py-2' href="#hover">Hover</a></li>
                            <li ><a className='text-[white] font-pops lg:py-0 py-2' href="#learn">Learn</a></li>
                            <li ><a className='text-[white] font-pops lg:py-0 py-2' href="#map">Map</a></li>
                           
                            <li><a className='text-[white] font-pops px-4 py-2 border-2 border-[white] inline-block' href="#">CONTACT</a></li>
                        </ul>
                        </ScrollspyNav>
                       
                    </div>
                    <div className="lg:hidden relative z-50 px-5" onClick={handleMenu}>
                         {show == true ? <RxCross2/>:<FaBars/>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar