import React, { useState } from "react";

const modules = [
  {
    title: "Module 1: Digital Marketing Foundations (Month 1–2)",
    items: [
      "Marketing Funnel (AIDA), Buyer Personas",
      "Branding, Storytelling & Copywriting",
      "SEO (On-page, Off-page, Technical)",
      "Google Search Console, Ahrefs Basics",
      "Introduction to Generative AI in Marketing",
      "Competitor Analysis & Keyword Research (with AI tools)"
    ],
  },
  {
    title: "Module 2: AI Tools + Paid Marketing & Automation (Month 3–4)",
    items: [
      "Google Ads (Search + Display + Video)",
      "Facebook/Instagram Ads + Pixel Setup",
      "AI for Ad Copywriting, Creatives & Targeting (ChatGPT, Canva AI, Copy.ai, Jasper)",
      "Email Marketing Tools (Mailchimp, Sendinblue)",
      "WhatsApp Marketing (API, AI Chatbots, Auto Replies)",
      "Retargeting Campaigns",
      "Lead Funnel Creation with Zapier + Google Forms + Notion"
    ],
  },
  {
    title: "Module 3: Capstone Projects + Analytics (Month 5)",
    items: [
      "Google Ads Campaign for a Mock Brand",
      "Instagram Reels Growth Strategy with AI Analytics",
      "Email Campaign Automation",
      "Create and Run WhatsApp Lead Generation Bot",
      "SEO Audit for a Website",
      "Personal Brand Strategy + Blog Setup",
      "Meta Business Suite, Canva, ChatGPT",
      "Google Analytics, Google Tag Manager",
      "Notion, Trello for planning & workflow"
    ],
  },
  {
    title: "Module 4: Placement Prep + Resume + Profile Building (Month 6)",
    items: [
      "Building Digital Marketing Resume + LinkedIn Optimization",
      "Personal Portfolio Website (Google Sites/WordPress)",
      "Mock Interviews (Marketing + HR)",
      "Practice Assignments",
      "Weekly Placement Support (jobs, referrals, live sessions)"
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
          Your{" "}<span className="text-orange-500">Digital Marketing{" "}</span>Growth Path
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