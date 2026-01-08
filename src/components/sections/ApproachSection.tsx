import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      title: 'Nature Is a Teacher',
      description:
        'Hands-on exploration, curiosity-led discovery, and meaningful moments in nature.',
      image:
        'https://img.freepik.com/premium-photo/students-exploring-local-ecosystems-environmental-education-nature-hike_38013-79689.jpg',
    },
    {
      title: 'Fully Outdoor, All-Weather Learning',
      description:
        'Resilience and confidence grow through rain, mud, sunshine, and play.',
      image:
        'https://worldofeducation.tts-group.co.uk/wp-content/uploads/2023/02/iStock-484592828-min.jpg',
    },
    {
      title: 'Whole-Child Development',
      description:
        'Social, emotional, and cognitive growth nurtured together in nature.',
      image:
        'https://2716595.fs1.hubspotusercontent-na1.net/hubfs/2716595/whole-child-approach_11zon.jpg',
    },
    {
      title: 'Real-World Skills That Last',
      description:
        'From collaboration to problem-solving, skills that stay for life.',
      image:
        'https://news.uga.edu/wp-content/uploads/2021/03/Kids_and_learning.jpg',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24  relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#3b2f1e] mb-6">
            What Makes the Wild School Different?
          </h2>
          <p className="text-lg text-[#5c4b32] max-w-3xl mx-auto">
            A fully outdoor, child-led learning experience rooted in nature.
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
