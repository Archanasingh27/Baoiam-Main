import React, { useState } from "react";
import rocket from "../../assets/Home/DataScienceBanner/rocket.webp";
import human from "../../assets/Home/DataScienceBanner/human.webp";
import { Link } from "react-router-dom";
import ContactForm from "../../Pages/ContactForm";

const DataScienceBanner = () => {
    const [showModal, setShowModal] = useState(false);
  
  return (
    <div
      className="
        w-full max-w-[1200px]
        rounded-[20px] shadow-md
        flex flex-col md:flex-row
        justify-between items-center
        mx-auto my-10 p-6
        relative overflow-hidden
        font-['Poppins']
      "
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 101, 1, 0.06) 0%, rgba(255, 101, 1, 0.6) 100%)",
      }}
    >
      {/* Left Content */}
      <div className="flex flex-col flex-1 w-full md:w-1/2">
        {/* Rocket and Headline */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          <img
            src={rocket}
            alt="Rocket"
            className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-contain"
          />

          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-[40px] font-semibold text-[#FF6501]">
              Data Science{" "}
              <span className="text-black text-xl md:text-2xl font-medium">
                Career
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mt-2">
              Starts at{" "}
              <span className="line-through text-lg md:text-xl font-medium">
                ₹79,999
              </span>{" "}
              <span className="text-[#FF6501] font-semibold text-[32px] md:text-[40px]">
                ₹4,999
              </span>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-4 md:mt-6 text-center md:text-left text-lg md:text-[28px] font-medium px-2 md:px-0">
          <p className="text-gray-700">
            <span className="text-orange-500">12 Months</span> |{" "}
            <span className="text-black">Live classes</span> |{" "}
            <span className="text-orange-500">Projects</span> |{" "}
            <span className="text-black">Placement Support</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-4 md:mt-5 xl:ml-20 flex flex-col md:flex-row gap-3 md:gap-6 items-center md:items-start text-base md:text-[20px] font-medium">
          <Link to="/DataScience">
            <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-[#7B7B7B] w-full md:w-auto">
              Enroll Now
            </button>
          </Link>
          <div>
            {/* The Button */}
            <button
              className=" text-black bg-white rounded-lg py-2 px-4 text-xl hover:bg-[#7B7B7B]"
              onClick={() => setShowModal(true)}
            >
              Talk to our Counsellor
            </button>

            {/* The Modal */}

            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="relative max-w-xl w-full  "
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Cross Button */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-20 right-6 text-2xl text-gray-600 hover:text-black"
                  >
                    &times;
                  </button>

                  <ContactForm onClose={() => setShowModal(false)} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-6 md:mt-0 flex justify-center md:block md:relative md:bottom-0 md:right-0 w-full md:w-auto">
        <img
          src={human}
          alt="Data Analytics"
          className="w-[220px] h-[280px] md:w-[300px] md:h-[350px] object-cover"
        />
      </div>
    </div>

    //    <div
    //   className="
    //     sm:w-full md:w-[1200px]
    //     sm:h-auto md:h-[350px]
    //     rounded-[20px] shadow-md
    //     flex flex-col md:flex-row justify-between
    //     mx-auto mt-10 mb-10 p-6
    //     relative overflow-hidden
    //     font-['Poppins']
    //   "
    //   style={{
    //     background:
    //       "linear-gradient(180deg, rgba(255, 101, 1, 0.06) 0%, rgba(255, 101, 1, 0.6) 100%)",
    //   }}
    // >
    //   {/* Left Side - Content */}
    //   <div className="flex flex-col w-full mt-5">
    //     {/* Top Row - Rocket and first two text paragraphs */}
    //     <div className="flex flex-col sm:flex-col md:flex-row items-start gap-6 md:gap-15">
    //       {/* Rocket Image */}
    //       <div className="flex-shrink-0">
    //         <img
    //           src={rocket}
    //           alt="RocketImg"
    //           className="w-[160px] h-[160px] object-contain mx-auto md:mx-0"
    //         />
    //       </div>

    //       {/* First two paragraphs */}
    //       <div className="text-left mt-4 md:mt-0">
    //         <h1 className="text-xl md:text-[40px] font-semibold text-[#FF6501]">
    //           Data Science{" "}
    //           <span className="text-black text-2xl font-medium">Career</span>
    //         </h1>
    //         <p className="text-2xl font-medium mt-1">
    //           Starts at{" "}
    //           <span className="line-through text-xl font-medium">₹79,999</span>{" "}
    //           <span className="text-[#FF6501] font-semibold text-[40px]">₹4,999</span>
    //         </p>
    //       </div>
    //     </div>

    //     {/* Third paragraph */}
    //     <div className="mt-6 ml-4 md:ml-10 text-[28px] font-medium">
    //       <p className="text-gray-700">
    //         <span className="text-orange-500">12 Months</span> |{" "}
    //         <span className="text-black">Live classes</span> |{" "}
    //         <span className="text-orange-500">Projects</span> |{" "}
    //         <span className="text-black">Placement Support</span>
    //       </p>
    //     </div>

    //     {/* Buttons */}
    //     <div className="mt-5 flex flex-col md:flex-row gap-4 md:gap-6 ml-10 md:ml-[180px] text-[20px] font-medium">
    //       <button className="bg-black text-white text-center px-4 py-1 rounded-lg hover:bg-orange-500">
    //         Enroll Now
    //       </button>
    //       <button className="bg-white px-4 py-1 rounded-lg hover:bg-gray-400 text-black">
    //         Talk to our Counsellor
    //       </button>
    //     </div>
    //   </div>

    //   {/* Right Side - Image */}
    //   <div className="relative md:absolute md:right-0 md:bottom-0 mt-6 md:mt-0 flex justify-center md:block">
    //     <img
    //       src={human}
    //       alt="Data Analytics"
    //       className="w-[250px] md:w-[300px] h-[300px] md:h-[350px] object-cover"
    //     />
    //   </div>
    // </div>
  );
};

export default DataScienceBanner;
