import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import FeaturedCourses from './FeaturedCourses';
import InsightsSection from './InsightsSection';
import StandOut from './StandOut';
import Testimonial from './Testimonial';
import FAQSection from './FAQSection';
import Prestige from './Prestige';
import Contact from '../Footer/Contact';
import Partner from './Partner';
import TeamSection from './TeamSection';
import OurProgram from './OurProgram';
import DataScienceBanner from './DataScienceBanner';
import Footer from '../Footer/Footer';
import Webinars from './Webinars';
import FoundersNote from './FoundersNote';

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <OurProgram/>
      <Webinars/>
      <FeaturedCourses/>
      <DataScienceBanner/>
      <InsightsSection/>
      <StandOut/>
      <Partner/>
      <TeamSection/>
      <FoundersNote/>
      <Prestige/>
      <Testimonial/>
      <FAQSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}
