import React from 'react'
import { avtarimg1 } from '../assets'

const Step1 = () => {
  return (
    <main className='flexCenter'>
      <div className='flexCenter flex-col max-w-[240px]'>

        <div className=' h-12 w-12 rounded-full bg-[#f86642] flexCenter'><h1 className='text-white text-3xl font-black'>1</h1>
        </div>

        <h1 className='my-3 text-center font-2xl font-bold text-[#f86642]'>Sign Up For One Of
          Our Services</h1>
        <img src={avtarimg1} alt="avtar" className='h-[180px]'/>
        <h3 className='text-xs mt-4 '>Sign up for one of our affordable subscription play which offer a variety of        options to fit your unique needs.</h3>
      </div>
    </main>
  )
}

export default Step1