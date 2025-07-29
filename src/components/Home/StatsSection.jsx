import React from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/Home/StatsSection/1.webp"
import img2 from "../../assets/Home/StatsSection/2.webp"
import img3 from "../../assets/Home/StatsSection/3.webp"

export default function StatsSection() {
  return (

    <section className="w-full flex flex-col items-center bg-white pt-5 font-['Poppins'] px-4 mt-14">
  {/* Top Black Bar */}
  <div className="w-full max-w-[1070px] min-h-[118px] rounded-[20px] bg-black text-white px-6 md:px-[60px] lg:px-[80px] py-5 md:py-[20px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
    <div className="text-center">
      <p className="text-3xl font-bold flex items-center justify-center">
        4.8 <FaStar className="ml-1 text-yellow-400 text-xl" />
      </p>
      <p className="text-sm text-gray-300">
        <span className="text-xl font-medium">Ratings</span> from 10k+ students
      </p>
    </div>
    <div className="text-center">
      <p className="text-3xl font-bold">200 +</p>
      <p className="text-xl text-gray-300 font-medium">Hiring Partners</p>
    </div>
    <div className="text-center">
      <p className="text-3xl font-bold">50 LPA</p>
      <p className="text-xl text-gray-300 font-medium">Highest Package</p>
    </div>
  </div>

  {/* Spacer */}
  <div className="h-8 md:h-12"></div>

  {/* Accreditation Section */}
  <div className="w-full max-w-6xl text-center px-2 mt-8">
    <h2 className="text-[22px] md:text-[30px] lg:text-[37px] font-semibold mb-4 md:mb-6">
      We are accredited by
    </h2>
    <div className="h-auto py-4 flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-[70px]">
      <img
        src={img2}
        alt="DPIIT Startup India"
        className="h-[60px] md:h-[80px] lg:h-[130px] w-auto max-w-[180px] md:max-w-[220px] lg:max-w-[260px] object-contain"
      />
      <img
        src={img1}
        alt="MSME"
        className="h-[60px] md:h-[80px] lg:h-[130px] w-auto max-w-[140px] md:max-w-[220px] lg:max-w-[260px] object-contain"
      />
      <img
        src={img3}
        alt="ISO 9001"
        className="h-[60px] md:h-[80px] lg:h-[130px] w-auto max-w-[120px] md:max-w-[220px] lg:max-w-[260px] object-contain"
      />
    </div>
  </div>
  {/* Divider at the end */}
  <hr className="w-full  border-t-[2px] border-gray-100 mt-14" />
      
</section>

  );
}
