import { motion } from 'framer-motion';
import { Phone, Clock, MapPin } from 'lucide-react';
import { ParticleBackground } from './BackgroundAnimations';

export const Contact = () => {
  const phoneNumber = '+919876543210';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <ParticleBackground count={15} />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach out to us for any queries or to book a service
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex justify-center mb-4"
            >
              <Phone size={40} />
            </motion.div>
            <h3 className="text-xl font-bold mb-3">Phone</h3>
            <a
              href={`tel:${phoneNumber}`}
              className="hover:opacity-80 transition-opacity font-semibold text-lg"
            >
              {phoneNumber}
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-accent to-green-500 rounded-lg p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex justify-center mb-4"
            >
              <Clock size={40} />
            </motion.div>
            <h3 className="text-xl font-bold mb-3">Service Hours</h3>
            <div className="space-y-1">
              <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-blue-500 to-primary rounded-lg p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex justify-center mb-4"
            >
              <MapPin size={40} />
            </motion.div>
            <h3 className="text-xl font-bold mb-3">Service Area</h3>
            <p>Available across major cities and surrounding areas</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
