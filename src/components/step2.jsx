import React from 'react'
import { avtarimg3 } from '../assets'

const Step2 = () => {
  return (
    <main className='flexCenter'>
      <div className='flexCenter flex-col max-w-[240px]'>

        <div className=' h-12 w-12 rounded-full bg-[#f86642] flexCenter'><h1 className='text-white text-3xl font-black'>2</h1>
        </div>

        <h1 className='my-3 text-center font-2xl font-bold text-[#f86642]'>Meet your Perfect
          Match</h1>
        <img src={avtarimg3} alt="avtar" className='h-[160px]' />
        <h3 className='text-xs mt-4 '>We match you with the best TDP design
          expert for your needs. Then we schedule
          a call to learn about your startup.</h3>
      </div>
    </main>
  )
}

export default Step2