import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import { abtimgarr } from '../constants'
// import { svg,svg1,svg2 } from '../assets'

const Abt = () => {
  return (
    <main className=' mx-auto'>

      <h2 className='max-w-[760px] mx-auto mt-2 sm:text-4xl text-xl font-semibold text-center px-3'>How <span className='text-[#F86642]'>signing</span> up with The Design Project  <span className='text-[#F86642]'>works</span> !?
      </h2>
      <h2 className=' max-w-[780px] mx-auto mt-4 mb-3 text-sm text-center px-3'>
      Take a minute to imagine how you’d feel watching your user count grow, and retention rates stay consistently high. When you prioritize effective UX, better retention and growth are natural consequences. Backed by countless hours of research and testing, TDP blends UX, UI, and Product design into a deliciously smooth process that fuels productivity and success.
      </h2>

      {/* </div> */}

      <nav className='mx-auto max-w-[400px] flexCenter mt-0'>
        <Link to='step1' className='m-2 p-2 text-lg font-semibold hover:bg-[#F86642] hover:text-white rounded-lg  border-black border-2'>Step 1</Link>
        <Link to='step2' className='m-2 p-2 text-lg font-semibold hover:bg-[#F86642] hover:text-white rounded-lg  border-black border-2'>Step 2</Link>
        <Link to='step3' className='m-2 p-2 text-lg font-semibold hover:bg-[#F86642] hover:text-white rounded-lg  border-black border-2'>Step 3</Link>
       
      </nav>

      <div className='text-center my-6 '>
      <Outlet/>
      </div>



      <h2 className='max-w-[760px] mx-auto mt-10 sm:text-4xl text-xl font-semibold text-center px-3'>
        
      A diverse team of <span className='text-[#F86642]'>Passionate</span> UX Nerds who are here to help your  <span className='text-[#F86642]'>Startup Succeed</span>
      </h2>

      <h2 className=' max-w-[660px] mx-auto mt-4 text-sm text-center px-3'>From ideation to expansion, TDP understands the unique demands of your startup - providing you with optimized design strategies and fast turnarounds for an affordable monthly subscription.</h2>

      <div className='flex justify-center items-center flex-wrap max-w-[860px] mx-auto'>

        <div className='flex items-center justify-center my-8 flex-wrap '>
          {
            abtimgarr.map((imgs => (
              <div className='px-2 w-[256px]' key={imgs.id}>

                <div className='flex items-start justify-center p-3'>
              <img src={imgs.imgsrc} alt="img1" className='h-[80px]'/></div>
              <h2 className='text-sm text-center my-3 font-semibold'>{imgs.heading}</h2>
              <h3 className=' text-xs text-center'>{imgs.content}</h3>
              </div>
            )))
          }
        </div>
      </div>   
      
    </main>
  )
}

export default Abt