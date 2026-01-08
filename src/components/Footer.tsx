import { Link } from 'react-router-dom';
import { Sprout, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Our Approach', path: '/', hash: '#approach' },
    { name: 'Learn', path: '/', hash: '#learn' },
  ];

  const resourceLinks = [
    { name: 'Collaborate', path: '/', hash: '#collaborate' },
    { name: 'Founder', path: '/', hash: '#founder' },
    { name: 'Contact Us', path: '/contact' },
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
    <footer className="bg-gradient-to-r from-[#776833] to-[#798237] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
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
    md:w-20 md:h-18
    lg:w-20 lg:h-20
    object-contain
    rounded-full
    group-hover:scale-110
    transition-transform
    duration-300
  "
/>

  </div>

  {/* Brand Name */}
  <span className="
    text-xl sm:text-2xl
    font-bold
    bg-gradient-to-r from-[#677845] to-[#5B5B29]
    text-white
    bg-clip-text text-transparent
    whitespace-nowrap
  ">
    AgMinds
  </span>
</Link>
            </div>
            <p className="text-emerald-100/80 leading-relaxed">
              Helping children understand nature — before they are asked to protect it.
              Building curious minds through concept-based learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#c8d09b] flex items-center justify-center hover:bg-[#c1cc82] hover:scale-110 transition-all duration-300"
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
                    to={link.path + link.hash}
                    onClick={() => handleNavClick(link.hash)}
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
            <h3 className="text-lg font-semibold mb-6 text-emerald-300">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path + (link.hash || '')}
                    onClick={() => link.hash && handleNavClick(link.hash)}
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
                <a href="tel:+1234567890" className="hover:text-emerald-300 transition-colors">
                  +1 (234) 567-890
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
