import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white' id='hero'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'><i>TRANSPORT FOR YOUR CARGO SINCE 2014</i></p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Zvone Transport</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Moving cargo in</p>
                <Typed
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' 
                strings={['Macedonia', 'Greece', 'Kosovo']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Fast and reliable transport for your companies needs.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00df98d0]'>
            <a href='https://www.facebook.com/ZvoneTransport' target="_blank" rel="noreferrer">Find out more</a>  
            </button>
        </div>
    </div>
  )
}

export default Hero
