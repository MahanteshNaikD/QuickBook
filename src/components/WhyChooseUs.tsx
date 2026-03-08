import { motion } from 'framer-motion';
import { Zap, Users, DollarSign, Home, Star } from 'lucide-react';
import { PolygonBackground } from './BackgroundAnimations';

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Zap size={40} />,
      title: 'Fast Service',
      description: 'Quick response and same-day service available',
    },
    {
      icon: <Users size={40} />,
      title: 'Certified Technicians',
      description: 'Trained and certified professionals only',
    },
    {
      icon: <DollarSign size={40} />,
      title: 'Affordable Pricing',
      description: 'Transparent pricing with no hidden charges',
    },
    {
      icon: <Home size={40} />,
      title: 'Doorstep Repair',
      description: 'We come to you, no need to travel',
    },
    {
      icon: <Star size={40} />,
      title: 'Customer Satisfaction',
      description: '100% satisfaction guarantee on all services',
    },
  ];

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
    <section id="why-choose-us" className="py-20 bg-gray-50 relative overflow-hidden">
      <PolygonBackground />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the best appliance repair services
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="text-primary mb-4 flex justify-center"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-text mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
