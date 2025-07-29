// import React, { useState } from "react";
// import { IoMoon } from "react-icons/io5";
// import { FaChevronDown, FaChevronUp, FaUserCircle } from "react-icons/fa";
// import lightLogo from "../../assets/Home/Navbar/logoLight.webp";
// import giftbox from "../../assets/Home/Navbar/gift.gif";
// import { NavLink, Link } from "react-router-dom";

// const Navbar = ({ onSignUpClick, isLoggedIn, onLogout }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);

//   const kickstarterCourses = {
//     "Success Fusion Program": [
//       "Data Science",
//       "Data Analysis",
//       "Digital Marketing",
//       "UI/UX & Prototyping",
//       "AI basics for beginners",
//       "Entrepreneurship",
//     ],
//     "Udaan 90": [
//       "SEO",
//       "Graphic Designing",
//       "Video Editing",
//       "Social Media Marketing",
//       "Front-End Dev",
//       "Java",
//       "Excel",
//       "Python",
//       "Cyber Security",
//       "Marketing",
//       "Soft Skills",
//       "Product Design",
//       "AI & ML",
//       "Startup",
//       "Public Speaking",
//     ],
//     "AI & ML": [
//       "Deep Learning with TensorFlow & PyTorch",
//       "Prompt Engineering",
//       "Generative AI",
//       "Natural Language Processing",
//       "Applied Machine Learning",
//     ],
//   };

//   return (
//     <>
//       <nav className="sticky top-[20px] z-50 mx-auto mt-[20px] max-w-[1340px] h-[80px] bg-[#FFFAF7] rounded-[50px] shadow-md flex items-center justify-between pr-[40px] pl-[40px] font-['Poppins']">
//         {/* Left */}
//         <div className="flex items-center ml-5 hover:border hover:rounded-lg hover:border-gray-300">
//           <Link to="/">
//             <img
//               src={lightLogo}
//               alt="Baoiam"
//               className="h-[70px] w-[115px] p-1"
//             />
//           </Link>
//         </div>

//         {/* Center Desktop Menu */}
//         <div className="hidden md:flex justify-center items-center">
//           <ul className="flex space-x-[33px] text-black text-[18px] ml-4">
//             <li className="hover:text-orange-500">PAP</li>

