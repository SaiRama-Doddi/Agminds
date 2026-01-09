import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const closeAllMenus = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Programs', path: '/coming-soon' },
    {
      name: 'Resources',
      children: [{ name: 'Videos', path: '/coming-soon' }],
    },
    {
      name: 'More',
      children: [
        { name: 'About', path: '/about' },
        { name: 'Workshops', path: '/coming-soon' },
        { name: 'Blogs', path: '/coming-soon' },
        { name: 'Employment', path: '/coming-soon' },
        { name: 'Founder Note', path: '/founder' },
        { name: 'Contact', path: '/contact' },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FBF7E8] shadow-lg' : 'bg-[#FBF7E8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            isScrolled ? 'h-20' : 'h-28'
          }`}
        >
          {/* LOGO */}
          <Link to="/" onClick={closeAllMenus} className="flex items-center">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className={`rounded-full object-contain transition-all duration-300 ${
                isScrolled ? 'h-16' : 'h-24'
              }`}
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center text-sm font-medium text-black">
            {menuItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 hover:underline underline-offset-4">
                      {item.name}
                      <ChevronDown size={14} />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white border border-black/10 rounded-lg shadow-lg"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={closeAllMenus}
                              className="block px-5 py-3 text-sm text-black hover:bg-[#FBF7E8]"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeAllMenus}
                    className="px-4 py-2 hover:underline underline-offset-4"
                  >
                    {item.name}
                  </Link>
                )}

                {index < menuItems.length - 1 && (
                  <span className="h-5 w-px mx-1 bg-black/30" />
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT BUTTON */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              onClick={closeAllMenus}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-yellow-400 text-[#664343] hover:bg-gray-100'
                  : 'bg-[#F3C94B] text-black hover:bg-[#e0b93f]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#FBF7E8] border-t"
          >
            <div className="px-6 py-4 space-y-3">
              {menuItems.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className="w-full flex justify-between items-center py-2 font-medium"
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>

                    {openDropdown === item.name && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={closeAllMenus}
                            className="block py-2 text-sm"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeAllMenus}
                    className="block py-2"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
