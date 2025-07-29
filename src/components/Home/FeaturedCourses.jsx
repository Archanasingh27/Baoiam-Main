import React, { useState } from "react";
import { FaStar, FaUserGraduate, FaClock } from "react-icons/fa";
// import HeadingImage from "../Lines/HeadingImages";
import Group from "../../assets/Home/Lines/Group.webp";
import DS from "../../assets/Home/FeaturedCourses/DS_F.png";
import DA from "../../assets/Home/FeaturedCourses/DA_F.png";
import DM from "../../assets/Home/FeaturedCourses/DM.png";
import SD from "../../assets/Home/FeaturedCourses/SD.png";
import { FiBarChart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ContactForm from "../../Pages/ContactForm";

const courses = [
  {
    id: 1,
    title: "Data Science",
    rating: 4.8,
    description: "Build models and extract insights.",
    students: "150.3K",
    level: "Intermediate",
    duration: "45 hours",
    image: DS,
  },
  {
    id: 2,
    title: "Data Analysis",
    rating: 4.7,
    description: "Clean, visualize, and analyze data.",
    students: "98.5K",
    level: "Beginner",
    duration: "35 hours",
    image: DA,
  },
  {
    id: 3,
    title: "Digital Marketing",
    rating: 4.9,
    description: "Grow with SEO and social ads.",
    students: "265.7K",
    level: "Beginner",
    duration: "40 hours",
    image: DM,
  },
  {
    id: 4,
    title: "Software Developement",
    rating: 5.0,
    description: "Full-stack development training.",
    students: "73.4K",
    level: "Advanced",
    duration: "80 hours",
    image: SD,
  },
];

const FeaturedCourses = () => {
    const [showModal, setShowModal] = useState(false);
  
  return (
    <section
      className="bg-white rounded-[20px] font-['Poppins'] mx-auto max-w-[calc(100%-40px)] lg:max-w-[1350px]"
      style={{
        padding: "30px",
        border: "0.5px solid #ECEBF6",
        boxShadow: "0px 0px 8px 0px #00000026",
      }}
    >
      {/* Header */}
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Featured <span className="text-orange-500">Courses</span>
  </h2> */}

      <div className="flex items-center justify-center w-full mb-12">
        <h2 className="text-3xl md:text-4xl  font-bold mb-2">
          Featured <span className="text-orange-500">Courses</span>
        </h2>
        <img src={Group} alt="" className="w-9 mb-4" />
      </div>

      {/* Grid Container */}
      <div className="flex flex-col items-center">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1280px] mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[10px] flex flex-col"
              style={{
                minWidth: "251px",
                height: "295px",
                padding: "15px",
                border: "0.5px solid #ECEBF6",
                boxShadow: "0px 4px 8px 0px #00000026",
              }}
            >
              {/* Course Header */}
              <div className="flex items-center gap-[5px]">
                <h3 className="text-[16px] font-medium">{course.title}</h3>
                <div className="flex items-center text-black text-sm">
                  <FaStar className="mr-1 text-amber-500" /> {course.rating}
                </div>
              </div>

              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="h-[135px] w-full object-cover mb-[2px] rounded-sm"
              />

              {/* Course Description */}
              <p className="text-black text-sm mb-1">{course.description}</p>

              {/* Students Enrolled */}
              <div className="flex gap-[2px] items-center text-gray-800 text-xs mb-2 mt-auto">
                <FaUserGraduate className="mr-1 text-blue-900" />
                {course.students}
                <span className="text-xs text-gray-500">
                  {" "}
                  students enrolled
                </span>
              </div>

              {/* Level and Duration */}
              <div className="flex justify-between items-center text-gray-500 text-xs mb-1">
                <div className="flex items-center mr-2">
                  <FiBarChart className="text-orange-400 mr-1" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mx-2 text-green-600" />
                  {course.duration}
                </div>
              </div>

              {/* Start Learning Button */}
              {course.id === 1 ||
              course.id === 2 ||
              course.id === 3 ||
              course.id === 4 ? (
                <Link
                  to={
                    course.id === 1
                      ? "/DataScience"
                      : course.id === 2
                      ? "/DataAnalysis"
                      : course.id === 3
                      ? "/DigitalMarketing"
                      : "/SoftwareDevelopment"
                  }
                  className="text-white bg-[#FF6501E5] hover:bg-[#FF650133] hover:text-orange-500 transition duration-300 mt-2 text-sm mx-auto"
                  style={{
                    width: "129px",
                    height: "25px",
                    borderRadius: "5px",
                    padding: "2px 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "14px",
                  }}
                >
                  Start Learning
                </Link>
              ) : (
                <button
                  className="text-white bg-[#FF6501E5] hover:bg-[#FF650133] hover:text-orange-500 transition duration-300 mt-2 text-sm mx-auto"
                  style={{
                    width: "129px",
                    height: "25px",
                    borderRadius: "5px",
                    padding: "2px 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "14px",
                  }}
                >
                  Start Learning
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-[30px] mb-[30px]">
          <div>
            {/* The Button */}
            <button
            className="text-white bg-black hover:bg-[#7B7B7B] transition duration-300 flex items-center justify-center text-[24px]"
            onClick={() => setShowModal(true)}
            style={{
              width: "208px",
              height: "46px",
              borderRadius: "5px",
              padding: "5px 10px",
              boxShadow: "0px 4px 6px 0px #0000001A",
              gap: "10px",
            }}
          >
            Explore more →
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
    </section>
  );
};

export default FeaturedCourses;
