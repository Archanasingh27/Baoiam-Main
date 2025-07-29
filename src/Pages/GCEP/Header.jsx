import React from 'react';
import Navbar from '../../components/Home/Navbar.jsx';
import img1 from "../../assets/Pages/GCEP/img1.jpg";

const Header = () => {
  return (
    <div className="bg-white text-[#333] mb-4">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] pt-[80px]">

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <img
            src={img1}
            alt="Header Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-20"></div>

        {/* Content  */}
        <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center text-white">
          <div className="w-full transform translate-y-[-5%]">
            <h1 className=" text-[80px] xs:text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[280px] font-semibold leading-[0.9] font-Poltawski Nowy mb-2 sm:mb-4">
              GCEP
            </h1>

            <p className="mb-3 sm:mb-6 text-[24px] xs:text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[48px] font-semibold">
              <span className="text-orange-400">G</span>lobal{" "}
              <span className="text-orange-400">C</span>ollabo{" "}
              <span className="text-orange-400">E</span>ducational{" "}
              <span className="text-orange-400">P</span>artnership
            </p>

            <p className="mx-auto max-w-[300px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-normal">
              GCEP (Global Collabo Educational Partnership) is an initiative by BAOIAM aimed at building
              strong, innovative alliances with schools, colleges, and educational institutions worldwide.
              Through GCEP, we collaborate to enhance the quality of education and create new opportunities
              for students and educators alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;