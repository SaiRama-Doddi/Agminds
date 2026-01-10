import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Wheat, Cloud, Mountain } from 'lucide-react';

const LearnSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const themes = [
    {
      icon: Mountain,
      title: 'Soil',
      description:
        'Understanding the foundation of life — soil composition, health, and its role in ecosystems',
    },
    {
      icon: Droplets,
      title: 'Water',
      description:
        'Exploring water cycles, conservation, and the interconnectedness of water in nature',
    },
    {
      icon: Wheat,
      title: 'Food',
      description:
        'From seed to table — understanding food systems, nutrition, and sustainable practices',
    },
    {
      icon: Cloud,
      title: 'Climate & Cycles',
      description:
        'Natural cycles, weather patterns, and how everything in nature is connected',
    },
  ];

  return (
    <section
      id="learn"
      ref={ref}
      className="py-24 bg-[#664343] relative overflow-hidden font-serifSoft"
    >
      {/* background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(20,184,166,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6 uppercase tracking-wide"
           style={{
    color: '#F4F1E8',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600, // VERY IMPORTANT for Wix-like look
    letterSpacing: '0.02em', // subtle, not wide
    textTransform: 'none', // Wix text is NOT aggressive uppercase
  }}
          >
            Learning Resources
          </motion.h1>

          {/* SUB HEADING */}
          <h2 className="text-xl sm:text-2xl font-bold text-amber-100 mb-6">
            Explore &{' '}
            <span className="bg-amber-100 bg-clip-text text-transparent">
              Discover
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-xl text-amber-50 max-w-3xl mx-auto leading-relaxed">
            Dive into our carefully curated content across key themes in nature
            education.
          </p>
        </motion.div>

        {/* CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#FBF7E8] rounded-3xl p-10 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-black">
                Additional Resources
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 p-6 bg-black/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <p className="text-black text-lg">
                  <span className="font-semibold">
                    Coming Soon:
                  </span>{' '}
                  Interactive learning modules, downloadable guides, and
                  community learning circles.
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
