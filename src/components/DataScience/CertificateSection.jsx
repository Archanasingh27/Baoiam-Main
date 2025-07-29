import React from "react";
import certificateImage from "../../assets/CoursesLayout/CoursesPage/certificate.jpg";

export default function CertificateSection() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-10 border-b-2 border-gray-200 font-['Poppins'] ">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-[40px] font-poppins md:text-4xl font-semibold text-black">
           <span className="text-orange-500">Earn Certificates</span> That Speak for Your<span className="text-orange-500"> Skills</span> 
        </h2>
        <p className="mt-3 text-black mb-9 font-medium font-poppins text-[18px]">
          Showcase your achievement with an industry-recognized certificate from Baoiam.
        </p>
      </div>

      {/* Certificate Image with only one shadow container */}
      <div className="flex justify-center">
        <div className="rounded-[10px]  overflow-hidden">
          <img
            src={certificateImage}
            alt="Certificate"
            className="w-[780px] h-[550px] object-contain rounded-[10px] border-t-2 border-r-2"
          />
        </div>
      </div>
    </div>
  );
}