//             <li className="relative group cursor-pointer">
//               <div
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => {
//                   setIsHovered(false);
//                   setSelectedCategory(null);
//                 }}
//               >
//                 <span className="flex items-center hover:text-orange-500">
//                   Kickstarter courses
//                   {isHovered ? (
//                     <FaChevronUp className="ml-2 text-black" size={14} />
//                   ) : (
//                     <FaChevronDown className="ml-2 text-black" size={14} />
//                   )}
//                 </span>

//                 {/* Accordion Style Dropdown */}
//                 {isHovered && (
//                   <div className="absolute  text-black  py-2 w-66 rounded shadow-lg z-20 border border-gray-100 bg-gray-50">
//                     {Object.entries(kickstarterCourses).map(
//                       ([category, subcategories]) => (
//                         <div key={category} className="border-b border-gray-200">
//                           <button
//                             className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-100"
//                             onClick={() =>
//                               setSelectedCategory(
//                                 selectedCategory === category ? null : category
//                               )
//                             }
//                           >
//                             {category}
//                             <span>
//                               {selectedCategory === category ? (
//                                 <FaChevronUp size={14} />
//                               ) : (
//                                 <FaChevronDown size={14} />
//                               )}
//                             </span>
//                           </button>

//                           {/* Subcategory List */}
//                           {selectedCategory === category && (
//                             <ul className="px-4 py-1">
//                               {subcategories.map((sub, index) => (
//                                 <li
//                                   key={index}
//                                   className="py-1 pl-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded"
//                                 >
//                                   {sub}
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </div>
//                       )
//                     )}
//                   </div>
//                 )}
//               </div>
//             </li>

//             <li className="relative inline-block">
//               <NavLink
//                 to="/pride"
//                 className={({ isActive }) =>
//                   isActive
//                     ? `relative inline-block font-poppins font-normal text-[18px] leading-none
//                       text-orange-500 underline decoration-orange-500 underline-offset-4`
//                     : `relative inline-block font-poppins font-normal text-[18px] leading-none
//                       bg-clip-text text-transparent
//                       bg-gradient-to-r from-[#110028] via-[#F1EAF9] to-[#8A38F5] to-75%
//                       bg-[length:400%_auto]
//                       animate-gradient
//                       hover:text-orange-500`
//                 }
//               >
//                 Pride
//               </NavLink>
//             </li>

//             <li className="flex items-center gap-2 hover:text-orange-500">
//               <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
//               <span>Refer & Earn</span>
//             </li>

//             <li className="hover:text-orange-500">Success Stories</li>

//             <li className="relative group cursor-pointer">
//               <span
//                 className="flex items-center hover:text-orange-500"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 Company
//                 {isHovered ? (
//                   <FaChevronUp className="ml-2 text-black" size={14} />
//                 ) : (
//                   <FaChevronDown className="ml-2 text-black" size={14} />
//                 )}
//               </span>
//               <ul className="absolute hidden group-hover:block bg-[#1D2026] text-gray-400 mt-2 py-2 w-48 rounded shadow-lg z-10">
//                 <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                   About Us
//                 </li>
//                 <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                   Careers
//                 </li>
//                 <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                   Press
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>

//         {/* Right */}
//         <div className="flex items-center space-x-4">
//           <button>
//             <IoMoon className="w-6 h-6 text-gray-800" />
//           </button>

//           {isLoggedIn ? (
//             <div className="relative">
//               <button 
//                 onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//                 className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
//               >
//                 <FaUserCircle className="w-8 h-8 text-orange-500" />
//               </button>
              
//               {showProfileDropdown && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
//                   <Link
//                     to="/profile"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
//                     onClick={() => setShowProfileDropdown(false)}
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     to="/dashboard"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
//                     onClick={() => setShowProfileDropdown(false)}
//                   >
//                     Dashboard
//                   </Link>
//                   <button
//                     onClick={() => {
//                       onLogout();
//                       setShowProfileDropdown(false);
//                     }}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button
//               onClick={onSignUpClick}
//               className="hidden md:inline-block bg-orange-500 text-white px-[20px] py-1 rounded-full text-[16px] hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500"
//             >
//               Sign up
//             </button>
//           )}

//           {/* Hamburger for mobile */}
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <svg
//               className="w-8 h-8 text-gray-800"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   mobileMenuOpen
//                     ? "M6 18L18 6M6 6l12 12" // X icon
//                     : "M4 6h16M4 12h16M4 18h16" // Hamburger
//                 }
//               />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed top-[100px] left-0 w-full bg-[#FFFAF7] shadow-lg rounded-b-xl z-40">
//           <ul className="flex flex-col space-y-4 p-6 text-black text-[18px] font-['Poppins']">
//             <li className="hover:text-orange-500">PAP</li>
//             <li className="hover:text-orange-500">Kickstarter courses</li>
//             <li>
//               <NavLink
//                 to="/pride"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-orange-500 underline decoration-orange-500 underline-offset-4"
//                     : "hover:text-orange-500"
//                 }
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Pride
//               </NavLink>
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500">
//               <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
//               <span>Refer & Earn</span>
//             </li>
//             <li className="hover:text-orange-500">Success Stories</li>
//             <li className="hover:text-orange-500">Company</li>
//             {isLoggedIn ? (
//               <>
//                 <li>
//                   <Link
//                     to="/profile"
//                     className="hover:text-orange-500"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/dashboard"
//                     className="hover:text-orange-500"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Dashboard
//                   </Link>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => {
//                       onLogout();
//                       setMobileMenuOpen(false);
//                     }}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <button
//                   onClick={() => {
//                     onSignUpClick();
//                     setMobileMenuOpen(false);
//                   }}
//                   className="bg-orange-500 text-white px-4 py-2 rounded-full text-[16px] hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500 w-full text-center"
//                 >
//                   Sign up
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;












import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { FaChevronDown, FaChevronUp, FaUserCircle } from "react-icons/fa";
import lightLogo from "../../assets/Home/Navbar/logoLight.webp";
import giftbox from "../../assets/Home/Navbar/gift.gif";
import { NavLink, Link, useNavigate } from "react-router-dom";

import avatar1 from "../../assets/Home/Navbar/profile icons/1.png";
import avatar2 from "../../assets/Home/Navbar/profile icons/2.png";
import avatar3 from "../../assets/Home/Navbar/profile icons/3.png";
import avatar4 from "../../assets/Home/Navbar/profile icons/4.png";
import avatar5 from "../../assets/Home/Navbar/profile icons/5.png";
import avatar6 from "../../assets/Home/Navbar/profile icons/6.png";
import avatar7 from "../../assets/Home/Navbar/profile icons/7.png";
import avatar8 from "../../assets/Home/Navbar/profile icons/8.png";
import avatar9 from "../../assets/Home/Navbar/profile icons/9.png";
import avatar10 from "../../assets/Home/Navbar/profile icons/10.png";
import avatar11 from "../../assets/Home/Navbar/profile icons/11.png";
import avatar12 from "../../assets/Home/Navbar/profile icons/12.png";


const profileImages = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12 ];



