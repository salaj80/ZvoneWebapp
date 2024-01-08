import React from 'react'

const Contact = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='contact'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className="max-w-full overflow-hidden">
        <div className="relative pb-[56.25%] h-0 overflow-hidden">
        <iframe
          title="Your Map"
          className="absolute top-0 left-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4247.936877339591!2d22.50643793823314!3d41.16191589606411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135623b7c3c67f65%3A0xb4f011e2da1a15af!2sVulkanizer%20Zvone!5e0!3m2!1sen!2smk!4v1704679569261!5m2!1sen!2smk"
        ></iframe>
        </div>
    </div>
    <div className='flex flex-col justify-center pl-5'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 drop-shadow'>Find us here:</h1>
                <p><i>Email: zvone.transport@gmail.com</i></p>
                <p><i>Tel: +389 71 207 548</i></p>
            </div>
        </div>
    </div>
  )
}

export default Contact
