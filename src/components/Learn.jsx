import React from 'react'

const Learn = () => {
  return (
 <section id='learn' className='bg-[#F0F0F0]'>
      <div className="max-w-container mx-auto">
    <div className="flex">
    <div className="w-1/4">
      <div className="bg-[red] w-full h-[361px] text-center ">
        <h4 className='text-[30px] font-pops font-semibold pt-[111px] pl-[54px] pr-[73px] text-[white]'>Learn more about our company</h4>
      </div>
    </div>
    <div className="w-3/4 h-[361px] bg-[url('/src/assets/guut.png')] relative after:absolute after:left-0 after:top-0 after:content-['']
    after:bg-[#222] after:w-full after:h-full after:bg-opacity-30 z-20">
      <div className="absolute top-[50%] left-[40%] translate-[-50%,-50%] z-50">
        <a className='text-[35px] text-[red] p-4 bg-[white]' href="#">Learn More</a>
      </div>
    </div>
    </div>

   </div>
 </section>



  )
}

export default Learn