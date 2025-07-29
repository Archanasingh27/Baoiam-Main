import React, { useState } from "react";
import Group from "../../assets/Home/Lines/Group.webp";
import ContactForm from "../../Pages/ContactForm";
import { Link } from "react-router-dom";

const AmbassadorAdvice = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Start with video paused
  const [showModal, setShowModal] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true); // Play when clicked
  };

  return (
    <section className="relative font-['Poppins'] overflow-hidden">
      {/* Top White Area (unchanged) */}
      <div className="bg-white text-center px-4 py-12 mb-28">
        <div className="flex items-center justify-center w-full mb-4">
          <h2 className="text-3xl md:text-[48px] font-semibold mb-2">
            Breaking <span className="text-orange-500">Barriers,</span>{" "}
            <span className="text-black">Building</span>
            <span className="text-orange-500"> Futures</span>
          </h2>
          <img src={Group} alt="" className="w-9 mb-4" />
        </div>
        <p className="mx-auto text-black md:text-[24px] mb-6">
          Bonya's journey from resilience to leadership now fuels a movement of
          inclusion.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/DataScience">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md md:text-xl font-medium transition">
              Enroll Now
            </button>
          </Link>
          <div className="text-left">
            <button
              className="bg-black text-white border rounded-lg py-2 px-4 text-xl hover:bg-[#7B7B7B]"
              onClick={() => setShowModal(true)}
            >
              Talk to our Counsellor
            </button>
            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="relative max-w-xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
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

      {/* Bottom Orange Background */}
      <div className="bg-[#FF6501B2] h-[105px] md:h-[305px] relative">
        <div className="absolute inset-x-0 -top-[75px] md:-top-[100px] flex justify-center">
          <div 
            className="relative w-[90%] max-w-4xl rounded-2xl overflow-hidden shadow-lg"
            onClick={handleVideoClick}
          >
            <div className="relative w-full h-0 pb-[56.25%]">
              {!isPlaying ? (
                // Show play button overlay when not playing
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer">
                  <div className="text-white text-6xl">
                    ▶️
                  </div>
                </div>
              ) : null}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/uJM97uM_SZE?autoplay=${isPlaying ? 1 : 0}&mute=0&loop=1&playlist=uJM97uM_SZE`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorAdvice;