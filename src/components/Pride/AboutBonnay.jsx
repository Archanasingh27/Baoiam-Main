import React from "react";
import img1 from "../../assets/Pride/OurEvents/img1.webp";
import img2 from "../../assets/Pride/OurEvents/img2.webp";
import img3 from "../../assets/Pride/OurEvents/img3.webp";
import img4 from "../../assets/Pride/OurEvents/img4.webp";
import img5 from "../../assets/Pride/OurEvents/img5.webp";
import img6 from "../../assets/Pride/OurEvents/img6.webp";
import img7 from "../../assets/Pride/OurEvents/img7.webp";
import img8 from "../../assets/Pride/OurEvents/img8.webp";
import img9 from "../../assets/Pride/OurEvents/img9.webp";
import img10 from "../../assets/Pride/OurEvents/img10.webp";
import img11 from "../../assets/Pride/OurEvents/img11.webp";
import Group from "../../assets/Home/Lines/Group.webp";


const images = [
  { src: img1, w: "200px", h: "200px" },
  { src: img2, w: "530px", h: "200px" },
  { src: img3, w: "250px", h: "400px" },
  { src: img11, w: "240px", h: "250px" },
  { src: img4, w: "230px", h: "250px" },
  { src: img5, w: "240px", h: "570px" },
  { src: img6, w: "500px", h: "300px" },
  { src: img7, w: "250px", h: "370px" },
  { src: img8, w: "250px", h: "250px" },
  { src: img9, w: "500px", h: "250px" },
  { src: img10, w: "250px", h: "250px" },
];

const Photo = ({ index, extraClass = "" }) => {
  const { src, w, h } = images[index];
  return (
    <img
      src={src}
      alt={`img${index + 1}`}
      style={{ width: w, height: h }}
      className={`object-cover rounded-xl ${extraClass}`}
    />
  );
};

const OurEvent = () => (
  <div className="w-full bg-[#F8F8F8] py-10 font-['Poppins']">
    <div className="max-w-6xl mx-auto px-4">
      {/* <h2 className="text-center text-[32px] sm:text-[40px] lg:text-[48px] font-semibold mb-2">
        About <span className="text-orange-500">Bonnya</span>
      </h2> */}
      <div className="flex items-center justify-center w-full mb-4">
        <h2 className="text-3xl md:text-[48px]  font-semibold mb-2">
          A face of <span className="text-orange-500">hope,</span>{" "}
          <span className="text-black"> a voice of </span>
          <span className="text-orange-500">equality</span>
        </h2>
        <img src={Group} alt="" className="w-9 mb-4" />
      </div>
      <p className="text-center text-[16px] sm:text-[20px] lg:text-[24px] text-black mb-10">
        Bonya represents resilience, purpose, and the power of inclusion.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr] gap-3 sm:gap-4 md:gap-5 lg:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md lg:ml-10">
        {/* Left side */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {/* Top row */}
          <div className="flex flex-wrap md:flex-nowrap gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <Photo index={0} className="flex-1" />
            <Photo index={1} className="flex-1" />
          </div>

          {/* Middle row */}
          <div className="flex flex-wrap md:flex-nowrap gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-1">
              <div className="flex flex-wrap md:flex-nowrap gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <Photo index={3} className="flex-1" />
                <Photo index={4} className="flex-1" />
              </div>
              <Photo index={6} />
            </div>
            <Photo index={5} className="flex-1" />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <Photo index={2} />
          <Photo index={7} />
        </div>

        {/* Bottom row (spanning) */}
        <div className="md:col-span-2 lg:col-span-2 flex flex-wrap md:flex-nowrap gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <Photo index={8} className="flex-1" />
          <Photo index={9} className="flex-1" />
          <Photo index={10} className="hidden md:block" />
        </div>
      </div>
    </div>
  </div>
);

export default OurEvent;
