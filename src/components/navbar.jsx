import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ZVONE.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
        <a href='#hero' onClick={() => scrollToSection('hero')}>Home</a>
        </li>
        <li className='p-4'>
        <a href='#' onClick={() => scrollToSection('lytics')}>Company</a>
        </li>
        <li className='p-4'>
        <a href='#' onClick={() => scrollToSection('pricing')}>Pricing</a>
        </li>
        <li className='p-4' >
        <a href='#' onClick={() => scrollToSection('contact')}>Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu  size={20}/>}
        
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>ZVONE.</h1>
        <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>
        <a href='#hero'>Home</a>
        </li>
        <li className='p-4 border-b border-gray-600'>
        <a href='#lytics'>Company</a>
        </li>
        <li className='p-4 border-b border-gray-600'>
        <a href='#pricing'>Pricing</a>
        </li>
        <li className='p-4'>Contact</li> 
        </ul>
      </div>
    </div>
  )
}

export default Navbar
