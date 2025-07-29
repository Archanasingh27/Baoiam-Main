import { useState } from "react";
import { FaPlus, FaTimes, FaArrowRight } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. What is the Software Development Course (SDC)?",
      answer:
        "A Software Development course, in simple words, teaches you how to design and build applications using programming languages like Java, Python, and frameworks like React or Node.js. You’ll gain hands-on experience in writing clean code, debugging, and deploying software solutions. This course is ideal for beginners and professionals looking to upskill and start a career in software development."
    },
    {
      question: "2. Is this a certified course?",
      answer:
        "Yes, after successful completion, you’ll receive a certification that demonstrates your proficiency in software development and is recognized by leading tech companies."
    },
    {
      question: "3. Does this course require prior coding experience?",
      answer:
        "No prior coding knowledge is required. The course starts with the fundamentals of programming and gradually covers advanced concepts, making it suitable for absolute beginners."
    },
    {
      question: "4. Does this course have real-time projects too?",
      answer:
        "Yes, you’ll work on real-world projects like developing websites, building mobile apps, and creating APIs. These projects will help you build a strong portfolio to showcase your skills to potential employers."
    },
    {
      question: "5. Does this course provide placement assistance?",
      answer:
        "Yes, placement support is included with guidance on resume building, technical interviews, and connecting you with hiring partners in the software industry."
    },
    {
      question: "6. How long is the course duration?",
      answer:
        "The course duration typically ranges from 6 to 9 months, depending on the track and intensity you choose."
    }
  ];

  const leftFaqs = faqData.slice(0, 3);
  const rightFaqs = faqData.slice(3);

  const renderFAQItem = (item, index) => (
    <div
      key={index}
      className={`rounded-lg text-[18px] font-medium overflow-hidden shadow-sm transition-all duration-300 p-2 mb-4 ${
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
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full lg:mb-16 p-8 font-['Poppins']">
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

export default FAQ;