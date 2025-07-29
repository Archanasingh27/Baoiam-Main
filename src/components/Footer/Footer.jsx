import logo from "../../assets/Home/Navbar/logoLight.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import applelogo from "../../assets/Footer/Footer2/apple.png"; // Assuming you have a download image
import googlelogo from "../../assets/Footer/Footer2/google.png"; // Assuming you have a download image

// Reusable link section component
const FooterLinksSection = ({ heading, items }) => {
  return (
    <div className="text-sm font-['Poppins']">
      <h5 className="text-white mb-6">{heading}</h5>
      <ul className="space-y-4 text-gray-500">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="group inline-flex items-center justify-between transition-all duration-200 hover:text-white hover:underline hover:decoration-orange-500"
            >
              <span>{item.label}</span>
              <FaArrowRight className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const footerData = [
    {
      heading: "TOP 4 CATEGORY",
      items: [
        { label: "Udaan 90", href: "#" },
        { label: "Success Fusion Program", href: "#" },
        { label: "Pay after Placement", href: "#" },
        { label: "Pride Fusion", href: "/pride" },
      ],
    },
    {
      heading: "QUICK LINKS",
      items: [
        { label: "About", href: "#" },
        { label: "Become Instructor", href: "#" },
        { label: "Contact", href: "#" },
        { label: "GCEP", href: "#" },
      ],
    },
    {
      heading: "SUPPORT",
      items: [
        { label: "Refund Policy", href: "/refundPolicy" },
        { label: "FAQS", href: "#" },
        { label: "Terms & Condition", href: "/terms&conditions" },
        { label: "Privacy  Policy", href: "/Privacy&Policy" },
      ],
    },
  ];

  return (
    <footer className="text-gray-500 px-4 md:px-28 pt-5 bg-[#1D2026] font-['Poppins']">
      {/* Top Footer */}
      <div className="flex flex-wrap justify-between gap-6">
        {/* Logo + Social */}
        <div className="max-w-sm">
          <img
            src={logo}
            alt="Baoiam Logo"
            className="h-[72px] w-[100px] mb-1"
          />
          <p className="text-base  text-justify mb-4">
            Follow us for the latest updates, career insights, and program
            launches.
          </p>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/p/%F0%9D%98%BD%F0%9D%98%BC%F0%9D%99%8A-%F0%9D%99%84%F0%9D%98%BC%F0%9D%99%88-%F0%9D%98%89%F0%9D%98%A6-%F0%9D%98%88-%F0%9D%98%96%F0%9D%98%AF%F0%9D%98%A6-%F0%9D%98%90%F0%9D%98%AF-%F0%9D%98%88-%F0%9D%98%94%F0%9D%98%AA%F0%9D%98%AD%F0%9D%98%AD%F0%9D%98%AA%F0%9D%98%B0%F0%9D%98%AF-100064896061625/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white transition-colors bg-[#363B4766] hover:bg-orange-500"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.instagram.com/baoiamofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white transition-colors bg-[#363B4766] hover:bg-orange-500"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/baoiam-innovations-pvt-ltd/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white transition-colors bg-[#363B4766] hover:bg-orange-500"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://x.com/baoiam1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white transition-colors bg-[#363B4766] hover:bg-orange-500"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCuUUMNDJ3DT-Ud_k5tkMVyA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white transition-colors bg-[#363B4766] hover:bg-orange-500"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Dynamic Sections */}
        {footerData.map((section, index) => (
          <FooterLinksSection
            key={index}
            heading={section.heading}
            items={section.items}
          />
        ))}

        {/* App Download */}
        <div className="text-sm">
          <h5 className="text-white mb-6">DOWNLOAD OUR APP</h5>

          <a href="https://play.google.com/store" target="_blank">
            <img src={applelogo} alt="App Store" className="h-[58px] w-40" />
          </a>
          <a href="https://play.google.com/store" target="_blank">
            <img
              src={googlelogo}
              alt="Google Play"
              className="h-[58px] w-40 mt-4"
            />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="-mx-4 md:-mx-28 mt-18">
        <hr className="w-full border-t border-gray-700" />
      </div>

      {/* Bottom Footer */}
      <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4 pb-12">
        <p>
          © 2021 - Designed by <span className="text-gray-200">Baoiam.</span>{" "}
          All rights reserved.
        </p>

        <div>
          <select
            name="language"
            className="bg-[#1D2026] py-2 border-[#363B47] border-[1px] flex justify-between w-[140px] p-2 text-gray-500"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Bengali</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
