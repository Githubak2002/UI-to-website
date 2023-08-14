import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mx-auto max-w-[1532px] bg-[#292526] text-white border-t '>

    <main className='flex items-center justify-evenly mx-auto'>
        <div>
        <div>
            <h1 className=' mt-10 text-center font-semibold sm:text-3xl text-xl'>The design project</h1>
        </div>

        <div className='mt-4 flex px-2 justify-center items-start start flex-wrap font-thin  '>
            <div className='flexCenter p-2 '>
            <i className=" pr-2 text-orange-500 ri-mail-line"></i>
            <h2>hello@designproject.io</h2>
            </div>

            <div className='flexCenter p-2 '>
            <i className=" pr-2 text-orange-500 ri-instagram-line"></i>
            <h2>@designproject.io</h2>
            </div>

            <div className='flexCenter p-2 '>
            <i className=" pr-2 text-orange-500 ri-linkedin-box-line"></i>
            <h2>The Design Project</h2>
            </div>

        </div>

        <div className='mt-4 px-2 pb-6 flex justify-center items-start' >
            <h3 className=' '>Copyright 

            </h3>
            <i className=" px-1 ri-copyright-line"></i> 
            <h3>
              2023. All rights reserved </h3>
        </div>
        </div>



{/* -- links -- */}
        <div className=''>
        <div className={`ml-6 hidden md:flex flex-col justify-center items-end`}>

        <Link to='/' className='navlinkcss scrolltotop'>HOME</Link>
        <Link to='/about' className='navlinkcss' >ABOUT</Link>
        <Link to='/work ' className='navlinkcss'>WORK</Link>
        <Link to='/pricing' className='navlinkcss'>PRICING</Link>
      
        </div>
        </div>

        </main>
    </footer>
  )
}

export default Footer