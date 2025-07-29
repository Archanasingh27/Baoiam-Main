import React from 'react'
import HeroSection_C from './HeroSection_C'
import Footer from "../Footer/Footer"
import FAQ_C from './FAQ_C'
import DiscountBanner from '../DataAnalysis/DiscountBanner'
import BoughtTogether from './BoughtTogether'
import FlexibleCourses from './FlexibleCourses'
import Navbar_C from "../DataAnalysis/Navbar_C";
import LearningJourney from './LearningJourney'
import CertificateSection from './CertificateSection'
import Experts from '../DataAnalysis/Experts'
const DataSciencePage = () => {
  return (
    <div>
      <Navbar_C/>
      <HeroSection_C/>
      <LearningJourney/>
      <BoughtTogether/>
      <Experts/>
      <CertificateSection/>
      <FlexibleCourses/>
      <FAQ_C/>
      <DiscountBanner/>
      <Footer/>
    </div>
  )
}

export default DataSciencePage;