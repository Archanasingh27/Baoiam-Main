
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import m1 from "../../assets/Home/Testimonial/m1.webp";
import f1 from "../../assets/Home/Testimonial/f1.webp";
import HeadingImage from '../Lines/HeadingImages';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      content: "BAOIAM's training, expert mentorship, and practical projects gave me the confidence to secure a 9.02 LPA package as a Risk Consultant.",
      author: "Apurva Kulpe",
      role: "Risk Consultant - 9.02 LPA",
      image: f1
    },
    {
      id: 2,
      content: "Thanks to BAOIAM's structured curriculum and expert interview prep, I gained the skills and confidence to land a 5 LPA Software Developer role.",
      author: "Vishnu Vardhan",
      role: "Software Developer - 5 LPA",
      image: m1
    },
    {
      id: 3,
      content: "The hands-on projects and personalized guidance at BAOIAM helped me get placed as a Quality Engineer at 18 LPA.",
      author: "Akhil Padi",
      role: "Quality Engineer - 18 LPA",
      image: m1
    },
    {
      id: 4,
      content: "BAOIAM's industry-focused learning and placement support helped me land a 22 LPA software engineer role at Byju's.",
      author: "Vaibhav Verma",
      role: "Software Engineer at Byju's - 22 LPA",
      image: m1
    },
    {
      id: 5,
      content: "BAOIAM's mentorship, projects, and placement support helped me transform my career and crack Microsoft at 52 LPA.",
      author: "Amit Pandey",
      role: "Microsoft - 52 LPA",
      image: m1
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getCardClasses = (index) => {
    let classes = "absolute transition-all duration-500 ease-in-out p-6 rounded-xl shadow-lg h-full flex flex-col";
    const offset = index - currentIndex;

    if (window.innerWidth < 768) {
      if (offset === 0) {
        return classes + " bg-pink-100 scale-100 opacity-100 z-20 w-full left-0";
      } else {
        return classes + " hidden";
      }
    }

    if (offset === 0) {
      classes += " bg-pink-100 scale-100 opacity-100 z-20 w-2/3 left-1/2 -translate-x-1/2";
    } else if (offset === -1 || (offset === testimonials.length - 1 && currentIndex === 0)) {
      classes += " bg-green-100 scale-95 opacity-50 z-10 w-1/2 -left-1/4";
    } else if (offset === 1 || (offset === -(testimonials.length - 1) && currentIndex === testimonials.length - 1)) {
      classes += " bg-green-100 scale-95 opacity-50 z-10 w-1/2 -right-1/4";
    } else {
      classes += " hidden";
    }
    return classes;
  };

  return (
    <div className="relative max-w-6xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-10 md:mb-14">
        <HeadingImage title="Testimonials" HeadingImage="" />
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-2">
          Experts who guide, Mentors who matter. We teach what you need
        </p>
      </div>

      <div className="relative h-[320px] sm:h-[280px] md:h-[240px] max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${getCardClasses(index)}`}
          >
            <div className="flex-grow flex flex-col">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="space-y-1">
                  <p className="font-bold text-gray-800 text-lg">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex-grow flex mt-1">
                <p className="text-gray-700 text-base md:text-lg italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 md:mt-10 gap-6">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center rounded-full w-12 h-12 hover:bg-orange-50 transition-colors"
          style={{ backgroundColor: "#FFF4E5" }}
          aria-label="Previous testimonial"
        >
          <FaArrowLeft className="text-xl" color="#FF6501" />
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center rounded-full w-12 h-12 hover:bg-orange-50 transition-colors"
          style={{ backgroundColor: "#FFF4E5" }}
          aria-label="Next testimonial"
        >
          <FaArrowRight className="text-xl" color="#FF6501" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;