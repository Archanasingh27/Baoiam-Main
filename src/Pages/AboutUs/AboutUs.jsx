import React from "react";
import TeamSection from "../../components/Home/Member";
import Footer from "../../components/Footer.jsx";
import Contact from "../../components/Contact.jsx";
import Header from "./Header.jsx";
import JourneySection from "./Journey.jsx";
import WhyUsSection from "./Section.jsx";
import ServicesSection from "./Service.jsx";
import EventsSection from "./Events.jsx";
const AboutUSPage = () => {
  return (
    <div>
        {/* <OurJourney/> */}
        <Header/>
        <JourneySection/>
        <WhyUsSection/>
        <ServicesSection/>
        <EventsSection/>
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUSPage;