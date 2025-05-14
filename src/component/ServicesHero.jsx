import React from 'react'
import Link from 'next/link'
function ServicesHero() {
    return (
        <div>
            <div className='bg-black text-white flex md:flex-row flex-col md:px-[60px] md:py-[20px] px-[20px] py-[20px]'>
                <div className='md:w-[50%] w-[100%]'>
                    <div className='md:w-[80%]  w-[100%] flex flex-col justify-center gap-[30px] md:h-[500px] h-auto mb-4 '>
                        <h1 className='md:text-7xl text-4xl font-extrbold'>Services</h1>
                        <p className='py-4'>We really are obsessed with
                           <span className='inline md:block '> creating delightful digital products,</span>
                            brands, and experiences.</p>
                        <div>
                            <Link href="/contact" className='bg-[#e06010] py-4 px-3 cursor-pointer'>CONTACT</Link>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%]  w-[100%] md:h-[500px] h-[400px] '>
                    <div className='relative w-full md:h-[500px] h-[400px] object-cover overflow-hidden'>
                        <img className='w-full h-full' src="/image1.png" alt="bg-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHero
