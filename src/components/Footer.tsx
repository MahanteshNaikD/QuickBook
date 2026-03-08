import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-text text-white py-12">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-accent">QuickBook</h3>
            <p className="text-gray-300">
              Fast, reliable, and energetic service for all your home appliances.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={20} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Hours</p>
                <p className="text-gray-300 text-sm">Mon-Sat: 8 AM - 8 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Service Area</p>
                <p className="text-gray-300 text-sm">Available in major cities</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center text-gray-300"
        >
          <p>
            &copy; {new Date().getFullYear()} QuickBook. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
