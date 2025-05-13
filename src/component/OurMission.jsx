import React from 'react'

export default function OurMission() {
  return (
    <>
      <div className='bg-black text-white flex md:flex-row flex-col md:px-[60px] md:py-[30px] px-[20px] py-[20px]'>
        <div className='md:w-[50%] w-[100%]'>
            <div className='md:w-[80%]  w-[100%] flex flex-col justify-center gap-[30px] md:h-[500px] '>
                <h1 className='md:text-6xl text-2xl font-extrabold leading-tight'>
                    Our <br className='hidden md:block' /> Mission
                </h1>
                <p className='py-4'>
                    To empower global business leaders to create innovative experiences for their customers, all while reaching their revenue goals.
                </p>
                <p>
                    We stand on the frontier of art and yourbusiness revenue.
                </p>
            </div>
        </div>
        <div className='md:w-[50%]  w-[100%] md:h-[500px] h-[400px]'>
            <div className='relative w-full md:h-[500px] h-[400px] object-cover overflow-hidden'>
                <img className='w-full h-full' src="/image3.png" alt="bg-img" />
            </div>
        </div>
     </div> 
    </>
  )
}
