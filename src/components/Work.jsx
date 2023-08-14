// import React from 'react'
import { workimgarr } from '../constants'

const Work = () => {
  return (
    <main className=' mx-auto'>
      <h2 className=' leading-tight max-w-[760px] mx-auto mt-10 sm:text-4xl text-xl font-semibold text-center px-3'>How <span className='text-[#F86642]'>accessible</span> UX design is changing the <span className='text-[#F86642]'>businesses</span> for the better</h2>

      <div className='flexCenter flex-col mt-9'>
        {
          workimgarr.map((imgs) => (
            <div key={imgs.id} className='m-4 sm:m-8 rounded-2xl overflow-hidden boxshadow'>
            <img src={imgs.imgsrc} alt="work_image" className='h-auto md:max-w-[670px]' />
            </div>
          ))
        }
      </div>


      <h2 className='text-center max-w-[580px] mx-auto my-10 sm:px-6 px-3 sm:text-2xl font-semibold'>
        <i className="ri-double-quotes-l text-[#FF734F] text-3xl px-2"></i>
        TDP helped identify the main pain points and designed a new UX that is accessible and easy to understand. The redesign pushed us forward on our mission to be able to verify 100% of IDs in real-time, and we raised over $100M in funding.
        <i className="ri-double-quotes-r text-[#FF734F] px-2"></i>  
      </h2>
      
    </main>
  )
}

export default Work