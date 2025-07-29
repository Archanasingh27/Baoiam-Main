

// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// import Google from "../../assets/google.png";
// import { useState } from "react";

// const Login = ({ isOpen, onClose }) => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [showOtp, setShowOtp] = useState(false);

//   if (!isOpen) return null;

//   const toggleMode = () => {
//     setIsLogin(!isLogin);
//     setShowOtp(false);
//   };

//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center font-['Poppins']">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black opacity-50"
//         onClick={onClose}
//       ></div>

//       {/* Modal Content */}
//       <div className="relative z-10 bg-white rounded-3xl shadow-lg w-[90%] max-w-[450px] p-8 mx-4 max-h-[90vh] overflow-y-auto">
//         {/* Close Button */}
//         <button
//           className="absolute top-3 right-3 text-gray-500 hover:text-orange-500 text-2xl"
//           onClick={onClose}
//           aria-label="Close"
//         >
//           <IoClose />
//         </button>

//         {/* Header */}
//         <h2 className="text-center text-[30px] mb-2">
//           Welcome to{" "}
//           <span className="text-orange-500 font-medium">Baoiam</span>
//         </h2>
//         <h1 className="text-[32px] text-center font-medium mb-6">
//           {isLogin ? "Log In" : "Sign Up"}
//         </h1>

//         {/* Email / Mobile Input */}
//         <div className="mb-4">
//           <label className="block text-[16px] font-normal mb-3">
//             Email ID or Mobile Number
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Email ID or Mobile number"
//             className="w-full px-4 py-3 text-[14px] text-[#808080] border border-gray-400 rounded-full"
//           />
//         </div>

//         {/* OTP */}
//         <div className="mb-4">
//           <div className="flex items-center justify-between my-2">
//             <label className="text-[16px] font-normal">OTP Verification</label>
//             <button className="text-xs px-4 py-2 bg-orange-100 text-orange-500 rounded-full hover:bg-orange-200 transition-all">
//               Send OTP
//             </button>
//           </div>
//           <div className="relative">
//             <input
//               type={showOtp ? "text" : "password"}
//               placeholder="Enter OTP"
//               className="w-full pr-10 pl-4 py-3 text-[14px] text-[#808080] border border-gray-400 rounded-full"
//             />
//             <button
//               type="button"
//               onClick={() => setShowOtp(!showOtp)}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500"
//             >
//               {showOtp ? <FaEyeSlash /> : <FaEye />}
//             </button>
//           </div>
//         </div>

//         {/* Terms & Conditions */}
//         <div className="flex items-center justify-between mb-3 text-[14px]">
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="remember"
//               className="w-5 h-5 accent-orange-500 mr-2"
//             />
//             <label htmlFor="remember" className="text-[#8D8D8D]">
//               I Agree to{" "}
//               <a
//                 href="/terms-and-conditions"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline"
//               >
//                 Terms & Conditions
//               </a>
//             </label>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-full font-semibold transition duration-300 shadow-md mt-4">
//           {isLogin ? "Log In" : "Sign Up"}
//         </button>

//         {/* Switch between Sign Up and Login */}
//         <div className="text-center mt-3 text-[16px] text-[#8D8D8D]">
//           {isLogin ? (
//             <>
//               Don’t have an account?{" "}
//               <button
//                 onClick={toggleMode}
//                 className="text-orange-500 font-normal text-lg hover:text-orange-700 pl-2"
//               >
//                 Sign up
//               </button>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <button
//                 onClick={toggleMode}
//                 className="text-orange-500 font-normal text-lg hover:text-orange-700 pl-2"
//               >
//                 Log in
//               </button>
//             </>
//           )}
//         </div>

//         {/* Divider */}
//         <div className="flex items-center mt-5">
//           <div className="flex-grow h-px bg-gray-400" />
//           <span className="px-4 text-sm text-black">Or continue with</span>
//           <div className="flex-grow h-px bg-gray-400" />
//         </div>

//         {/* Google Auth */}
//         <div className="flex justify-center mt-4">
//           <a
//             href="https://your-google-auth-url.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src={Google} alt="Google" className="w-[62px] h-[62px]" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





  
  import { useState } from "react";
  

function SignUp({ isLogin = false, onClose }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    setLoading(true);
    const endpoint = isLogin ? "/api/login/" : "/api/signup/";
    console.log("Sending OTP to:", email); // 👈 ye line add karo


    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setIsOtpSent(true);
      } else {
        alert(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    const endpoint = isLogin ? "/api/verify_login/" : "/api/verify_signup/";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        onClose && onClose(); // Close modal or redirect
      } else {
        alert(data.error || "Invalid OTP");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />

      {isOtpSent && (
        <input
          type="text"
          value={otp}
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
          style={{ display: "block", marginBottom: "10px" }}
        />
      )}

      {!isOtpSent ? (
        <button onClick={handleSendOtp} disabled={loading || !email}>
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      ) : (
        <button onClick={handleVerifyOtp} disabled={loading || !otp}>
          {loading ? "Verifying..." : isLogin ? "Log In" : "Sign Up"}
        </button>
      )}
    </div>
  );
}

export default SignUp;
  
  
  
  
