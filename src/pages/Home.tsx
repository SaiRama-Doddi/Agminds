import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ApproachSection from '../components/sections/ApproachSection';
import LearnSection from '../components/sections/LearnSection';
import CollaborateSection from '../components/sections/CollaborateSection';
import FounderSection from '../components/sections/FounderSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO />
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <LearnSection />
      <CollaborateSection />
      <FounderSection />
    </motion.div>
  );
};

export default Home;
