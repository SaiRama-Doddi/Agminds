import { Link } from 'react-router-dom';
import {  Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/',  },
    { name: 'About', path: '/about',  },
    { name: 'Resources', path: '/', },
    { name: 'Learn', path: '/coming-soon', },
  ];

  const resourceLinks = [

      { name: 'Founder Note', path: '/founder' },
        { name: 'Workshops', path: '/coming-soon' },
        { name: 'Blogs', path: '/coming-soon' },
        { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const handleNavClick = (hash?: string) => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-[#664343] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3 group">
  {/* Logo wrapper */}
  <div className="relative flex-shrink-0">
    {/* Glow */}
    <div className="absolute inset-0  rounded-full blur-xl 
                     transition-all duration-300" />

    {/* Logo Image */}
    <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              
              leading-tight
           
              tracking-wide
            "
         style={{
    color: '#F4F1E8',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600, // VERY IMPORTANT for Wix-like look
    letterSpacing: '0.02em', // subtle, not wide
    textTransform: 'none', // Wix text is NOT aggressive uppercase
  }}
          >
           AgMinds
          </motion.h1>
  </div>

  {/* Brand Name */}
 {/*  <span initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              mb-6
              leading-tight
           
              tracking-wide
            "
            style={{
              color: 'white', // soft off-white
              fontFamily: "'Chewy', cursive",
              letterSpacing: '0.04em',
            }}>
    AgMinds
  </span> */}
</Link>
            </div>
            <p className="text-emerald-100/80 leading-relaxed">
             Growing curious minds
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#fbebd5] flex items-center justify-center hover:bg-[#c1cc82] hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-[#776833]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-300">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                 <Link
  to={link.path}
  className="text-emerald-100/80 hover:text-emerald-300 transition-colors duration-300 inline-flex items-center group"
>
  <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
  {link.name}
</Link>

                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-300">More</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => link.path && handleNavClick(link.path)}
                    className="text-emerald-100/80 hover:text-emerald-300 transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-300">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-emerald-100/80">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Connecting communities worldwide</span>
              </li>
              <li className="flex items-start space-x-3 text-emerald-100/80">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <a href="mailto:hello@agminds.org" className="hover:text-emerald-300 transition-colors">
                  hello@agminds.org
                </a>
              </li>
              <li className="flex items-start space-x-3 text-emerald-100/80">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <a href="tel:+919481492797" className="hover:text-emerald-300 transition-colors">
                +91 94814 92797
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-emerald-100/60 text-sm">
              © {currentYear} AgMinds. All rights reserved. Growing curious minds naturally.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-emerald-100/60 hover:text-emerald-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-emerald-100/60 hover:text-emerald-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
