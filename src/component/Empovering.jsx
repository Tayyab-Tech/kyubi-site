import React from 'react'
import Link from 'next/link'

export default function Empovering() {
  return (
    <>
     <div className='bg-white text-black flex md:flex-row flex-col md:px-[60px] md:py-[60px] px-[20px] py-[20px]'>
        <div className='md:w-[50%] w-[100%]'>
            <div className='md:w-[80%] w-full flex flex-col justify-center gap-[30px] md:h-[500px] text-black'>
                <h1 className='md:text-6xl text-2xl font-extrabold leading-tight'>
                    Empowering <br className='hidden md:block' /> partnerships
                </h1>

                <p className='text-lg'>
                    Discovering talent akin to Kyubi’s is exceedingly rare. Kyubi possesses a remarkable ability to not only
                    conceive captivating designs but also seamlessly specializes in both web and mobile development. These skills are not easily taught or learned; they are often inherent to the individual.
                </p>

                {/* Author Info */}
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <img
                        src="/client.png" 
                        alt="Jonathan Badeen"
                        width={48}
                        height={48}
                        className='rounded-full'
                        />
                        <div>
                        <p className='font-semibold'>Jonathan Badeen</p>
                        <p className='text-gray-500 text-sm'>Founder at Tinder</p>
                        </div>
                    </div>

                    {/* Signature */}
                    <img
                        src="/signature.png"
                        alt="Signature"
                        width={120}
                        height={60}
                        className='mt-4'
                    />
                </div>

                <Link href="/clients" className='text-[#e06010] font-semibold'>
                    MORE ABOUT CLIENTS
                </Link>
                </div>
        </div>
        <div className='md:w-[50%]  w-[100%] md:h-[500px] h-[400px] md:pt-10 pt-0'>
            <div className='relative w-full md:h-[500px] h-[400px] object-cover overflow-hidden'>
                <img className='w-full h-full' src="/image4.png" alt="bg-img" />
            </div>
        </div>
     </div> 
    </>
  )
}
