import React, { useState } from 'react'
import { NavLink,Outlet,useParams } from 'react-router-dom'

const Pricing = () => {

  const [colour,setColour] = ("black")

  return (
    <main className='mb-4 max-w-[1380px] mx-auto'>

      {/* <h2 className='text-xl text-center my-3 font-semibold'>Pricing</h2> */}

    <section className=''>
      <nav className='max-w-[1380px] mx-auto flexCenter pt-6 sm:pt-2'>
        <NavLink to='monthly'>
          <button className=' hover:bg-[#FF734F] hover:text-white font-bold w-[86px] border-[#FF734F] border-2 p-2'>Monthly</button>
        </NavLink>
        <NavLink to='quaterly'>
        <button className='hover:bg-[#FF734F] hover:text-white font-bold w-[86px] border-[#FF734F] border-2 p-2 border-x-0'>Quaterly</button>
        </NavLink>
        <NavLink to='yearly'>
        <button className='hover:bg-[#FF734F] hover:text-white font-bold w-[86px] border-[#FF734F] border-2 p-2'>Yearly</button>
        </NavLink>
      </nav>
        <Outlet />
      </section>


      {/* <section className='flexCenter flex-wrap'>
      {
        pcArr.map((val) => {
          return(
            <Card 
            key = {val.id}
            main_heading = {val.main_heading}
            main_heading2 = {val.main_heading2}
            price = {val.price}
            interval = {val.interval} 
            sub_h1 = {val.sub_h1}
            sh1_item1 = {val.sh1_item1}
            sh1_item2 = {val.sh1_item2}
            sh1_item3 = {val.sh1_item3}
            sub_h2 = {val.sub_h2}
            sh2_item1 = {val.sh2_item1}
            />
          )})
      } 

    </section> */}

      
    </main>
  )
}

export default Pricing