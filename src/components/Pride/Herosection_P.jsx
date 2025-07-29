import React, { useState } from "react";
import bonnay from "../../assets/Pride/Herosection_P/bonnay.webp";
import { Link } from "react-router-dom";

const HeroSection_P = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-12 md:pt-16 lg:pt-10 font-['Poppins']">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col md:ml-8 lg:ml-16 xl:ml-14 md:flex-row items-center">
        {/* LEFT SIDE - Content */}
        <div className="flex-1 order-2 md:order-1">
          <h1 className="text-3xl w-[630px] sm:text-4xl md:text-5xl lg:text-[55px] font-medium text-black leading-20 mb-4 md:mb-6">
            Living With <span className="text-[#8A38F5]">Pride,</span> Leading
            With <span className="text-[#FF6501]">Purpose.</span>
          </h1>

          <p className="text-[#222222] w-[650px] text-base sm:text-lg md:text-[24px] mb-6 md:mb-6 md:mt-5 text-justify">
            Unlock your potential with transformative, expert-led courses
            designed to fuel your ambition, celebrate your identity, and empower
            your journey.
          </p>

          <Link to="/DataScience">
            <button className="bg-[#FF6501] hover:bg-[#FF8434] px-[20px] py-[5px] text-white font-semibold rounded-md transition duration-300 text-[20px] md:font-medium">
              Enroll Now
            </button>
          </Link>

          {/* The Modal */}
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex-1 order-1 md:order-2 relative flex justify-center w-full">
          {/* Orange blob background */}
          <div className="absolute -z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-orange-500 rounded-[35%_65%_65%_35%/45%_45%_55%_55%] opacity-100"></div>

          {/* Image */}
          <img
            src={bonnay}
            alt="Hero"
            className="relative w-56 sm:w-64 md:w-[370px] lg:w-[460px] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection_P;
