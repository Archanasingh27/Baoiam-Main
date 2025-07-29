import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaLightbulb, FaHandshake, FaStar } from "react-icons/fa";


const WhyUsSection = () => {
  return (
    <div className="bg-gray-50 mt-10 py-12 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[48px] font-semibold">
          What Makes Us <span className="text-orange-500">Different</span>
        </h2>
        <p className="mt-4 text-black text-[24px] mx-auto">
          The values, support, and care that makes us more than any another learning platform.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="group bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 ">
          <div className=" w-[100px] h-[100px] bg-white-50  p-4 rounded-full border-2 border-orange-500 group-hover:border-transparent mb-10">
           <FaGraduationCap
             className="w-[60px] h-[60px] text-black transition-transform duration-300 group-hover:scale-175"
               />

          </div>
          <p className="text-gray-800 font-medium text-[22px]">Student-Centric Learning Approach</p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
          <div className="w-[100px] h-[100px] bg-white-50 p-4 rounded-full border-2 border-orange-500 group-hover:border-transparent mb-10">
            <FaLightbulb className="w-[60px] h-[60px] text-yellow-300 transition-transform duration-300 group-hover:scale-175" />
          </div>
          <p className="text-gray-800 font-medium text-[22px]">Innovative Projects for Real-Life Impact</p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
          <div className="w-[100px] h-[100px] bg-white-50 p-4 rounded-full border-2 border-orange-500 group-hover:border-transparent mb-10">
            <FaHandshake className="w-[60px] h-[60px] text-yellow-300  transition-transform duration-300 group-hover:scale-175" />
          </div>
          <p className="text-gray-800 font-medium text-[22px]">Building Community via Events & Collaboration</p>
        </div>

        {/* Card 4 */}
        <div className="group bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
          <div className="w-[100px] h-[100px] bg-white-50 p-4 rounded-full border-2 border-orange-500 group-hover:border-transparent  mb-10">
            <FaStar className="w-[60px] h-[60px] text-yellow-300 transition-transform duration-300 group-hover:scale-175" />
          </div>
          <p className="text-gray-800 font-medium text-[22px]">Passionate, Experienced Team of Experts</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;