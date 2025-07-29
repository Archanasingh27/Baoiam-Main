import React, { useState } from "react";

const modules = [
  {
    title: "Module 1: Core Learning – Foundations & Tools",
    items: [
      "Python for Data Science",
      "Data Manipulation & Visualization",
      "Statistics & Probability for Data Science",
      "SQL & Databases",
      "Mini-Projects: YouTube Data Analysis, Sales Dashboard, SQL-Based Customer Segmentation"
    ],
  },
  {
    title: "Module 2: Machine Learning & Real-World Applications",
    items: [
      "Machine Learning Basics",
      "Intermediate ML + Sklearn",
      "Deep Learning & Neural Networks",
      "Real Industry Data Projects: Churn Prediction, Recommendation System, Fraud Detection, etc.",
      "Capstone Project #1"
    ],
  },
  {
    title: "Module 3: Resume, Portfolio & Career Readiness",
    items: [
      "Resume & LinkedIn Optimization",
      "GitHub + Portfolio Website Building",
      "Effective Project Documentation",
      "Mock Assessments & Soft Skills Training",
      "Real-world Project Showcase & Feedback"
    ],
  },
  {
    title: "Module 4: Placement & Interview Preparation",
    items: [
      "Technical Mock Interviews (DSA + ML + Python)",
      "HR Interview Practice",
      "Common Interview Questions (ML, Stats, Projects)",
      "1-on-1 Mentorship & Company Referrals",
      "Placement Drives & Final Preparation"
    ],
  },
];


const LearningJourney = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col items-center justify-start bg-white pt-10 px-4 font-['Poppins']">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold"> {/* Responsive text size for h1 */}
          Your{" "}<span className="text-orange-500">Data Science{" "}</span>Growth Path
        </h1>
        <p className="text-[14px] md:text-[18px] mt-2 max-w-[900px] font-medium px-4 xl:ml-8"> {/* Responsive text size for p and added horizontal padding */}
          Follow an expertly curated roadmap to gain industry-ready skills — one step at a time.
        </p>
      </div>



      {/* Main Module Container */}
      <div className="w-full md:max-w-2xl lg:w-[723px] max-h-[790px] rounded-[10px] flex flex-col gap-[2px] bg-white shadow overflow-auto border border-gray-200">
        {modules.map((module, index) => (
          <div key={index}>
            {/* Module Title */}
            <div
              className="w-full h-[64px] px-[15px] py-[20px] flex items-center justify-between bg-[#E6E6E633] cursor-pointer rounded"
              onClick={() => toggleModule(index)}
            >
              <span className="text-[14px] md:text-[18px] font-medium font-poppins text-black"> {/* Responsive text size for module title */}
                {module.title}
              </span>
              <svg
                className={`w-4 h-4 text-gray-700 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Sub-items */}
            {openIndex === index && module.items.length > 0 && (
              <div className="flex flex-col gap-2 px-2 py-2 bg-white">
                {module.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded px-4 py-2 text-orange-500 font-medium hover:bg-orange-50 transition"
                  >
                    • {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <hr className="w-full border-t-[2px] border-gray-100 mt-12 mb-6" />
    </div>
  );
};

export default LearningJourney;