import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import Partner from "../../components/Home/Partner.jsx";
import Header from "./Header.jsx";
import JoinSection from "./Joingcp.jsx";
import WhyJoinSection from "./JoinUs.jsx";
import Contact from "./Contact.jsx";

const AboutUSPage = () => {
  return (
    <div>
        <Header/>
        <JoinSection/>
        <Partner/>
       <WhyJoinSection/>
       <Contact/>
      <Footer />
    </div>
  );
};

export default AboutUSPage;