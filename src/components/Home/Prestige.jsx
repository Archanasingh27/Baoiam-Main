import React from 'react';
import {motion} from 'framer-motion';
import '../../index.css'; 
import Accenture from "../../assets/Home/Prestige/accenture.webp";
import Cognizant from "../../assets/Home/Prestige/Cognizant.webp";
import Greyt from "../../assets/Home/Prestige/Greiyt.webp";
import TCS  from "../../assets/Home/Prestige/Tcs.webp";
import EY from "../../assets/Home/Prestige/Ey.webp";
import Mentorsity from "../../assets/Home/Prestige/Mentosity.webp";
import languify from "../../assets/Home/Prestige/Languify.webp";
import learnyst from "../../assets/Home/Prestige/Learnyst.webp";





const Prestige = () => {
    const network = [Accenture, Cognizant,TCS, Greyt, EY, Mentorsity,
        languify,learnyst
    ];

     
    return (
      
       <section className="bg-gray-100 py-10 mt-7 px-4 sm:px-6 lg:px-8 font-['Poppins']">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-[48px] font-semibold text-gray-900 mb-3">
        Our <span className="text-orange-500">Prestige</span> Network
        </h1>
        <p className="text-[24px] text-black max-w-3xl mx-auto">
          Alliances with bold startups and global leaders, spanning top-tier industries and purpose-driven ventures.
        </p>
      </div>

        <div className="w-full overflow-hidden bg-gray-100">
            <div className="container mx-auto">
              <div className='flex'>
                <motion.div 
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                      duration: 15,
                      ease: "linear",
                      repeat: Infinity,
                  }}
                  className="flex flex-shrink-0 items-center">
                    {network.map((image, index) => (
                       <div key={index} className="px-8 py-4"> {/* Reduced padding */}
                         <img 
                           className="h-12 w-auto object-contain" // Reduced size
                           src={image}  
                           alt={`Company logo ${index}`}
                         />
                       </div>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop */}
                <motion.div 
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                      duration: 15,
                      ease: "linear",
                      repeat: Infinity,
                  }}
                  className="flex flex-shrink-0 items-center">
                    {network.map((image, index) => (
                       <div key={index} className="px-8 py-4">
                         <img 
                           className="h-12 w-auto object-contain" 
                           src={image}  
                           alt={`Company logo ${index}-copy`}
                         />
                       </div>
                    ))}
                </motion.div>
              </div>
            </div>
          </div>
       </section>
    );
};

export default Prestige;