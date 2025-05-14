import React from 'react'

export default function Team() {
    const Ourteam = [
    {
        image: '/client1.png',
        title: 'Zinoviy',
        description:
            'Backend Engineer',
    },
    {
        image: '/client1.png',
        title: 'Natalie',
        description:
            'Product Designer',
    },
    {
        image: '/client1.png',
        title: 'Sasha',
        description:
            'Product Designer',
    },
    {
        image: '/client1.png',
        title: 'Dima',
        description:
            'Mobile Developer',
    },
    {
        image: '/client1.png',
        title: 'Dennis',
        description:
            'Product Designer',
    },
    {
        image: '/client1.png',
        title: 'Tania',
        description:
            'Product Designer',
    },
    {
        image: '/client1.png',
        title: 'Yaro',
        description:
            'Product Designer',
    },
    {
        image: '/client1.png',
        title: 'Anastasia',
        description:
            'Product Designer',
    },
];
  return (
    <>
     <div className="w-full bg-[#f2f2f2] text-black md:px-[60px] md:py-[30px] px-[20px] py-[20px]">
            <div className="min-w-full">
                <h2 className="md:text-4xl text-2xl font-bold mb-4">The Team</h2>
                <p className="text-gray-700 mb-10 max-w-2xl">
                    We're all different yet bound by the <span className="inline md:block">same goal - to innovate the digital  </span> world one awesome product at the <span className="inline md:block">time.</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Ourteam.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <div className='w-full h-64 object-cover overflow-hidden '>
                                <img className='w-full ' src={item.image} alt="client-img" />                                
                            </div>
                            <div className=''>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    </>
  )
}
