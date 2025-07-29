import React from "react";
import { FaStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import img1 from "../../assets/CoursesLayout/Software/sd1.png";
import img2 from "../../assets/CoursesLayout/Software/sd2.png";

const courses = [
  {
    id: 1,
    title: "Master JavaScript",
    rating: 4.8,
    lesson: 15,
    description: "Software Developement",
    duration: "15h 25min",
    image: img1,
  },
  {
    id: 2,
    title: " Masters in MongoDB",
    rating: 4.5,
    lesson: 12,
    description: "Software Developement",
    duration: "12h 45min",
    image: img2,
  },
];

const CourseCard = ({ course }) => (
  <div className="bg-white font-['Poppins'] rounded-xl shadow-md p-4 w-[320px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
    <img
      src={course.image}
      alt={course.title}
      className="rounded-xl w-full h-[160px] object-cover"
    />
    <div className="mt-4">
      <h3 className="text-[16px] font-semibold font-poppins mb-1 text-[#2C2C2C]">
        {course.title}
      </h3>
      <p className="text-[16px] font-semibold font-poppins text-[#2C2C2C]">
        {course.description || "Learn valuable skills"}{" "}
        <span className="text-[#AEAEAE] text-[14px] font-normal">
          ({course.lesson} lessons)
        </span>
      </p>
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center bg-[#EAF4FF] rounded-md px-2 py-1 gap-2 text-[#3D8FEF]">
          <MdAccessTime />
          <span className="text-sm font-poppins">{course.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-[#FFC71E]">
          <FaStar />
          <span className="text-sm font-poppins text-[#AEAEAE]">
            {course.rating}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const BoughtTogether = () => {
  return (
    <div className="w-full h-auto py-4 bg-white flex flex-col items-center justify-center px-4 md:px-4 font-['Poppins'] ">
      <h2 className="text-2xl md:text-[40px] font-semibold mb-3 text-center md:text-left">
        Your{" "} <span className="text-orange-500">Software Development</span>{" "}Growth Path
      </h2>
      <h3 className="text-base max-w-2xl  md:text-[20px] font-medium mb-8 md:mb-10 text-center">
        Bundle up the best skillsets for faster career growth & higher ROI.
      </h3>
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-4">
        {courses.slice(0, 3).map((course, index, arr) => (
          <React.Fragment key={course.id}>
            <CourseCard course={course} />
            {index < arr.length - 1 && (
              <span className="text-4xl md:text-[40px] font-medium my-4 md:my-0 mx-0 md:mx-2 hidden md:block">
                +
              </span>
            )}
          </React.Fragment>
        ))}

        <span className="text-4xl font-bold my-4 md:my-0 mx-0 md:mx-2 hidden md:block">
          =
        </span>
        
        <div className="flex flex-col w-[260px] md:w-[231px] h-auto md:h-[122px] mt-4 md:mt-10 flex-shrink-0 items-center bg-white border border-gray-200 rounded-xl shadow-md p-4 md:p-2 ml-0 md:ml-4">
          <div className="flex items-center gap-1">
            <p className="text-[18px] md:text-[20px] mt-2 font-normal line-through text-black">
              Rs 30,000
            </p>
            <p className="text-[18px] md:text-[20px] text-[#FF6501] font-medium">
              Rs 9,999
            </p>
          </div>
          <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-[20px] md:text-[24px] py-2 rounded-md transition">
            Purchase Now
          </button>
        </div>
      </div>
      <hr className="w-full border-t-[2px] border-gray-100 mt-10 md:mt-14" />
    </div>
  );
};

export default BoughtTogether;
