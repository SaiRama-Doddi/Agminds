import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ComingSoon from './components/sections/ComingSoon';
import FounderSection from './components/sections/FounderSection';
import AboutSection from './components/sections/AboutSection';
import ScrollToTop from './components/sections/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop/>
        <div className="min-h-screen flex flex-col bg-[#fbebd5]">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              <Route path="/founder" element={<FounderSection/>}/>
              <Route path="/about" element={<AboutSection/>}/>


            </Routes>
          </main>
          <Footer />
          <FloatingButtons />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
