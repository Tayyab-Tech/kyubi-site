import React from 'react';

export default function ClientDetail() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-6 bg-gray-50">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full mb-16">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left  bg-white shadow-xl p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Client Name</h1>
          <p className="text-lg text-gray-600">
            Client description goes here, detailing the project or collaboration.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
            <img
              src="/client1.png"
              alt="Client"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Row 2 - Reversed */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 max-w-6xl w-full mb-16">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left bg-white shadow-xl p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Another Client</h1>
          <p className="text-lg text-gray-600">
            Another client description goes here to showcase different work.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
            <img
              src="/client1.png"
              alt="Client"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Row 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full mb-16">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left  bg-white shadow-xl p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Client Name</h1>
          <p className="text-lg text-gray-600">
            Client description goes here, detailing the project or collaboration.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
            <img
              src="/client1.png"
              alt="Client"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Row 4 - Reversed */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 max-w-6xl w-full mb-16">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left bg-white shadow-xl p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Another Client</h1>
          <p className="text-lg text-gray-600">
            Another client description goes here to showcase different work.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
            <img
              src="/client1.png"
              alt="Client"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
