import React from 'react';
import gIcon from '../../assets/GCEP/maillogo.png';

const JoinGCEP = () => {
  const steps = [
    {
      title: 'Submit an Inquiry',
      desc: 'submit an inquiry via our partnership form at bottom.',
    },
    {
      title: 'Review & Discuss',
      desc: "we will review your institution's goals & proceed for discussion.",
    },
    {
      title: 'Tailored Partnership',
      desc: 'Once approved, plan a tailored partnership to meet your educational needs.',
    },
  ];

  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold mb-3 md:mb-4">
        How to <span className="text-orange-500">join GCEP ?</span>
      </h2>
      <p className="text-gray-600 text-lg sm:text-xl md:text-[24px] mb-8 md:mb-16">
        Follow these steps to become a partner and collaborate with us.
      </p>

      <div className="w-full relative flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-8 xl:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="relative w-full max-w-xs sm:max-w-sm md:max-w-[300px] lg:max-w-sm">
            
            
            {/* Enhanced Dashed Connection Line */}
           {index < steps.length - 1 && (
  <>
    {/* Mobile: Vertical dashed line card */}
    <div className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 h-12 w-px">
      <svg width="2" height="100%" viewBox="0 0 2 100">
        <line 
          x1="1" y1="0" x2="1" y2="100%" 
          stroke="#F97316" 
          strokeWidth="3" 
          strokeDasharray="8,8" 
        />
      </svg>
    </div>
    
    {/* connector with endpoints */}
    <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 z-0 w-[100px] h-[50px]">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 120 50"
      
      >
      
        <path
          d={index % 2 === 0
    ? "M0,50 A50,50 0 0,1 80,80"  
    : "M0,20 A50,50 0 0,0 70,10"   
  }
         
          stroke="#F97316"
          strokeWidth="3"
          strokeDasharray="8,8"
          fill="none"
        />
      </svg>
    </div>
  </>
)}
            {/* Step Card */}
            <div className="bg-white rounded-xl shadow-md p-6 w-full text-center relative z-10 mb-12 md:mb-0">
              <div className="flex justify-center -mt-16 mb-6 md:mb-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] rounded-full bg-white shadow-md flex items-center justify-center">
                  <img 
                    src={gIcon} 
                    alt="Step icon" 
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px]" 
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl md:text-[22px] font-medium mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base md:text-[16px] text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinGCEP;