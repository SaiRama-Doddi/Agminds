import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ================= IMAGE ================= */}
      <div className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] w-full">
        <img
          src="https://reviewofmm.com/wp-content/uploads/2019/06/GettyImages-1069283718.jpg" // put image in /public
          alt="Nature learning"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl text-left"
          >
         {/*    <h1 className="
              text-white font-bold leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            ">
              Learning Grows Best  
              <span className="block text-[#F3C94B]">
                In Nature
              </span>
            </h1>

            <p className="
              mt-5 text-white/90
              text-base sm:text-lg md:text-xl
            ">
              Outdoor education programs designed to inspire curiosity,
              creativity, and confidence in every child.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="
                px-8 py-3 rounded-full
                bg-[#F3C94B] text-black font-semibold
                hover:bg-[#e0b93f] transition
              ">
                Explore Programs
              </button>

              <button className="
                px-8 py-3 rounded-full
                border-2 border-white text-white font-semibold
                hover:bg-white hover:text-black transition
              ">
                Learn More
              </button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
