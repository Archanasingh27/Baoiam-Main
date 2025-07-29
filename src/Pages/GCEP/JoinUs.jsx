import React from 'react';
import seminarImage from '../../assets/Pages/GCEP/img2.jpg';

const WhyJoinGCEP = () => {
  return (
    <div className="relative w-full min-h-[600px] bg-white flex flex-col lg:flex-row justify-center items-center text-center lg:text-left px-4 sm:px-6 lg:px-10 py-8 lg:py-0">
      {/* Mobile Image*/}
      <div className="lg:hidden w-full max-w-[400px] mx-auto p-[5px] bg-gradient-to-l from-white to-[#FF6501] rounded-xl mb-8">
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src={seminarImage}
            alt="Seminar"
            className="w-full h-[250px] sm:h-[300px] object-cover"
          />
        </div>
      </div>

      {/* Gradient Content */}
      <div className="w-full lg:w-[calc(100%-200px)] xl:w-[1114px] h-full bg-gradient-to-r from-black via-[#2b0f00] to-orange-500 text-white flex flex-col justify-center items-center lg:items-start p-6 sm:p-8 lg:pl-[280px] xl:pl-[300px] rounded-xl lg:rounded-l-none relative lg:left-[180px] xl:left-[200px]">
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4">
          Why join GCEP ?
        </h2>

        <p className="max-w-[650px] text-lg sm:text-xl lg:text-2xl font-medium mb-4 sm:mb-6">
          Empower Your Institution with Global Innovation & Collaboration
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-2 text-base sm:text-[17px] lg:text-[18px] mb-6 w-full list-disc list-inside">
          <li>Global Exposure</li>
          <li>Access to Cutting-Edge Tools</li>
          <li>Student-Centric Opportunities</li>
          <li>Educator Empowerment</li>
          <li>Collaborative Innovation</li>
          <li>Recognition & Growth</li>
        </div>

        <button className="bg-white text-lg sm:text-xl lg:text-2xl text-black px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition">
          Join Now
        </button>
      </div>

      {/* Desktop Image */}
      <div className="hidden lg:block absolute left-[50px] xl:left-[200px] top-1/2 -translate-y-1/2 p-[5px] bg-gradient-to-l from-white to-[#FF6501] rounded-xl z-10">
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src={seminarImage}
            alt="Seminar"
            className="w-[400px] h-[350px] xl:h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyJoinGCEP;