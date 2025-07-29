import React from "react";
import VectorImg from "../../assets/Home/Lines/Vector_11.webp";

const SubHeadImg = ({ text }) => {
  return (
    <div className="inline-flex flex-col items-center relative mb-2">
      {/* Heading Text */}
      {/* <h3 className="text-2xl md:text-[42px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#1D2026] via-[#e45c02] to-[#FF6501]">
        {text}
      </h3> */}

      <h3 className="text-2xl md:text-[42px] font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#1D2026] via-[#e45c02] to-[#FF6501] bg-[length:400%_auto] animate-gradient">
        {text}
      </h3>

      {/* Image Positioned Below */}
      <div
        className="absolute top-full -mt-3 "
        style={{ left: "calc(100% - 100px)" }}
      >
        <img src={VectorImg} alt="" className="w-[90px] h-[18px] " />
      </div>
    </div>
  );
};

export default SubHeadImg;