const Navbar = ({ onSignUpClick, isLoggedIn, onLogout }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate(); //update this line to use useNavigate
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);  // State for profile dropdown

  const kickstarterCourses = {
  "Success Fusion Program": [
    "Data Science",
    "Data Analysis",
    "Digital Marketing",
    "UI/UX & Prototyping",
    "AI basics for beginners",
    "Entrepreneurship",
  ],
  "Udaan 90": [
    "SEO",
    "Graphic Designing",
    "Video Editing",
    "Social Media Marketing",
    "Front-End Dev",
    "Java",
    "Excel",
    "Python",
    "Cyber Security",
    "Marketing",
    "Soft Skills",
    "Product Design",
    "AI & ML",
    "Startup",
    "Public Speaking",
  ],
  "AI & ML": [
    "Deep Learning with TensorFlow & PyTorch",
    "Prompt Engineering",
    "Generative AI",
    "Natural Language Processing",
    "Applied Machine Learning",
  ],
};


const handleLogout = () => {
  onLogout();
  setShowProfileDropdown(false);
  navigate("/"); 
};



const [profileImage] = useState(() => {
  const randomIndex = Math.floor(Math.random() * profileImages.length);
  return profileImages[randomIndex];
});


  return (
    <>
      <nav className="sticky top-[20px] z-50 mx-auto mt-[20px] max-w-1340vw h-[80px] bg-[#FFFAF7] rounded-[50px] shadow-md flex items-center justify-between pr-[40px] pl-[40px] font-['Poppins']">
        {/* Left */}
        <div className="flex items-center ml-5 hover:border hover:rounded-lg hover:border-gray-300">
          <Link to="/">
            <img
              src={lightLogo}
              alt="Baoiam"
              className="h-[70px] w-[115px] p-1"
            />
          </Link>
        </div>

        {/* Center Desktop Menu */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex space-x-[33px] text-black text-[18px] ml-4">
            <li className="hover:text-orange-500">PAP</li>

            <li className="relative group cursor-pointer">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setSelectedCategory(null);
                }}
              >
                <span className="flex items-center hover:text-orange-500">
                  Kickstarter courses
                  {isHovered ? (
                    <FaChevronUp className="ml-2 text-black" size={14} />
                  ) : (
                    <FaChevronDown className="ml-2 text-black" size={14} />
                  )}
                </span>

                {/* Accordion Style Dropdown */}
                {isHovered && (
                  <div className="absolute  text-black  py-2 w-66 rounded shadow-lg z-20 border border-gray-100 bg-gray-50">
                    {Object.entries(kickstarterCourses).map(
                      ([category, subcategories]) => (
                        <div key={category} className="border-b border-gray-200">
                          <button
                            className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-100"
                            onClick={() =>
                              setSelectedCategory(
                                selectedCategory === category ? null : category
                              )
                            }
                          >
                            {category}
                            <span>
                              {selectedCategory === category ? (
                                <FaChevronUp size={14} />
                              ) : (
                                <FaChevronDown size={14} />
                              )}
                            </span>
                          </button>

                          {/* Subcategory List */}
                          {selectedCategory === category && (
                            <ul className="px-4 py-1">
                              {subcategories.map((sub, index) => (
                                <li
                                  key={index}
                                  className="py-1 pl-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded"
                                >
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </li>

            <li className="relative inline-block">
              <NavLink
                to="/pride"
                className={({ isActive }) =>
                  isActive
                    ? `relative inline-block font-poppins font-normal text-[18px] leading-none
                      text-orange-500 underline decoration-orange-500 underline-offset-4`
                    : `relative inline-block font-poppins font-normal text-[18px] leading-none
                      bg-clip-text text-transparent
                      bg-gradient-to-r from-[#110028] via-[#F1EAF9] to-[#8A38F5] to-75%
                      bg-[length:400%_auto]
                      animate-gradient
                      hover:text-orange-500`
                }
              >
                Pride
              </NavLink>
            </li>

            <li className="flex items-center gap-2 hover:text-orange-500">
              <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
              <span>Refer & Earn</span>
            </li>

            <li className="hover:text-orange-500">Success Stories</li>

            <li className="relative group cursor-pointer">
              <span
                className="flex items-center hover:text-orange-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Company
                {isHovered ? (
                  <FaChevronUp className="ml-2 text-black" size={14} />
                ) : (
                  <FaChevronDown className="ml-2 text-black" size={14} />
                )}
              </span>
              <ul className="absolute hidden group-hover:block bg-[#1D2026] text-gray-400 mt-2 py-2 w-48 rounded shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                  About Us
                </li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                  Careers
                </li>
                <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                  Press
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <button>
            <IoMoon className="w-6 h-6 text-gray-800" />
          </button>

{/*update here for profile dropdown */}
             
              {isLoggedIn ? (

          <div className="relative">
            <button 
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
            >
              <img
                  src={profileImage}
                   alt="Profile"
                   className="w-[80px]  rounded-full object-cover"
             />

            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
                  onClick={() => setShowProfileDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
                  onClick={() => setShowProfileDropdown(false)}
                >
                  Dashboard
                 </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (

          
           <button
            onClick={onSignUpClick}
            className="hidden md:inline-block bg-orange-500 text-white px-[20px] py-1 rounded-full text-16vw hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500"
          >
            Sign up
          </button>
          )}
          {/* Hamburger for mobile */}

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[100px] left-0 w-full bg-[#FFFAF7] shadow-lg rounded-b-xl z-40">
          <ul className="flex flex-col space-y-4 p-6 text-black text-[18px] font-['Poppins']">
            <li className="hover:text-orange-500">PAP</li>
            <li className="hover:text-orange-500">Kickstarter courses</li>
            <li>
              <NavLink
                to="/pride"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 underline decoration-orange-500 underline-offset-4"
                    : "hover:text-orange-500"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Pride
              </NavLink>
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500">
              <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
              <span>Refer & Earn</span>
            </li>
            <li className="hover:text-orange-500">Success Stories</li>
            <li className="hover:text-orange-500">Company</li>
            <li>
              <button
                onClick={() => {
                  onSignUpClick();
                  setMobileMenuOpen(false);
                }}
                className="bg-orange-500 text-white px-4 py-2 rounded-full text-[16px] hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500 w-full text-center"
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
