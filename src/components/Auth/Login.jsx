import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  if (!isOpen) return null;

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setShowOtp(false);
  };

  const handleSendOtp = async () => {
    try {
      const response = await fetch("/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("OTP sent to your email.");
      } else {
        const errData = await response.json();
        alert(`Failed to send OTP: ${errData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Error sending OTP. Check console for details.");
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative z-10 bg-white rounded-3xl shadow-lg w-[90%] max-w-[450px] p-8 mx-4 font-['Poppins'] max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-orange-500 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          <IoClose />
        </button>

        <h2 className="text-center text-[30px] mb-2">
          Welcome to{" "}
          <span className="text-orange-500 font-medium">Baoiam</span>
        </h2>
        <h1 className="text-[32px] text-center font-medium mb-6">
          {isLogin ? "Log In" : "Sign Up"}
        </h1>

        <div className="mb-4">
          <label className="block text-[16px] font-normal mb-3">
            Email ID or Mobile Number
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email ID or Mobile number"
            className="w-full px-4 py-3 text-[14px] text-[#808080] border border-gray-400 rounded-full"
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between my-2">
            <label className="text-[16px] font-normal">OTP Verification</label>
            <button
              className="text-xs px-4 py-2 bg-orange-100 text-orange-500 rounded-full hover:bg-orange-200 transition-all"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </div>
          <div className="relative">
            <input
              type={showOtp ? "text" : "password"}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full pr-10 pl-4 py-3 text-[14px] text-[#808080] border border-gray-400 rounded-full"
            />
            <button
              type="button"
              onClick={() => setShowOtp(!showOtp)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500"
            >
              {showOtp ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3 text-[14px]">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-5 h-5 accent-orange-500 mr-2"
            />
            <label htmlFor="remember" className="text-[#8D8D8D]">
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

        <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-full font-semibold transition duration-300 shadow-md mt-4">
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <div className="text-center mt-3 text-[16px] text-[#8D8D8D]">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={toggleMode}
                className="text-orange-500 font-normal text-lg hover:text-orange-700 pl-2"
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

        <div className="flex items-center mt-5">
          <div className="flex-grow h-px bg-gray-400" />
          <span className="px-4 text-sm text-black">Or continue with</span>
          <div className="flex-grow h-px bg-gray-400" />
        </div>

           
<div className="flex justify-center mt-4">
  <GoogleOAuthProvider clientId= "539413491318-nja0bbltjl99e8pvrk47mjfkj47q3dpq.apps.googleusercontent.com">
    <GoogleLogin               
      onSuccess={(credentialResponse) => {
        // Send the credential to your backend
       fetch("http://127.0.0.1:8000/api/google-login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: credentialResponse.credential,
          }),
        })
          .then(res => res.json())
          .then(data => {
            console.log("User logged in:", data);
            // Optionally close modal or redirect
            onClose();
          })
          .catch(error => {
            console.error("Login failed", error);
          });
      }}
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

export default Login;