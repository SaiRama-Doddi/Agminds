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
    <section id="learn" ref={ref} className="py-24  bg-[#664343] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(20,184,166,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              mb-6
              leading-tight
              uppercase
              tracking-wide
            "
            style={{
              color: 'white', // soft off-white
              fontFamily: "'Chewy', cursive",
              letterSpacing: '0.04em',
            }}
          >
           Learning Resources
          </motion.h1>
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white mb-6 font-serifSoft"  >
            Explore &{' '}
            <span className="text-white bg-clip-text text-transparent">
              Discover
            </span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed" style={{
 
    fontFamily: "'Inter', 'Source Sans 3', 'IBM Plex Sans', sans-serif"
  }}>
            Dive into our carefully curated content across key themes in nature education.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#FBF7E8] rounded-3xl p-10 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-black">Additional Resources</h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 p-6 bg-black/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <p className="text-black text-lg">
                  <span className="font-semibold text-black">Coming Soon:</span> Interactive learning modules, downloadable guides, and community learning circles.
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
