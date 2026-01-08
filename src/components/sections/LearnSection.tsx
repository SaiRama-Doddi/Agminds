import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Droplets, Wheat, Cloud, Mountain } from 'lucide-react';

const LearnSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const themes = [
    {
      icon: Mountain,
      title: 'Soil',
      description: 'Understanding the foundation of life — soil composition, health, and its role in ecosystems',
      color: 'from-amber-600 to-orange-600',
      bgColor: 'bg-amber-50',
      videos: '12 Videos',
    },
    {
      icon: Droplets,
      title: 'Water',
      description: 'Exploring water cycles, conservation, and the interconnectedness of water in nature',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50',
      videos: '15 Videos',
    },
    {
      icon: Wheat,
      title: 'Food',
      description: 'From seed to table — understanding food systems, nutrition, and sustainable practices',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      videos: '18 Videos',
    },
    {
      icon: Cloud,
      title: 'Climate & Cycles',
      description: 'Natural cycles, weather patterns, and how everything in nature is connected',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      videos: '10 Videos',
    },
  ];



  return (
    <section id="learn" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(20,184,166,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span   className="inline-block px-8 py-3 rounded-full mb-8"  style={{
    background: 'linear-gradient(135deg, #c8d09b, #f4f1ec, #c5d664)',
    color: '#1F3D2B', // Deep Forest Green
    border: '1.5px solid #C8A24A', // Soft Sun Ochre
    fontFamily: "'Playfair Display', 'Canela', 'Libre Baskerville', serif",
    fontSize: '1.1rem',
    fontWeight: 600,
    letterSpacing: '0.08em'
  }}>
            Learning Resources
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-6"  style={{
   
    fontFamily: "'Playfair Display', 'Canela', 'Libre Baskerville', serif"
  }}>
            Explore &{' '}
            <span className="bg-gradient-to-r from-[#776833] to-[#798237] bg-clip-text text-transparent">
              Discover
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{
 
    fontFamily: "'Inter', 'Source Sans 3', 'IBM Plex Sans', sans-serif"
  }}>
            Dive into our carefully curated content across key themes in nature education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative ${theme.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-emerald-200 overflow-hidden`}>
                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                  <theme.icon className="w-full h-full" />
                </div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <theme.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{theme.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{theme.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">{theme.videos}</span>
                    <button className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 font-medium text-gray-800">
                      <Play className="w-4 h-4" />
                      <span>Watch Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#776833] to-[#798237] rounded-3xl p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8">Additional Resources</h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <p className="text-emerald-200 text-lg">
                  <span className="font-semibold text-white">Coming Soon:</span> Interactive learning modules, downloadable guides, and community learning circles.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearnSection;
