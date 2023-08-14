import React from 'react'
import { error } from '../assets'

const Errorpg = () => {
  return (
    <div className='flexCenter flex-col '>
      <img src={error} alt="404_error_png" className=' min-w-[210px] w-[20vw]'/>
      <h2 className=' mb-[20vh] text-[#ff3636] text-3xl font-bold text-center'>
        Page not found!
      </h2>
    </div>
  )
}

export default Errorpg