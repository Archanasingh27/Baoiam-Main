// // components/OtpCard.jsx
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// //import logo from 'frontend\Frontend-Baoiam\Frontend-Baoiam-main\frontend\public\Email-icon\logoLight.webp';
// import { FiMail } from "react-icons/fi";


// // ✅ Email Template Component
// const OtpCard = ({ otp }) => {
  
//    return (
//        <div className="w-full min-h-screen flex items-center justify-center bg-white py-10 px-4">
//          <div className="w-full max-w-[512px] rounded-lg border border-gray-100 shadow-lg overflow-hidden">
//            {/* Logo */}
//            <div className="flex justify-center py-6">
//              <img
//                src={logo}
//                alt="BAOIAM Logo"
//                className="w-24"
//              />
//            </div>
   
//            {/* Orange Header with Icon */}
//            <div className="w-full h-[88px] bg-[#FF6501] flex justify-center p-1">
//      <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center">
//        <FiMail className="w-[40px] h-[40px] text-[#FF6501]" />
//      </div>
//    </div>
   
   
//            {/* Content */}
           
//    <div className="px-6 py-4  text-justify">
//      <h2 className=" text-center text-[#FF6501] text-xl font-semibold underline mb-4">
//        Your OTP Code
//      </h2>
   
//      <div className="text-black text-sm mb-2">    
//        <p>Hello,</p>
//        <br />
//        <p>Your One-Time Password (OTP) for account verification is:</p>
//      </div>
   
//      {/* OTP box remains centered */}
//      <div className="bg-gray-100 text-[#FF6501] font-bold text-xl py-3 rounded-md my-4 text-center">
//        {otp}
//      </div>
   
//      <p className="text-black text-sm mb-4">
//        This OTP is valid for <span className="font-bold">2 minutes</span>.  
//        Please do not share this code with anyone.
//      </p>
   
//      <p className="text-black text-sm">
//        If you didn’t request this code, please ignore this email.
//        <br />
//        Thank you for using our service!
//      </p>
//    </div>
   
   
//            <hr className="border-t border-[#FF6501] mx-6" />
   
//            <p className="text-center text-gray-500 text-xs py-4">
//              © 2025 Your Company Name. All rights reserved.
//            </p>
//          </div>
//        </div>
//      );
//    };

// export default OtpCard;
