import { useState } from "react";
import { FaPlus, FaTimes, FaArrowRight } from "react-icons/fa";

const FAQ_C = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 const faqData = [
  {
    question: "1. What will I actually learn in this course?",
    answer: `You’ll learn how to take messy or confusing data and turn it into something useful. Imagine playing detective – spotting patterns in sales, customer feedback, or social media trends. We’ll guide you through practical steps like cleaning data (fixing mistakes or gaps), analyzing it using simple tools, and presenting your findings in clear, visual reports.`,
  },
  {
    question: "2. I’m not great at math – is this still for me?",
    answer: `Yes, 100%. You only need basic math like calculating averages or percentages. The tools we use will do all the heavy lifting. What matters more is curiosity and asking the right questions – not solving complex equations.`,
  },
  {
    question: "3. What tools will we use? Do I need to buy anything?",
    answer: `We’ll begin with tools like Excel (which you probably already have), then move on to free platforms like Google Sheets and SQL. If we introduce Python, we’ll teach it from scratch. You don’t need to buy any expensive software.`,
  },
  {
    question: "4. Will there be real projects?",
    answer: `Absolutely. You’ll work on real-world datasets and answer questions like:\n\n- Which products sell best at different times?\n- What trends show up in customer feedback?\n- How do I build a dashboard to track key numbers?\n\nThese projects are not only practical but also great for your resume or portfolio.`,
  },
  {
    question: "5. How is this better than just watching YouTube tutorials?",
    answer: `Great question. Instead of jumping around from video to video, you’ll follow a clear learning path. You’ll get hands-on projects, feedback when you need it, support if you get stuck, and a certificate that shows you’ve actually done the work.`,
  },
  {
    question: "6. How will this help me in my career?",
    answer: `Data skills are in demand everywhere. Whether you’re aiming for a promotion, switching careers, or just want to feel more confident working with numbers, this course gives you the practical skills to get there. Plus, the projects you complete can be shown to potential employers.`,
  },
];

  const leftFaqs = faqData.slice(0, 3);
  const rightFaqs = faqData.slice(3);

    const renderFAQItem = (item, index) => (
    <div
      key={index}
      className={`rounded-lg text-[18px] font-med overflow-hidden shadow-sm transition-all duration-300 p-2 mb-4 ${
        openIndex === index ? "bg-white shadow" : "bg-white"
      }`}
      style={{ minHeight: openIndex === index ? "auto" : "80px" }}
    >
      <button
        onClick={() => toggleIndex(index)}
        className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-900 font-medium focus:outline-none transition text-[20px]"
      >
        <span>{item.question}</span>
        {openIndex === index ? (
          <span className="w-[44px] h-[44px] p-[10px] rounded-[6px] bg-[#FFF4E5] flex items-center justify-center">
            <FaTimes className="text-gray-600 text-xl" />
          </span>
        ) : (
          <span className="w-[44px] h-[44px] p-[10px] rounded-[6px] bg-[#FFF4E5] flex items-center justify-center">
            <FaPlus className="text-gray-600 text-xl" />
          </span>
        )}
      </button>
      {openIndex === index && (
        <div className="px-5 pb-4 text-gray-700 text-sm border-t border-gray-300">
          <p className="mb-3 mt-4 text-[18px]">{item.answer}</p>
          <div className="bg-gray-100 mt-3 border-gray-200 p-4 rounded-lg flex items-center justify-between">
            <p className="text-[16px] font-medium">
              Enrollment Process for the Program
            </p>
            <button className="flex items-center justify-center rounded-full bg-white p-4">
              <FaArrowRight className="text-[16px]" />
            </button>
          </div>
          {item.button && (
            <a
              href={item.button.link}
              className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium mt-3"
            >
              {item.button.text}
              <span className="ml-2">→</span>
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full lg:mb-16 p-8 font-['Poppins'] ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-8 text-[18px]">
          Still you have any questions? Contact our Team via
          <br />
          <a href="mailto:support@baoiam.com">support@baoiam.com</a>
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/2">
            {leftFaqs.map((item, index) => renderFAQItem(item, index))}
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            {rightFaqs.map((item, index) => renderFAQItem(item, index + 3))}
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button className="mt-4 px-5 py-2 border rounded-md bg-gray-200 border-gray-300 hover:bg-gray-100 transition">
            See All FAQ’s
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ_C;
