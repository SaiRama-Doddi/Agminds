import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Leaf, Droplet, Sun } from 'lucide-react';

const HeroSection = () => {
  const floatingIcons = [
    { Icon: Leaf, delay: 0, position: 'top-20 left-10' },
    { Icon: Droplet, delay: 0.2, position: 'top-40 right-20' },
    { Icon: Sun, delay: 0.4, position: 'bottom-40 left-20' },
    { Icon: Sparkles, delay: 0.6, position: 'bottom-20 right-10' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#c8d09b] via-teal-50 to-[#c5d664]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNTk2NjkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bTAgMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnpNMCAxNmMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyUzAgMjIuNjI3IDAgMTZ6bTAgMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDQ2LjYyNyAwIDQweiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{
            delay,
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 2,
          }}
          className={`absolute hidden lg:block ${position}`}
        >
          <Icon className="w-12 h-12 text-emerald-600/30" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* <span className="inline-block px-6 py-2 bg-[#c8d09b] text-[#798237] rounded-full text-sm font-semibold mb-6">
              Growing Curious Minds
            </span> */}
          </motion.div>

        <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
  style={{
    color: '#1F3D2B',
    fontFamily: "'Playfair Display', 'Canela', 'Libre Baskerville', serif"
  }}
>
  AgMinds helps children{' '}
  <span
    style={{
      color: '#C8A24A',
      fontWeight: 600
    }}
  >
    understand nature
  </span>{' '}
  before they are asked to protect it.
</motion.h1>


         <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
  style={{
    color: '#7A5C42',
    fontFamily: "'Inter', 'Source Sans 3', 'IBM Plex Sans', sans-serif"
  }}
>
  In an increasingly structured and screen-driven world, AgMinds creates space for curiosity, observation, and meaningful understanding of{' '}
  <span style={{ color: '#9CAF88', fontWeight: 500 }}>
    soil, water, food, and natural cycles
  </span>.
</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#learn"
              className="group px-8 py-4 bg-gradient-to-r from-[#776833] to-[#798237] text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Explore Learning</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#collaborate"
              className="px-8 py-4 bg-white text-[#776833] border-2 border-[#776833] rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Collaborate With Us
            </a>
          </motion.div>

      
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#776833] rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#776833] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
