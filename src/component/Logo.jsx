import React from 'react';

function Logo() {
  return (
    <div className="bg-white px-4 py-6">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="max-w-[140px] w-full  object-contain">
            <img
              src={`/logo-${num}.png`}
              alt={`Logo ${num}`}
              className="h-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logo;
