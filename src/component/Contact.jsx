import React from 'react';

function Contact() {
  return (
    <div className="bg-black text-white flex md:flex-row flex-col px-[60px] py-[40px]">
      {/* Left: Form Fields */}
      <div className="md:w-1/2 w-full flex flex-col justify-center gap-6 md:pr-10">
        <h1 className="text-6xl font-bold leading-tight">Entering the<br />new era</h1>
        {/* Form */}
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-15">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm">Your Name</label>
              <input
                type="text"
                placeholder="Alex Smith"
                className="bg-[#1a1a1a] text-white p-3 outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm">Your E-mail</label>
              <input
                type="email"
                placeholder="mail@example.com"
                className="bg-[#1a1a1a] text-white p-3 outline-none"
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-15'>


            <div>
              <label className="mb-1 text-sm">Description</label>
              <textarea
                rows="3"
                placeholder="A couple of sentences will do"
                className="bg-[#1a1a1a] text-white w-full p-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 text-sm">Budget</label>
              <div className="flex flex-col gap-2">
                <label><input type="radio" name="budget" /> $5,000 - $20,000</label>
                <label><input type="radio" name="budget" /> $20,000 - $70,000</label>
                <label><input type="radio" name="budget" /> More than $70,000</label>
              </div>
            </div>
          </div>
          <button className="bg-white text-black py-3 px-6 mt-4 hover:bg-gray-200 font-bold w-fit">
            LET’S DO IT
          </button>
        </form>
      </div>

      {/* Right: Image and Design */}
      <div className="md:w-1/2 w-full h-[500px] flex items-center justify-center pt-10 md:pt-0">
        <div className="relative w-full max-w-[450px]">
          <img src="/image5.png" alt="Naruto power pose" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
