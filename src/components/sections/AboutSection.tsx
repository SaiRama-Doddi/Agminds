import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Target, Heart, Eye } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const features = [
    {
      icon: BookOpen,
      title: 'What is AgMinds?',
      description: 'An independent education initiative that supports children in reconnecting with nature through concept-based learning.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Target,
      title: 'Our Focus',
      description: 'Rather than teaching techniques or skills, AgMinds helps children make sense of what they experience in the natural world.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Why It Matters',
      description: "Today's conversations around sustainability often begin without foundational understanding. AgMinds builds that foundation early.",
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Eye,
      title: 'The Outcome',
      description: 'Care for nature grows naturally, not as an obligation — calmly, clearly, and without pressure.',
      color: 'from-blue-500 to-emerald-500',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-teal-50/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
  <span
  className="inline-block px-8 py-3 rounded-full mb-8"
  style={{
    background: 'linear-gradient(135deg, #c8d09b, #f4f1ec, #c5d664)',
    color: '#1F3D2B', // Deep Forest Green
    border: '1.5px solid #C8A24A', // Soft Sun Ochre
    fontFamily: "'Playfair Display', 'Canela', 'Libre Baskerville', serif",
    fontSize: '1.1rem',
    fontWeight: 600,
    letterSpacing: '0.08em'
  }}
>
  About AgMinds
</span>


            <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-6"   style={{
   
    fontFamily: "'Playfair Display', 'Canela', 'Libre Baskerville', serif"
  }}>
              Understanding Before{' '}
              <span className="bg-gradient-to-r from-[#776833] to-[#798237] bg-clip-text text-transparent">
                Protection
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{
 
    fontFamily: "'Inter', 'Source Sans 3', 'IBM Plex Sans', sans-serif"
  }}>
              AgMinds is an independent education initiative that supports children in reconnecting with nature through concept-based learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100/50 hover:border-emerald-200 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

         <motion.div
  variants={itemVariants}
  className="relative bg-gradient-to-r from-[#776833] to-[#798237]
             rounded-3xl pt-12 pb-24 px-12 text-white shadow-2xl overflow-hidden"
>
  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-3xl sm:text-4xl font-bold mb-6">
      Our Belief
    </h3>

    <p className="text-xl text-emerald-100 leading-relaxed mb-6">
      “When children understand nature, care follows naturally.”
    </p>

    <p className="text-emerald-200 leading-relaxed max-w-3xl">
      We believe that understanding is the beginning of change — and that when
      children are given the language to understand nature, they carry that
      awareness for life.
    </p>
  </div>

  {/* WAVE CUT */}
  <div className="absolute bottom-0 left-0 w-full leading-none">
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className="w-full h-24"
    >
      <path
        d="M0,40 
           C120,70 240,70 360,50 
           C480,30 600,30 720,45 
           C840,60 960,80 1080,70 
           C1200,60 1320,40 1440,50 
           L1440,100 L0,100 Z"
        fill="#c8d09b"
      />
    </svg>
  </div>
</motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
