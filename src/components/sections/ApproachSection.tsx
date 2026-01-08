import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      title: 'Nature First',
      description:
        'Hands-on exploration, curiosity-led discovery, and meaningful moments in nature.',
      image:
        'https://img.freepik.com/premium-photo/students-exploring-local-ecosystems-environmental-education-nature-hike_38013-79689.jpg',
    },
    {
      title: 'Deep Understanding',
      description:
        'Resilience and confidence grow through rain, mud, sunshine, and play.',
      image:
        'https://worldofeducation.tts-group.co.uk/wp-content/uploads/2023/02/iStock-484592828-min.jpg',
    },
    {
      title: 'Inclusive',
      description:
        'Social, emotional, and cognitive growth nurtured together in nature.',
      image:
        'https://2716595.fs1.hubspotusercontent-na1.net/hubfs/2716595/whole-child-approach_11zon.jpg',
    },
    {
      title:  'Practical',
      description:
        'From collaboration to problem-solving, skills that stay for life.',
      image:
        'https://news.uga.edu/wp-content/uploads/2021/03/Kids_and_learning.jpg',
    },
  ];

  return (
    <section id="approach" ref={ref} className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="text-center mb-20"
>
  <span
    className="inline-block px-8 py-3 rounded-full mb-8"
    style={{
      background: 'linear-gradient(135deg, #c8d09b, #f4f1ec, #c5d664)',
      color: '#1F3D2B',
      border: '1.5px solid #C8A24A',
      fontFamily: "'Playfair Display', 'Canela', 'Libre Baskerville', serif",
      fontSize: '1.05rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
    }}
  >
    Our Approach
  </span>

  <h2
    className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-6"
    style={{
      fontFamily: "'Playfair Display', 'Canela', 'Libre Baskerville', serif",
    }}
  >
    Learning Before{' '}
    <span className="bg-gradient-to-r from-[#776833] to-[#798237] bg-clip-text text-transparent">
      Labels
    </span>
  </h2>

  <p
    className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
    style={{
      fontFamily: "'Inter', 'Source Sans 3', 'IBM Plex Sans', sans-serif",
    }}
  >
    AgMinds creates learning experiences where children explore ideas first,
    build understanding through nature, and develop skills that grow naturally
    with curiosity.
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

              <h3 className="mt-8 text-xl font-bold text-[#3b2f1e]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-[#5c4b32] px-4 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
