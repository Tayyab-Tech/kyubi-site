import Link from 'next/link'
import React from 'react'
export default function ShippingShoots() {
  return (
    <>
     <div className='bg-white text-black flex md:flex-row flex-col md:py-[60px] md:px-[60px] px-[20px] py-[10px]'>
        <div className='md:w-[50%] w-[100%]'>
            <div className="md:w-[80%] w-full flex flex-col justify-center gap-[30px] md:h-[500px]">
                <h1 className="md:text-6xl text-2xl font-extrabold">Shipping moonshots</h1>

                {/* Projects Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    {/* Project Item */}
                    <div className="flex items-start gap-3">
                    <span>🛫</span>
                    <div>
                        <h3 className="font-medium">Fluently</h3>
                        <p className="text-gray-500 text-sm">Mobile, Branding</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-3">
                    <span>🎯</span>
                    <div>
                        <h3 className="font-medium">Pair Play</h3>
                        <p className="text-gray-500 text-sm">Digital marketing</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-3">
                    <span>🧠</span>
                    <div>
                        <h3 className="font-medium">Riiid Labs</h3>
                        <p className="text-gray-500 text-sm">Web, Branding</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-3">
                    <span>🚀</span>
                    <div>
                        <h3 className="font-medium">Joye</h3>
                        <p className="text-gray-500 text-sm">Hyper-casual games</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-3">
                    <span>💬</span>
                    <div>
                        <h3 className="font-medium">Tinder Gold</h3>
                        <p className="text-gray-500 text-sm">Chatbots, Branding</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-3">
                    <span>🌐</span>
                    <div>
                        <h3 className="font-medium">Famelab</h3>
                        <p className="text-gray-500 text-sm">Web, Branding</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-3">
                    <span>📱</span>
                    <div>
                        <h3 className="font-medium">World Star</h3>
                        <p className="text-gray-500 text-sm">Mobile, Branding</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        <div className='md:w-[50%]  w-[100%] md:h-[500px] h-[400px] md:pt-10 pt-0'>
            <div className='relative w-full md:h-[500px] h-[400px] object-cover overflow-hidden'>
                <img className='w-full h-full' src="/image2.png" alt="bg-img" />
            </div>
        </div>
     </div> 
    </>
  )
}
