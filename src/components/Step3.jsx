import React from 'react'
import { avtarimg2 } from '../assets'

const Step3 = () => {
  return (
    <main className='flexCenter'>
      <div className='flexCenter flex-col max-w-[240px]'>

        <div className=' h-12 w-12 rounded-full bg-[#f86642] flexCenter'><h1 className='text-white text-3xl font-black'>3</h1>
        </div>

        <h1 className='my-3 text-center font-2xl font-bold text-[#f86642]'>The First Sprint Begins (Hold On Tight)</h1>
        <img src={avtarimg2} alt="avtar" className='h-[160px]' />
        <h3 className='text-xs mt-4 '>TDP manages the project, learns the intimate details of what your users want, and delivers impactful design iterations.</h3>
      </div>
    </main>
  )
}

export default Step3