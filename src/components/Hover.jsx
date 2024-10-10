import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Hover = () => {
  return (
   <section id='hover' className='bg-[#F0F0F0]'>
     <div className="max-w-container mx-auto py-[120px]">
      <div className="flex justify-between">
      <div className="w-[339px] h-[401px] bg-[url('/src/assets/doon.png')] bg-no-repeat bg-center bg-cover relative after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#222] after:bg-opacity-30 after:z-30 z-20">
            <div className="absolute top-[50%] left-0 translate-y-[-50%] z-50 text-center">
              <p className='text-[24px] font-pops font-semibold  text-[white] pl-[70px] pr-[70px] pb-[10px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              <a className='text-[10px] font-pops font-normal p-2 bg-[white]' href="#">Read more</a>
            </div>
        </div>

        <div className="w-[339px] h-[401px] bg-[url('/src/assets/doon.png')] bg-no-repeat bg-center bg-cover relative after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#222] after:bg-opacity-30 after:z-30 z-20">
            <div className="absolute top-[50%] left-0 translate-y-[-50%] z-50 text-center">
              <p className='text-[24px] font-pops font-semibold  text-[white] pl-[70px] pr-[70px] pb-[10px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              <a className='text-[10px] font-pops font-normal p-2 bg-[white]' href="#">Read more</a>
            </div>
        </div>

        <div className="w-[339px] h-[401px] bg-[url('/src/assets/doon.png')] bg-no-repeat bg-center bg-cover relative after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#222] after:bg-opacity-30 after:z-30 z-20">
            <div className="absolute top-[50%] left-0 translate-y-[-50%] z-50 text-center">
              <p className='text-[24px] font-pops font-semibold  text-[white] pl-[70px] pr-[70px] pb-[10px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              <a className='text-[10px] font-pops font-normal p-2 bg-[white]' href="#">Read more</a>
            </div>
        </div>

      </div>
      <div className="flex items-center pt-2 justify-end">
          <p className='font-pops text-[16px] text-[#222]'>MORE FROM THE BLLOG </p>
          <a className='inline-block' href="#"><IoIosArrowForward/></a>
        </div>
    </div>
   </section>
  )
}

export default Hover