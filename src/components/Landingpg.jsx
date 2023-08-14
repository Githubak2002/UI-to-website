import React from 'react'

import a from '../assets/avtars.png'
// import {landingPgArr} from "../constants"
import landingPgArr from '../cons'





const Landingpg = () => {
  return (
    <section className='mt-[28  px] md:mt-[44px]'>


      <div className='max-w-[1010px] mx-auto'>
        <h2 className='font-black leading-tight text-xl sm:text-[50px] text-center sm:px-6 px-2 mt-4'>A UI/UX design subscription so <span className='text-orange-600'>good</span> it should come with a <span className='text-orange-600'>warning</span> label</h2>
      </div>


      <div className='max-w-[1356px] mt-8 mx-auto md:my-[20px] flex justify-center flex-wrap items-center'>


        <div className='px-3 md:px-[20px] py-2 flex items-center justify-end'>
        <i className="text-orange-500 ri-checkbox-circle-line mr-1"></i>
        <h2 className=''> No hiring headaches</h2>
        </div>

        <div className='px-3 md:px-[20px] py-2 flex items-center justify-end'>
        <i className="text-orange-500 ri-checkbox-circle-line mr-1"></i>
        <h2 className=''> Weekly turnaround times</h2>
        </div>

        <div className='px-3 md:px-[20px] py-2 flex items-center justify-end'>
        <i className="text-orange-500 ri-checkbox-circle-line mr-1"></i>
        <h2 className=''> One flat monthly rate</h2>
        </div>



      
      </div>

    {/* --- Avtars img --- */}

    <div className='flexCenter mx-auto h-auto max-w-[520px] ms:mt-1 mt-3 mb-[-6px]'>
    {/* h-[434px] w-[770px] */}
    <img src={a} alt="avtars" />
    </div>


    <div className='bg-[#292526] max-w-[1532px] mx-auto pb-6'>

        <h2 className='px-6 md:pt-[40px] pt-6 text-center text-lg md:text-[38px] text-white'>We Helped Our Customers Raise <span className=' text-orange-500'>$1B+</span></h2>

        <div  className='max-w-[1156px] mx-auto md:mt-[52px] mt-3
        flex flex-wrap          md:justify-evenly justify-center
        items-center
         '>
        
        {
        landingPgArr.map((val) => {
          return(
          <div key={val.id} className='flexCenter'>
          <img src={val.imgsrc} alt="logo" className=' w-auto h-[50px] sm:h-[60px] md:my-2 px-2'/>
          <div className={`bg-orange-400 md:h-[40px] h-0 ${landingPgArr.length == val.id ? "w-0" : "w-[2px]"} ml-3`}>

          </div>
          
          </div>
        )})}
        
        </div>

      </div>
      
    </section>
  )
}

export default Landingpg