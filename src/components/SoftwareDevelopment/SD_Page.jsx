import React from 'react'
import HeroSection_C from './HeroSection_C'
import Footer from "../Footer/Footer"
import DiscountBanner from '../DataAnalysis/DiscountBanner'

import CertificateSection from '../DataScience/CertificateSection'
import FlexibleCourses from '../DataScience/FlexibleCourses'

import FAQ from './FAQ'
import LearningJourney from './LearningJourney'
import Navbar_C from '../DataAnalysis/Navbar_C'
import Experts from '../DataAnalysis/Experts'
import BoughtTogether from './BoughtTogether'

const SD_Page = () => {
  return (
    <div>
      <Navbar_C/>
      <HeroSection_C/>
      <LearningJourney/>
      <BoughtTogether/>
      <Experts/>
      <CertificateSection/>
      <FlexibleCourses/>
      <FAQ/>
      <DiscountBanner/>
      <Footer/>
    </div>
  )
}

export default SD_Page;