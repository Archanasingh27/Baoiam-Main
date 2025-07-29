import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import img1 from "../../assets/Pages/About/img1.jpg";



const Header = () => {
  return (
    <div className='bg-white text-[#333] mb-4'>
      <div className="w-full h-auto mx-auto  shadow-md overflow-hidden">
        <div className="relative h-[80vh]">
         
          <div className="fixed top-0 left-0 w-full z-30">
            <Navbar/>
          </div>

        <div className="relative w-full h-full">
  <img
    src={img1}
    alt="Header"
    className="w-full h-full object-cover block"
  />

  {/* First Gradient: Orange */}
  <div className="absolute inset-0 bg-[#FF7C27] opacity-50"></div>

  {/* Second Gradient: Black with 50% opacity */}
  <div className="absolute inset-0 bg-black opacity-30"></div>
</div>


          {/* Overlay */}
          <div className="absolute inset-0  z-10"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4 mt-12">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Heading Tagline lorem psumlorem <br />
              lorem ipsum lorem ipsum
            </h1>

            <p className="mt-6 max-w-2xl text-base md:text-lg">
              jdu dkjd dhdji djdji sjhdsher jhdf ajhnduis kjhduif <br />
              adjhfhiuf hdskjhdhfjuhd fhjdhiuhadjh ddiiuj
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full  hover:bg-transparent hover:text-orange-500 transition duration-200">
                Apply Now →
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-600 transition duration-200">
                Talk to our Counsellor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;