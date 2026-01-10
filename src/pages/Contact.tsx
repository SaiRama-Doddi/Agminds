import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '1234567890';
    const whatsappMessage = `Hi, I'm ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@agminds.org',
      link: 'mailto:hello@agminds.org',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (234) 567-890',
      link: 'tel:+1234567890',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Connecting communities worldwide',
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us directly',
      link: `https://wa.me/1234567890`,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 font-serifSoft"
    >
      <SEO
        title="Contact Us - AgMinds"
        description="Get in touch with AgMinds to learn more about our nature education programs, collaborate with us, or ask any questions."
      />

      <section className="py-24 bg-[#fbebd5] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 uppercase tracking-wide"
              style={{
                fontFamily: "'Chewy', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Get in Touch
            </motion.h1>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-[#776833] to-[#798237] bg-clip-text text-transparent">
                Connect
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a question or want to collaborate? We&apos;d love to hear from
              you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                <h2
                  className="text-3xl mb-8"
                  style={{ fontFamily: "'Chewy', cursive" }}
                >
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Collaboration">
                        Collaboration Opportunity
                      </option>
                      <option value="School Partnership">
                        School Partnership
                      </option>
                      <option value="Educator Program">
                        Educator Program
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#664343] text-white rounded-lg font-semibold text-lg hover:scale-105 transition"
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    This will open WhatsApp with your message pre-filled
                  </p>
                </form>
              </div>
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div className="space-y-6">
              <div className="bg-[#664343] rounded-3xl p-8 lg:p-10 text-white shadow-2xl">
                <h3
                  className="text-2xl mb-6"
                  style={{ fontFamily: "'Chewy', cursive" }}
                >
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/10"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <p className="text-emerald-200 text-sm">
                          {info.content}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
