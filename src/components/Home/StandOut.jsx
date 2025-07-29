
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const features = [
  "Live Masterclasses by Experts",
  "1-on-1 Mentorship & Career Coaching",
  "Real-World Projects (Minor + Major)",
  "Guaranteed Internship Opportunities",
  "Personalized Career Roadmap",
  "Live Corporate Exposure",
  "Mock Interviews & Skill Assessments",
  "Resume & Portfolio Mastery",
  "Placement Support & Job Access",
  "Exclusive Resource Vault"
];

const others = [true, false, true, false, true, false, false, false, true, false];
const us = Array(features.length).fill(true);

export default function ComparisonTable() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 md:px-8 flex justify-center font-['Poppins']">
  <div className="w-full max-w-[1100px]">
    {/* Section Heading */}
    <div className="text-center mb-8 md:mb-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">
        Here's Why <span className="text-orange-500">Baoiam Stands Out!</span>
      </h2>
      <p className="text-black text-lg md:text-[24px] max-w-3xl mx-auto mt-3 md:mt-5">
        Our commitment to quality, dedication and achievement oriented mindset sets us apart
      </p>
    </div>

    {/* Main Table Container */}
    <div className="bg-white rounded-xl md:rounded-[20px] shadow-lg p-4 md:p-6 lg:p-8 overflow-x-auto  ">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 min-w-[600px] md:min-w-0">
        {/* Features Column */}
        <div className="md:w-1/2 flex flex-col min-w-[250px] bg-gray-50 p-2 rounded-lg">
          <div className="bg-[#B2B2B2] rounded-lg text-center py-3 md:py-5 font-medium text-2xl md:text-3xl text-[#1D2026]">
            Features
          </div>
          <div className="flex flex-col bg-gray-50 rounded-lg border border-gray-50">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className="py-3 md:py-4 px-2 md:px-3 text-black font-medium text-lg md:text-xl border-b border-gray-50 last:border-b-0 min-h-[50px] md:h-[60px] flex items-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Others Column */}
        <div className="md:w-1/4 flex flex-col min-w-[120px] bg-gray-50 p-2 rounded-lg">
          <div className="bg-[#B2B2B2] rounded-lg text-center py-3 md:py-5 font-medium text-2xl md:text-3xl text-[#1D2026]">
            Others
          </div>
          <div className="flex flex-col bg-gray-50 rounded-lg border border-gray-50">
            {others.map((val, idx) => (
              <div 
                key={idx} 
                className="py-3 md:py-4 flex justify-center items-center border-b border-gray-50 last:border-b-0 min-h-[50px] md:h-[60px]"
              >
                {val ? (
                  <FaCheckCircle className="text-green-500 text-xl" />
                ) : (
                  <FaTimesCircle className="text-red-500 text-xl" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Us Column */}
        <div className="md:w-1/4 flex flex-col min-w-[120px] bg-gray-50 p-2 rounded-lg">
          <div className="bg-[#B2B2B2] rounded-lg text-center py-3 md:py-5 font-medium text-2xl md:text-3xl text-[#1D2026]">
            Us
          </div>
          <div className="flex flex-col bg-gray-50 rounded-lg border border-gray-50">
            {us.map((val, idx) => (
              <div 
                key={idx} 
                className="py-3 md:py-4 flex justify-center items-center border-b border-gray-50 last:border-b-0 min-h-[50px] md:h-[60px]"
              >
                <FaCheckCircle className="text-green-500 text-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
  );
}


