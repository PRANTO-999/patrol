import React from 'react'


const Service = () => {
  return (
    <section className='my-40' id='service'>
      <div className="pb-[50px] max-w-container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
        <div className="w-[1/2]">
            <h3 className='font-pops font-bold text-[64px] w-[509px]'>Our Services</h3>
            <p className='font-pops text-[#6C6C6C] font-medium text-[16px] w-[383px]'>It is a long established fact that a reader will be distracted by
                 the readable content of a page when looking at its layout.</p>
        </div>
        <div className='w-1/2 h-[400px] bg-[url("/src/assets/sugar.png")] bg-cover bg-no-repeat bg-center relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#000] after:bg-opacity-20 after:z-30 z-20'>
           <div className="absolute top-[50%] left-0 translate-y-[-50%] z-50 ml-[100px]">
           <h2 className='text-3xl text-[#fff] mb-3'>Modern natural oil and gas refineries.</h2>
           <a className='text-[16px] p-3 bg-[red] inline-block' href="#">Learn More</a>
           </div>
        </div>
     
          <div className="w-1/2 h-[400px] bg-[url('/src/assets/cool.png')] bg-cover bg-no-repeat bg-center relative after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:bg-[#222] after:bg-opacity-20 after:w-full after:z-30 z-20">
            <div className="absolute top-[50%] left-0 translate-y-[-50%] z-50 ml-[100px]">
            <h2 className='text-3xl text-[#fff] mb-3'>National fuel distribution and supply.</h2>
            <a className='text-[16px] p-3 bg-[red] inline-block' href="#">Learn More</a>
            </div>
          </div>

          <div className="w-1/2 h-[400px] bg-[url('/src/assets/cool.png')] bg-cover bg-no-repeat bg-center relative after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:bg-[#222] after:bg-opacity-20 after:w-full after:z-30 z-20">
            <div className="absolute top-[50%] left-0 translate-y-[-50%] z-50 ml-[100px]">
            <h2 className='text-3xl text-[#fff] mb-3'>Supply of national industries.</h2>
            <a className='text-[16px] p-3 bg-[red] inline-block ' href="#">Learn More</a>
            </div>
          </div>

       </div>
    </div>
    </section>
  )
}

export default Service