import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Home/Navbar";
import HomePage from "./components/Home/HomePage";
import PridePage from "./components/Pride/PridePage";
import AuthModal from "./components/Auth/AuthModal";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import DataAnalysisPage from "./components/DataAnalysis/DataAnalysisPage";
import DataSciencePage from "./components/DataScience/DataSciencePage";
import Contact from "./components/Footer/Contact";
import ContactForm from "./Pages/ContactForm";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import DM_Page from "./components/DigitalMarketing/DM_Page";
import SD_Page from "./components/SoftwareDevelopment/SD_Page";
import RefundPolicy from "./Pages/RefundPolicy";


function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem("signupModalShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsSignupOpen(true);
        localStorage.setItem("signupModalShown", "true");
      }, 5 * 60 * 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  //success callback for signup
  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setIsSignupOpen(false);
  };

  //logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSignupOpen(true); 
  };

  return (
    <Router>
        <ScrollToTop />
      <div>
        <Routes>
          <Route path="/DataAnalysis" element={<DataAnalysisPage />} />
          <Route path="/DigitalMarketing" element={<DM_Page />} />
          <Route path="/SoftwareDevelopment" element={<SD_Page />} />
          <Route path="/DataScience" element={<DataSciencePage />} />
          <Route path="*" element={
            <>
              <Navbar onSignUpClick={() => setIsSignupOpen(true)} 

                isLoggedIn={isLoggedIn}  //update these two lines
                onLogout={handleLogout}
                />
              <AuthModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)}
                onAuthSuccess={handleAuthSuccess}  // update
              />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pride" element={<PridePage />} />
                <Route path="/terms&conditions" element={<TermsAndConditions/>} />
                <Route path="/Privacy&Policy" element={<PrivacyPolicy/>} />
                <Route path="/refundPolicy" element={<RefundPolicy/>} />
              </Routes>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;