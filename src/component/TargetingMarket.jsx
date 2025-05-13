import React from 'react'
import Link from 'next/link'
import { Paintbrush, Smartphone, Globe, Gamepad2, Target } from 'lucide-react';
export default function TargetingMarket() {
  return (
    <>
     <div className='bg-black text-white flex md:flex-row flex-col md:px-[60px] md:py-[30px] px-[20px] py-[20px]'>
        <div className='md:w-[50%] w-[100%]'>
            <div className='md:w-[80%]  w-[100%] flex flex-col justify-center gap-[30px] md:h-[500px] '>
                <h1 className='md:text-6xl text-2xl font-extrabold leading-tight'>
                    Targeting your market <br className='hidden md:block' /> head on
                </h1>
                <div className='flex flex-wrap gap-6 mt-4'>
                    {[
                    { icon: <Paintbrush size={40} />, label: 'Design' },
                    { icon: <Smartphone size={40} />, label: 'Mobile' },
                    { icon: <Globe size={40} />, label: 'Web' },
                    { icon: <Gamepad2 size={40} />, label: 'Games' },
                    { icon: <Target size={40} />, label: 'Marketing' },
                    ].map((item, i) => (
                    <div key={i} className='flex flex-col items-center text-sm'>
                        {item.icon}
                        <span className='mt-2'>{item.label}</span>
                    </div>
                    ))}
                </div>
                <Link className='text-[#e06010]' href="/services">MORE ABOUT SERVICES</Link>
            </div>
        </div>
        <div className='md:w-[50%]  w-[100%] md:h-[500px] h-[400px] md:pt-10 pt-0'>
            <div className='relative w-full md:h-[500px] h-[400px] object-cover overflow-hidden'>
                <img className='w-full h-full' src="/image3.png" alt="bg-img" />
            </div>
        </div>
     </div> 
    </>
  )
}
