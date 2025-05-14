import React from 'react';

function TheProcess() {
  // Array of process steps
  const processSteps = [
    {
      imgSrc: 'img1.png',
      alt: 'Discovery',
      title: 'Discovery',
      description:
        'Research user behaviors and collaborate with domain experts to set goals while factoring in accessible business models and industry standards.',
    },
    {
      imgSrc: 'img1.png',
      alt: 'Navigation',
      title: 'Navigation',
      description:
        'Collect and prepare findings to better understand the problem and achieve the fastest path to reaching user goals and business objectives.',
    },
    {
      imgSrc: 'img1.png',
      alt: 'Conception',
      title: 'Conception',
      description:
        'Rigorously evaluate test and iterate on navigation patterns to introduce the foundation of a future brand and look & feel - visual conception.',
    },
    {
      imgSrc: 'img1.png',
      alt: 'Visual Design',
      title: 'Visual Design',
      description:
        'Once the brand alignment is achieved we will move onto adding fidelity to the rest of the product considering your company goals and go-to-market strategy.',
    },
    {
      imgSrc: 'img1.png',
      alt: 'Interaction',
      title: 'Interaction',
      description:
        'Design and implement user experience motion design system and interaction patterns based on the previously developed vision and branding strategy.',
    },
    {
      imgSrc: 'img1.png',
      alt: 'Support',
      title: 'Support',
      description:
        'We don’t just believe improvement is possible, we believe it’s necessary. We like to foster ongoing relationships with my clients as there’s always room for keeping up with times.',
    },
  ];

  return (
    <section className="bg-gray-100 md:px-[60px] px-[20px] py-[30px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">The process</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mt-10 leading-relaxed">
          Kyubi is your final decision. We{' '}
          <span className="inline md:block">
            combine and use the experience of
          </span>{' '}
          our managers, designers and{' '}
          <span className="inline md:block">
            developers to find solutions for the
          </span>{' '}
          most ambitious and innovative ideas.
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 text-center md:text-start">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col item-center  ">
                <div className='flex justify-center '>

                
              <div className="w-24 h-24 md:w-32 md:h-32 mb-4 flex">
                <img
                  src={step.imgSrc}
                  alt={step.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TheProcess;