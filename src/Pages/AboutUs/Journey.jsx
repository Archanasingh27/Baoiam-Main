import React from 'react';

const JourneySection = () => {
  return (
    <div className="py-12 px-4 md:px-10 bg-white">
      {/* Heading */}
      <h2 className="text-[48px] font-bold text-center mb-2">
        Our <span className="text-orange-500">Journey</span>
      </h2>
      <p className="text-center text-black text-[24px] mx-auto mb-10">
        jdu dkjd dhdjhi djdij shjdher jhdf ajhjhduis kjhduif adjhfjhiuf
      </p>

      {/* Grid Structure */}
      <div className="grid grid-cols-3 max-w-5xl mx-auto ">
        {/* Left Side */}
        <div className="flex flex-col -mr-20 items-center font-poppins justify-center space-y-32 h-[467px]">
          <div className=" bg-white shadow border-r-4 border-orange-500 p-4 text-justify text-[24px]">
            <p>Over 4,000 students have interned with us and actually learned something useful.</p>
          </div>
        </div>

        {/* Center Road */}
        <div className="relative flex justify-center h-[467px]">
          <div className="w-8 bg-gray-400  relative">
            {/* White dashed stripes */}
            <div className="absolute inset-0 flex flex-col justify-between items-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-1 h-14 bg-white"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col -ml-20 items-center justify-between font-poppins space-y-32 h-[467px]">
          <div className="bg-white shadow border-l-4 border-orange-500 p-4 text-justify text-[24px]">
            <p>We've been at this for 4+ years, and we still get excited about every project.</p>
          </div>

          <div className="bg-white shadow border-l-4 border-orange-500 p-4  text-justify text-[24px]">
            <p>Many of them landed solid jobs after working with us—and that's what matters.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
