import React from 'react'

const Banner = () => {
  return (
   <div id='home'>
   <div className="bg-banbg bg-no-repeat py-[40px] bg-cover bg-center lg:py-[257px] relative 
   after:absolute after:top-0 after:content-[''] after:left-0 after:bg-[#bdb5b557] after:h-full after:w-full after:bg-opacity-20 after:z-30 z-20">
    <div className="max-w-container mx-auto pl-[20px] z-50">
         <h2 className='lg:text-[64px] text-[white] pb-[10px] lg:w-[784px]'>We exist since 1975 on the oil and gas industry.</h2>
         <a className='lg:text-[white] text-[13px] lg:p-4 bg-[#F40404] inline-block' href="#">LEARN MORE</a>
    </div>
   </div>
   </div>
  )
}

export default Banner