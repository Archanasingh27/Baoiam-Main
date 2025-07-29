import React from "react";
import { FiSearch } from "react-icons/fi";
import coinsBag from "../../assets/CoursesLayout/CoursesPage/CoinBag.png";


const DiscountBanner = () => {
  return (
    <div className="w-full py-6 flex justify-center px-4 mt-18 mb-18">
      {/* Inner orange container */}
      <div className="w-[1200px] h-[184px] bg-[#FF6501] rounded-xl flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Left side text and form */}
        <div className="w-full md:w-2/3 p-6 md:py-4 md:px-12">
          <h2 className="text-white text-[20px] md:text-[32px] font-semibold mb-1">
            Your Network = Your Net Worth!
          </h2>
          <p className="text-white text-[14px] md:text-[22px] mb-4">
            Refer students. Earn rewards.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 max-w-sm">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pr-10 pl-4 py-2 rounded-md text-[14px] md:text-[16px] placeholder-white bg-[#FF914D] text-white focus:outline-none focus:ring-2 focus:ring-white"
              />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />
            </div>

            <button className="bg-black text-white px-4 py-2 rounded-md text-[14px] md:text-[16px] hover:bg-gray-900 transition">
              Refer Now
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-[150px] md:w-[200px] lg:w-[232px] mr-6 md:mr-10">
          <img
            src={coinsBag}
            alt="Coins and Bag"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;