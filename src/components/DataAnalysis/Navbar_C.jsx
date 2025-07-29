import React, { useState } from "react";
import { FiBookmark, FiShoppingCart, FiBell, FiMenu } from "react-icons/fi";
import { MdSearch } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../../assets/Home/Navbar/logoLight.webp";
import Profile from "../../assets/CoursesLayout/CoursesPage/Profile.png";
import { Link } from "react-router-dom";

export default function Navbar_C() {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-[10px] z-50 w-full bg-white shadow-md font-['Poppins']">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between h-[80px]">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[80px] h-[50px] object-contain lg:ml-6 lg:mr-6 cursor-pointer"
            />
          </Link>

          {/* Hide Explore + Search on mobile */}
          <div className="hidden lg:flex items-center gap-12">
            {/* Explore */}
            <div className="relative group cursor-pointer text-base font-medium">
              <span
                className="flex items-center hover:text-orange-500 mx-8 text-[#1B1B1B] text-[16px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Explore
                {isHovered ? (
                  <FaChevronUp className="ml-2 text-black" size={14} />
                ) : (
                  <FaChevronDown className="ml-2 text-black" size={14} />
                )}
              </span>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 hidden group-hover:block z-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-orange-50"># Option 1</li>
                  <li className="px-4 py-2 hover:bg-orange-50"># Option 2</li>
                  <li className="px-4 py-2 hover:bg-orange-50"># Option 3</li>
                  <li className="px-4 py-2 hover:bg-orange-50"># Option 4</li>
                  <li className="px-4 py-2 hover:bg-orange-50"># Option 5</li>
                </ul>
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center bg-[#F6F6F6] rounded-md px-4 w-[340px]">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="bg-transparent flex-grow outline-none text-sm placeholder-gray-500 py-2"
              />
              <MdSearch size={20} />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Hide icons on very small screens */}
          <div className="hidden sm:flex items-center gap-6">
            <FiBookmark size={24} className="text-black" />
            <FiShoppingCart size={24} className="text-black" />
            <div className="relative">
              <FiBell size={24} className="text-black" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full" />
            </div>
            <img
              src={Profile}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover"
            />
          </div>

          {/* Hamburger on mobile */}
          <button
            className="block lg:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="bg-white shadow-md px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            <div className="relative group cursor-pointer text-base font-medium">
              <span
                className="flex items-center hover:text-orange-500"
                onClick={() => setIsHovered(!isHovered)}
              >
                Explore
                {isHovered ? (
                  <FaChevronUp className="ml-2 text-black" size={14} />
                ) : (
                  <FaChevronDown className="ml-2 text-black" size={14} />
                )}
              </span>
              {isHovered && (
                <div className="mt-2 w-full bg-white shadow rounded-md py-1 z-10">
                  <ul>
                    <li className="px-4 py-2 hover:bg-orange-50"># Option 1</li>
                    <li className="px-4 py-2 hover:bg-orange-50"># Option 2</li>
                    <li className="px-4 py-2 hover:bg-orange-50"># Option 3</li>
                    <li className="px-4 py-2 hover:bg-orange-50"># Option 4</li>
                    <li className="px-4 py-2 hover:bg-orange-50"># Option 5</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center bg-[#F6F6F6] rounded-md px-4">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="bg-transparent flex-grow outline-none text-sm placeholder-gray-500 py-2"
              />
              <FiSearch size={20} />
            </div>

            <div className="flex items-center gap-6 mt-2">
              <FiBookmark size={24} className="text-black" />
              <FiShoppingCart size={24} className="text-black" />
              <div className="relative">
                <FiBell size={24} className="text-black" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full" />
              </div>
              <img
                src={Profile}
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
