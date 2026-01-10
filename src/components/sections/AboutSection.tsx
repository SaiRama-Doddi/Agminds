import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Target, Heart, Eye } from 'lucide-react';

const AboutSection = () => {


   const cards = [
    {
      title: 'Nature The Teacher',
      description:
        'Hands-on exploration, curiosity-led discovery, and meaningful moments in nature.',
      image:
        'https://img.freepik.com/premium-photo/students-exploring-local-ecosystems-environmental-education-nature-hike_38013-79689.jpg',
    },
    {
      title: 'Outdoor Learning',
      description:
        'Resilience and confidence grow through rain, mud, sunshine, and play.',
      image:
        'https://worldofeducation.tts-group.co.uk/wp-content/uploads/2023/02/iStock-484592828-min.jpg',
    },
    {
      title: 'Holistic Development',
      description:
        'Social, emotional, and cognitive growth nurtured together in nature.',
      image:
        'https://2716595.fs1.hubspotusercontent-na1.net/hubfs/2716595/whole-child-approach_11zon.jpg',
    },
    {
      title:  'Real World Skills',
      description:
        'From collaboration to problem-solving, skills that stay for life.',
      image:
        'https://news.uga.edu/wp-content/uploads/2021/03/Kids_and_learning.jpg',
    },
  ];
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



  return (
    <section id="about" ref={ref} className="py-24 bg-[#fbebd5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full  to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
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
            What Makes us Different
          </motion.h1>


            <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-6 font-serifSoft"   >
              Understanding Before{' '}
              <span className="bg-gradient-to-r from-[#776833] to-[#798237] bg-clip-text text-transparent">
                Protection
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-serifSoft " >
              AgMinds is an independent education initiative that supports children in reconnecting with nature through concept-based learning.
            </p>
          </motion.div>

          {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                className="mx-auto w-56 h-56 rounded-full overflow-hidden shadow-xl"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <h3 className="mt-8 text-xl font-medium text-[#3b2f1e]  leading-tight
              uppercase
              tracking-wide"
            
            style={{
              color: 'black', // soft off-white
              fontFamily: "'Chewy', cursive",
              letterSpacing: '0.04em',
            }}>
                {card.title}
              </h3>
             <p className="
  mt-3
  px-4
  text-sm
  leading-relaxed
  text-black
  font-serifSoft
">
  {card.description}
</p>

            </motion.div>
          ))}
        </div>


  {/* Content */}


  {/* WAVE CUT */}
{/*   <div className="absolute bottom-0 left-0 w-full leading-none">
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
        fill="#ffff"
      />
    </svg>
  </div> */}


        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
