import React, { useState } from "react";

const modules = [
  {
    title: "Module 1: Foundation & Skill Building (Month 1–3)",
    items: [
      "HTML5, CSS3, Responsive Design",
      "JavaScript (ES6+), DOM Manipulation",
      "Version Control: Git & GitHub",
      "Bootstrap, Tailwind CSS",
      "Programming Logic & Flowcharts",
      "Introduction to Data Structures & Algorithms (DSA)",
      "Problem Solving with JavaScript",
      "Coding Assignments",
      "Mini Projects (Portfolio Website, Calculator, etc.)",
      "Code Reviews & Mentorship"
    ],
  },
  {
    title: "Module 2: Advanced Development & Real-World Projects (Month 4–6)",
    items: [
      "Node.js, Express.js",
      "RESTful APIs",
      "MongoDB, Mongoose",
      "Authentication (JWT, OAuth)",
      "Deployment (Render, Vercel, Netlify)",
      "Blog Application",
      "E-commerce Clone",
      "Job Portal or LMS",
      "Portfolio Integration (GitHub + Live Link)",
      "Git Workflows (Branches, PRs)",
      "Team Collaboration via GitHub",
      "Daily Standups, Sprints"
    ],
  },
  {
    title: "Module 3: Internship + Mentorship (Month 7–9)",
    items: [
      "Work on Real Industry Use Cases",
      "Team-Based Product Development",
      "Code Reviews from Mentors",
      "Weekly Mentorship Calls",
      "Task Tracking via Notion or Jira",
      "SaaS Dashboard",
      "Live Product Bug Fixes",
      "Contribution to Open Source"
    ],
  },
  {
    title: "Module 4: Career Launchpad & Placement (Month 10–12)",
    items: [
      "Resume Building (ATS-Optimized)",
      "LinkedIn + GitHub Optimization",
      "Mock Interviews (Tech + HR)",
      "DSA Practice: Arrays, Strings, Trees, etc.",
      "1:1 Counseling & Roadmap",
      "Weekly Job Updates",
      "Referral Opportunities",
      "Soft Skills & Interview Etiquette"
    ],
  },
  {
    title: "Certificate",
    items: [
      "Certificate of Completion from Baoiam"
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
          Your{" "}<span className="text-orange-500">Software Development{" "}</span>Growth Path
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