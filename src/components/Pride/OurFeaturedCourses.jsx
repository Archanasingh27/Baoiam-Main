import React from "react";
import { FaStar, FaUserGraduate } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link
import img1 from "../../assets/Pride/OurFeaturedCourses/img1.webp";
import img2 from "../../assets/Pride/OurFeaturedCourses/img2.webp";
import Group from "../../assets/Home/Lines/Group.webp";

const OurFeaturedCourses = () => {
  const courses = [
    {
      title: "HRMS",
      image: img1,
      description: "Simplify HR processes and empower growth with smart tools.",
      rating: 5.0,
      students: "265.7K",
      duration: "60 hour",
      level: "Beginner",
    },
    {
      title: "Data Science",
      image: img2,
      description:
        "Transform raw data into powerful insights for smarter decisions.",
      rating: 5.0,
      students: "265.7K",
      duration: "60 hour",
      level: "Beginner",
    },
  ];

  return (
    <div className="w-full py-16 bg-white flex justify-center overflow-hidden font-['Poppins']">
      <div className="w-[90%] max-w-6xl bg-white">
        {/* Heading */}
        <div className="flex items-center justify-center w-full mb-3">
          <h2 className="text-3xl md:text-[48px] font-semibold mb-2">
            Our Featured <span className="text-orange-500">Courses</span>
          </h2>
          <img src={Group} alt="" className="w-9 mb-4" />
        </div>
        <p className="text-black text-center text-[24px] mb-8 mx-auto">
          Skill up, stand out, and soar into success with our expert led programs.
        </p>

        {/* Cards + Button Wrapper */}
        <div className="bg-white rounded-2xl p-4 md:p-8 w-full max-w-full mt-6 flex flex-col items-center shadow-xl md:shadow-xl sm:shadow-[0_0_20px_rgba(0,0,0,0.1)]">
          <div className="w-full flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-28">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 flex flex-col flex-shrink-0 w-full sm:w-[80%] md:w-[389px] h-auto md:h-[502px] shadow-lg md:shadow-lg sm:shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-between items-center mb-2 mt-3">
                  <h3 className="text-[24px] font-medium text-black">
                    {course.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-400 text-[18px]" />
                    <span className="text-[18px] font-medium">
                      {course.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-xl w-full h-[228px] object-cover mb-6"
                />
                <p className="text-black text-[16px] mb-3 flex-grow overflow-hidden">
                  {course.description}
                </p>
                <div className="flex items-center text-gray-700 text-xs mb-2">
                  <FaUserGraduate className="mr-2 text-blue-800" />
                  <span>{course.students}</span>
                  <span className="ml-1 text-gray-400">students enrolled</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 text-xs mb-3">
                  <div className="flex items-center space-x-1">
                    <FiBarChart className="text-orange-400" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MdAccessTime className="text-green-600" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Updated: Link the "Start Learning" button to /DataScience */}
                <Link to="/DataScience">
                  <button
                    className="text-white bg-[#FF6501E5] px-6 py-1 hover:bg-[#FF650133] hover:text-orange-500 transition duration-300 mt-2 text-[18px] mx-auto"
                    style={{
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "14px",
                    }}
                  >
                    Start Learning
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Updated: Link the "Explore more" button to /DataScience */}
          <div className="mt-[30px] mb-[20px]">
            <Link to="/DataScience">
              <button
                className="text-white bg-black hover:bg-[#7B7B7B] transition duration-300 flex items-center justify-center text-[20px]"
                style={{
                  width: "208px",
                  height: "46px",
                  borderRadius: "5px",
                  padding: "5px 5px",
                  boxShadow: "0px 4px 6px 0px #0000001A",
                  gap: "10px",
                }}
              >
                Explore more →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeaturedCourses;