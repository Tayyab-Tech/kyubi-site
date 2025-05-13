import React from 'react';

function Logo() {
  return (
    <div className="flex justify-center md:px-[60px] md:py-[30px] px-[20px] py-[20px]">
      <div className="flex flex-wrap justify-between items-center md:w-[80%] w-[90%]">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="w-[110px] object-contain">
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
