import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Leaf, Droplet, Sun } from 'lucide-react';

const HeroSection = () => {
  const floatingIcons = [
    { Icon: Leaf, delay: 0, position: 'top-16 left-10' },
    { Icon: Droplet, delay: 0.2, position: 'top-32 right-20' },
    { Icon: Sun, delay: 0.4, position: 'bottom-32 left-20' },
    { Icon: Sparkles, delay: 0.6, position: 'bottom-20 right-10' },
  ];

  return (
    <section
      id="home"
      className="
        relative
        min-h-[70vh]
        sm:min-h-[65vh]
        lg:min-h-[70vh]
        flex items-center justify-center
        overflow-hidden
        bg-[#664343]
        mt-6
      "
    >
      {/* subtle texture */}
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDQiPjxwYXRoIGQ9Ik0zNiAxNmMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyem0wIDI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>

      {/* floating icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.35, y: 0 }}
          transition={{
            delay,
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 2,
          }}
          className={`absolute hidden lg:block ${position}`}
        >
          <Icon className="w-10 h-10 text-[#E6EAD8]" />
        </motion.div>
      ))}

      {/* content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              text-3xl
              sm:text-3xl
              lg:text-5xl
              mb-6
              leading-tight
              uppercase
              tracking-wide
            "
            style={{
              color: '#F4F1E8', // soft off-white
              fontFamily: "'Chewy', cursive",
              letterSpacing: '0.04em',
            }}
          >
            Helping children reconnect to their true nature
          </motion.h1>

          {/* paragraph */}
         <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-serifSoft"
  style={{
    color: '#E6EAD8', // light sage
  }}
>
  In an increasingly structured and screen-driven world, AgMinds creates
  space for curiosity, observation, and meaningful understanding of{" "}
  <span style={{ color: '#C8D6B5', fontWeight: 500 }}>
    soil, water, food, and natural cycles
  </span>.
</motion.p>


          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#learn"
              className="
                group px-6 py-2
                bg-white
                text-[#664343]
                rounded-full
                font-bold
                text-lg
                shadow-xl
                hover:shadow-2xl
                transition-all
                duration-300
                hover:scale-105
                flex items-center gap-2
              "
            >
              <span>Explore</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#collaborate"
              className="
                px-6 py-2
                bg-transparent
                text-[#F4F1E8]
                border-2 border-[#F4F1E8]
                rounded-full
                font-bold
                text-lg
                hover:bg-white
                hover:text-[#664343]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Collaborate With Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
