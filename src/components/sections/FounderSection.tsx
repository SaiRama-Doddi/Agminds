import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Heart, Target, Compass } from 'lucide-react';

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
    <section id="founder" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-emerald-50/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/30 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-[#c8d09b] text-[#798237] rounded-full text-sm font-semibold mb-6">
            Founder's Note
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why{' '}
            <span className="bg-gradient-to-r from-[#776833] to-[#798237] bg-clip-text text-transparent">
              AgMinds
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-[#776833] to-[#798237] rounded-3xl p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden mb-16"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <Quote className="w-16 h-16 text-emerald-400/30 mb-8" />
            <div className="relative z-10 space-y-6 text-lg leading-relaxed text-emerald-50">
              <p>
                <strong className="text-white text-xl">AgMinds began with a simple observation:</strong> many children and adults are asked to care about nature without ever being given the space to truly understand it.
              </p>
              <p>
                Over time, learning has become increasingly structured, outcome-driven, and screen-based. In that process, we've lost something essential — the opportunity to slow down, observe, and build a relationship with the natural world. AgMinds was created to restore that foundation.
              </p>
              <p>
                This initiative is not about teaching children what to do. It is about helping them understand how nature works — soil, water, food, and natural cycles — so that care, responsibility, and respect emerge naturally.
              </p>
              <p>
                AgMinds is being built slowly and thoughtfully, shaped by real experiences with children, educators, and communities. The goal is not scale for its own sake, but <strong className="text-emerald-300">depth, clarity, and long-term impact.</strong>
              </p>
              <p className="text-xl text-white font-semibold pt-4">
                I believe that understanding is the beginning of change — and that when children are given the language to understand nature, they carry that awareness for life.
              </p>
              <div className="pt-8 border-t border-emerald-700/50">
                <p className="text-emerald-300 font-semibold">— Founder, AgMinds</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Guiding Principles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group relative bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[#776833] to-[#798237] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <principle.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                "Understanding is the beginning of change."
              </p>
              <p className="text-lg text-gray-600">
                When children understand nature, they carry that awareness for life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
