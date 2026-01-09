import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {  Heart, Target, Compass } from 'lucide-react';

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const principles = [
    {
      icon: Heart,
      title: 'Understanding First',
      description: 'Care for nature must begin with true understanding, not obligation',
    },
    {
      icon: Target,
      title: 'Depth Over Scale',
      description: 'Building slowly and thoughtfully for long-term, meaningful impact',
    },
    {
      icon: Compass,
      title: 'Nature as Guide',
      description: 'Letting natural curiosity and observation lead the learning journey',
    },
  ];

  return (
    <section id="founder" ref={ref} className="py-24 bg-[#fbebd5] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-emerald-50/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/30 to-transparent"></div>

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
              color: 'black', // soft off-white
              fontFamily: "'Chewy', cursive",
              letterSpacing: '0.04em',
            }}
          >
             Founder's Note
          </motion.h1>
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-6 font-serifSoft">
           Our
            <span className="ml-2 bg-gradient-to-r from-[#776833] to-[#798237] bg-clip-text text-transparent">
             Mission
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#664433] rounded-3xl p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden mb-16"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
            <div className="relative z-10 space-y-6 text-lg leading-relaxed text-emerald-50">
              <p>
                <strong className="text-white text-xl">AgMinds began with a simple observation:</strong> many children and adults are asked to care about nature without ever being given the space to truly understand it.
              </p>
              <p>
                Over time, learning has become increasingly structured, outcome-driven, and screen-based. In that process, we've lost something essential the opportunity to slow down, observe, and build a relationship with the natural world. AgMinds was created to restore that foundation.
              </p>
              <p>
                This initiative is not about teaching children what to do. It is about helping them understand how nature works soil, water, food, and natural cycles so that care, responsibility, and respect emerge naturally.
              </p>
              <p>
                AgMinds is being built slowly and thoughtfully, shaped by real experiences with children, educators, and communities. The goal is not scale for its own sake, but <strong className="text-emerald-300">depth, clarity, and long-term impact.</strong>
              </p>
              <p className="text-xl text-white font-semibold pt-4">
                I believe that understanding is the beginning of change and that when children are given the language to understand nature, they carry that awareness for life.
              </p>
              <div className="pt-8 border-t border-emerald-700/50">
                <p className="text-emerald-300 font-semibold">— Founder, AgMinds</p>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default FounderSection;
