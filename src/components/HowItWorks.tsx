import { motion } from 'framer-motion';
import { Phone, MapPin, Wrench, CheckCircle } from 'lucide-react';
import { FloatingShapes } from './AnimatedBackground';

interface HowItWorksProps {
  onBookClick: () => void;
}

export const HowItWorks = ({ onBookClick }: HowItWorksProps) => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Call or Book Online',
      description: 'Ring us or book your service through our website',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Choose Your Location',
      description: 'Select your preferred service address and time slot',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Expert Service',
      description: 'Our skilled technician arrives and fixes your appliance',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Enjoy Warranty',
      description: 'Get 30-day warranty on repairs and professional service',
      color: 'from-green-500 to-green-600',
    },
  ];

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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <FloatingShapes count={6} />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple 4-step process to get your appliance fixed quickly
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}

              {/* Step card */}
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-lg p-8 text-center h-full shadow-lg"
              >
                {/* Step number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} text-white font-bold flex items-center justify-center text-lg`}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className={`inline-block p-4 bg-gradient-to-br ${step.color} rounded-full text-white mb-4 mt-4`}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookClick}
            className="btn-primary bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300"
          >
            Book Your Service Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
