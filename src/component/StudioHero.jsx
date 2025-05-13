import React from 'react'
import Link from 'next/link'

function StudioHero() {
  return (
     <>
     <div className='bg-white text-black flex md:flex-row flex-col px-[60px] pb-[20px]'>
        <div className='md:w-[50%] w-[100%]'>
            <div className='md:w-[80%]  w-[100%] flex flex-col justify-center gap-[30px] md:h-[500px] '>
                <h1 className='text-7xl font-bold'>Studio</h1>
                <p className='py-4'>We a cross-functional team of <span className='inline md:block'>dedicated professionals passionate </span>about product.</p>
                <div>
                    <Link href="/contact" className='bg-[#e06010] py-4 px-3 cursor-pointer'>CONTACT</Link>
                </div>
            </div>
        </div>
        <div className='md:w-[50%]  w-[100%] h-[500px] md:pt-0 pt-10'>
            <div className='relative w-full max-h-[500px] object-cover overflow-hidden'>
                <img className='w-full h-full' src="/image2.png" alt="bg-img" />
            </div>
        </div>
     </div> 
    </>
  )
}

export default StudioHero
