import React ,{useState}from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { flushSync } from 'react-dom';

const Nav = () => {

  const navLinkSty1es =( { isActive} ) => {
    return{
      color: isActive ? "#F86642" : "black",
      // textDecoration : isActive ? "underline" : "noon"
    }
  }

  // const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav >

      <div className=''>
    <section className='hidden md:flex items-center justify-evenly max-w-[920px] mx-auto h-[60px] border-black border-b'>

    <div className='' >
        <a href="https://githubak2002.github.io/akportfolio" target='blank'>
            <h1 className='logofont font-bold text-4xl text-[#F86642]'>Ak</h1>
            </a>
      </div>
      
      <div 
      className='hidden md:flex font-bold text-xl items-center'>

        <NavLink to='/' style = {navLinkSty1es} className='px-5'>HOME</NavLink>
        <NavLink to='/about' style = {navLinkSty1es} className='px-5'>ABOUT</NavLink>
        <NavLink to='/work' style = {navLinkSty1es} className='px-5'>WORK</NavLink>
        <NavLink to='/pricing' style = {navLinkSty1es} className='px-5'>PRICING</NavLink>

      </div>
     
      <button className='py-2 px-3 bg-[#F86642] rounded-sm text-white font-bold'>Get Started</button>
      
    </section>
    </div>

      
      
      
  {/* nav bar for small devices  */}


    <section className='mt-2 pb-1 mx-auto px-2 relative md:border-none border-black border-b'>

    <div className='md:hidden flex ml-3' >
        <a href="https://githubak2002.github.io/akportfolio" target='blank'>
            <h1 className='logofont font-bold text-4xl text-[#F86642]'>Ak</h1>
            </a>
      </div>

      



    <div className=' '>

        <i className={`absolute top-2 right-4 text-xl md:hidden  hover:cursor-pointer  ${toggle ? "hidden" : "ri-menu-2-line"}`}
        onClick={() => setToggle(prev => !prev)}></i>

        <i className={`absolute top-2 right-4 text-xl  md:hidden hover:cursor-pointer ${toggle ? "ri-close-fill" : "hidden"} `}
        onClick={() => setToggle(prev => !prev)}></i>

        <div className={` ${toggle ? "flex" : "hidden"} flex md:hidden  flex-col items-center justify-end bg-[#25242be5] text-white rounded-lg p-4 z-50 absolute right-12 top-2  min-w-[168px] font-bold`}>

        <Link to='/' className='navlinkcss' onClick={() => setToggle(prev => !prev)}>HOME</Link>
        <Link to='/about' className='navlinkcss' onClick={() => setToggle(prev => !prev)}>ABOUT</Link>
        <Link to='/work ' className='navlinkcss'onClick={() => setToggle(prev => !prev)}>WORK</Link>
        <Link to='/pricing' className='navlinkcss'onClick={() => setToggle(prev => !prev)}>PRICING</Link>
      
        <button className='mt-4 py-2 px-3 bg-[#F86642] rounded-sm text-white font-bold'>Get Started</button>

        </div>
      </div>
      
    </section>


    </nav>

  )
}

export default Nav