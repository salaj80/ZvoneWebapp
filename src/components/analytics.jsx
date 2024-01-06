import React from 'react'
import truck from "../assets/Truck.jpg"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={truck} alt='/' />
            <div className='flex flex-col justify-center pl-5'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 drop-shadow'>What do we do?</h1>
                <p>We are a company made in 2014 dedicated to fast and safe, first class transport of your goods in Macedonia, Greece and Kosovo. We offer 
                competitive pricing for businesses of all sizes and industries.</p>
            </div>
        </div>
    </div>
  )
}

export default Analytics
