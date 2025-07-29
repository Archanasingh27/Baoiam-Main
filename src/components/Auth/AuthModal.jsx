


import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


const AuthModal = ({ isOpen ,onClose, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [email, setEmail] = useState("");
   const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setShowOtp(false);
  };




  const handleSendOtp = async () => {
    setLoading(true);
    const endpoint = isLogin
  ? "http://127.0.0.1:8000/api/login/"
  : "http://127.0.0.1:8000/api/signup/";
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
    const endpoint = isLogin
  ? "http://127.0.0.1:8000/api/verify_login/"
  : "http://127.0.0.1:8000/api/verify_signup/";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);

        if (onAuthSuccess) onAuthSuccess(); // update here 

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


const handleGoogleLogin = async (credentialResponse) => {
  const credential = credentialResponse.credential;

  try {
    const res = await fetch('http://localhost:8000/api/google-login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_token: credential }),
    });

    const data = await res.json();

    if (res.ok) {
      const isNewUser = data.created;

      //  Store token/user
      localStorage.setItem('token', data.token);

      // Conditional message
      if (isNewUser) {
        alert('🎉 Welcome! Your account has been created using Google.');
      } else {
        alert('👋 Welcome back! You have successfully logged in.');
      }

      if (onAuthSuccess) onAuthSuccess();
      onClose && onClose();
    } else {
      console.error('Google login failed:', data);
    }
  } catch (err) {
    console.error('Google login error:', err);
  }
};




  
 return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center font-['Poppins'] overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

      {/* Modal content */}
      <div
        className="
          relative z-10 bg-white rounded-2xl shadow-lg
          w-[95vw] max-w-[450px]
          h-[95vh] max-h-[700px]
          lg:w-[420px] lg:h-auto
          p-6 sm:p-8
          overflow-hidden
        "
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-orange-500 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          <IoClose />
        </button>

        {/* Header */}
        <h2 className="text-center text-[26px] sm:text-[30px] mb-2">
          Welcome to{" "}
          <span className="text-orange-500 font-medium">Baoiam</span>
        </h2>
        <h1 className="text-[28px] sm:text-[32px] text-center font-medium mb-6">
          {isLogin ? "Log In" : "Sign Up"}
        </h1>

        {/* Email / Mobile */}
        <div className="mb-4">
          <label className="block text-[15px] sm:text-[16px] font-normal mb-2">
            Email ID or Mobile Number
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email ID or Mobile number"
            className="w-full px-4 py-3 text-[14px] text-[#808080] border border-gray-400 rounded-full focus:outline-none focus:border-orange-400"
          />
        </div>

        

        
      

        
         <div className="mb-4">
  {/* Label Send/Resend Button */}
  <div className="flex items-center justify-between my-2">
    <label className="text-[15px] sm:text-[16px] font-normal">
      OTP Verification
    </label>
    <button
      onClick={handleSendOtp}
      disabled={loading || !email}
   className="text-xs px-3 py-1 sm:px-4 sm:py-2 bg-orange-100 text-orange-500 rounded-full hover:bg-orange-200 transition-all">
              
      {loading ? "Sending..." : isOtpSent ? "Resend OTP" : "Send OTP"}
    </button>
  </div>


  {/* OTP Input + Eye Icon */}
  <div className="relative">
    <input
      type={showOtp ? "text" : "password"}
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      placeholder="Enter OTP"
      disabled={!isOtpSent}
      className="w-full pr-10 pl-4 py-3 text-[14px] text-[#808080] border border-gray-400 rounded-full focus:outline-none focus:border-orange-400"
           
    />
    <button
      type="button"
      onClick={() => setShowOtp(!showOtp)}
      disabled={!isOtpSent}
      className={`absolute right-4 top-1/2 transform -translate-y-1/2  ${
        isOtpSent ? "text-gray-500 hover:text-orange-500 cursor-pointer" : "text-gray-300 "
      }`}
    >
      {showOtp ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
</div>

        

        {/* Terms Checkbox */}
        <div className="flex items-center justify-between mb-3 text-[14px]">
          <div className="flex items-center">
           <input
                type="checkbox"
                id="remember"
                className="w-5 h-5 accent-orange-500 mr-2"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
           />

            <label
              htmlFor="remember"
              className="text-[#8D8D8D] text-[13px] sm:text-[14px]"
            >
              I Agree to{" "}
              <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Terms & Conditions
              </a>
            </label>
          </div>
        </div>

        {/* Submit Button  */}
       
          <button
            onClick={handleVerifyOtp}
            disabled={loading || !otp || !agreeTerms}
            className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-full font-semibold transition duration-300 shadow-md mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : isLogin ? "Log In" : "Sign Up"}
          </button>
      

        {/* Switch Link */}
        <div className="text-center mt-3 text-[15px] sm:text-[16px] text-[#8D8D8D]">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={toggleMode}
                className="text-orange-500 font-normal text-lg hover:text-orange-700 "
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleMode}
                className="text-orange-500 font-normal text-lg hover:text-orange-700 pl-2"
              >
                Log in
              </button>
            </>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center mt-5">
          <div className="flex-grow h-px bg-gray-400" />
          <span className="px-3 sm:px-4 text-sm text-black">Or continue with</span>
          <div className="flex-grow h-px bg-gray-400" />
        </div>

        {/* Google Login */}
       
<div className="flex justify-center mt-4">
  <GoogleOAuthProvider clientId="539413491318-nja0bbltjl99e8pvrk47mjfkj47q3dpq.apps.googleusercontent.com">
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => {
        console.log("Google Login Failed");
      }}
    />
  </GoogleOAuthProvider>
</div>
        

      </div>
    </div>
  );
};

export default AuthModal;
 









