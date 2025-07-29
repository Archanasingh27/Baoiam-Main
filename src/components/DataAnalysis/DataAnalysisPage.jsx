import React from 'react'
import HeroSection_C from './HeroSection_C'
import Footer from "../Footer/Footer"
import FAQ_C from './FAQ_C'
import DiscountBanner from './DiscountBanner'
import BoughtTogether from './BoughtTogether'
import Experts from './Experts'
import FlexibleCourses from './FlexibleCourses'
import Navbar_C from './Navbar_C'
import LearningJourney from './LearningJourney'
import CertificateSection from '../DataScience/CertificateSection'

const DataAnalysisPage = () => {
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

export default DataAnalysisPage;