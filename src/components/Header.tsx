import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Approach', path: '/', hash: '#approach' },
    { name: 'Learn', path: '/', hash: '#learn' },
    { name: 'Collaborate', path: '/', hash: '#collaborate' },
    { name: 'Founder', path: '/', hash: '#founder' },
    { name: 'Contact', path: '/contact', hash: '' },
  ];

  const handleNavClick = (hash: string) => {
    if (hash && location.pathname === '/') {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#664343] backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
    
<Link to="/" className="flex items-center space-x-3 group">
  {/* Logo wrapper */}
  <div className="relative flex-shrink-0">
    {/* Glow */}
    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl 
                    group-hover:bg-emerald-500/30 transition-all duration-300" />

    {/* Logo Image */}
   <img
  src="/logo.jpeg"
  alt="AgMinds Logo"
  className="
    relative z-10
    w-16 h-16
    sm:w-18 sm:h-18
    md:w-18 md:h-18
    lg:w-18 lg:h-18
    object-contain
    rounded-full
    group-hover:scale-110
    transition-transform
    duration-300
  "
/>

  </div>

  {/* Brand Name */}
 {/*  <span className="
    text-xl sm:text-2xl
    font-bold
    bg-gradient-to-r from-[#677845] to-[#5B5B29]
    bg-clip-text text-transparent
    whitespace-nowrap
  ">
    AgMinds
  </span> */}
</Link>


          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
           <Link
  key={link.name}
  to={link.path + link.hash}
  onClick={() => handleNavClick(link.hash)}
  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
    ${
      location.pathname === link.path && link.path !== '/'
        ? isScrolled
          ? 'text-white bg-emerald-600'
          : 'text-emerald-700 bg-emerald-50'
        : isScrolled
        ? 'text-white hover:bg-white/10 hover:text-emerald-200'
        : 'text-gray-800 hover:text-emerald-700 hover:bg-emerald-50'
    }
  `}
>

                {link.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path + link.hash}
                    onClick={() => handleNavClick(link.hash)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      location.pathname === link.path && link.path !== '/'
                        ? 'text-emerald-700 bg-emerald-50'
                        : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
