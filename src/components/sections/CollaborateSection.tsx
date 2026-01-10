import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  School,
  Heart,
  Users,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const CollaborateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const partners = [
    {
      icon: School,
      title: 'Schools',
      description:
        'Integrate nature-based learning into your curriculum with our concept-driven approach',
      features: [
        'Curriculum integration support',
        'Teacher training programs',
        'Resource materials',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'NGOs',
      description:
        'Collaborate on environmental education initiatives and community programs',
      features: [
        'Joint program development',
        'Community outreach',
        'Impact measurement',
      ],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Users,
      title: 'Educators',
      description:
        'Join a community of facilitators bringing nature education to children',
      features: [
        'Professional development',
        'Resource sharing',
        'Mentorship programs',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      title: 'Pilot Programs',
      description:
        'Test new approaches and contribute to shaping the future of nature education',
      features: [
        'Early access to content',
        'Feedback opportunities',
        'Co-creation sessions',
      ],
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const process = [
    { step: '01', title: 'Connect', description: 'Reach out and share your vision' },
    { step: '02', title: 'Discuss', description: 'Explore collaboration possibilities' },
    { step: '03', title: 'Design', description: 'Co-create a tailored approach' },
    { step: '04', title: 'Implement', description: 'Launch and grow together' },
  ];

  return (
    <section
      id="collaborate"
      ref={ref}
      className="py-24 bg-[#fbebd5] relative overflow-hidden font-serifSoft"
    >
      {/* background texture */}
      <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNGI4YTYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />

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
    color: 'black',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600, // VERY IMPORTANT for Wix-like look
    letterSpacing: '0.02em', // subtle, not wide
    textTransform: 'none', // Wix text is NOT aggressive uppercase
  }}
          >
            Collaborate With Us
          </motion.h1>

          {/* SUB HEADING */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Let&apos;s Grow{' '}
            <span className="bg-gradient-to-r from-[#776833] to-[#798237] bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with AgMinds to bring meaningful nature education to your
            community.
          </p>
        </motion.div>

        {/* PARTNER CARDS */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${partner.color} mb-6 shadow-lg`}
                >
                  <partner.icon className="w-8 h-8 text-white" />
                </div>

                {/* CARD TITLE */}
                <h3
                  className="text-2xl mb-3"
                  style={{
                    fontFamily: "'Chewy', cursive",
                    letterSpacing: '0.06em',
                  }}
                >
                  {partner.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {partner.description}
                </p>

                <ul className="space-y-3">
                  {partner.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-teal-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h3
              className="text-3xl text-center mb-10"
            style={{
    color: 'black',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600, // VERY IMPORTANT for Wix-like look
    letterSpacing: '0.02em', // subtle, not wide
    textTransform: 'none', // Wix text is NOT aggressive uppercase
  }}
            >
              How Partnership Works
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C8A24A] text-white font-bold text-xl mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-[#664343] rounded-2xl p-12 text-white shadow-2xl">
            <h3
              className="text-3xl mb-4"
            style={{
    color: '#F4F1E8',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600, // VERY IMPORTANT for Wix-like look
    letterSpacing: '0.02em', // subtle, not wide
    textTransform: 'none', // Wix text is NOT aggressive uppercase
  }}
            >
              Ready to Collaborate?
            </h3>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl">
              Whether you're an educator, institution, or organization, we'd
              love to explore how we can work together.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborateSection;
