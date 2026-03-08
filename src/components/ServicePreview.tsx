import { motion } from 'framer-motion';
import { Clock, Zap, Badge } from 'lucide-react';

export const ServicePreview = () => {
  const services = [
    {
      icon: <Badge className="w-6 h-6" />,
      name: 'Washing Machine',
      time: 'Same Day',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: 'Geyser',
      time: '2-4 Hours',
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      name: 'Refrigerator',
      time: '3-4 Hours',
      color: 'from-cyan-500 to-sky-600',
    },
    {
      icon: <Badge className="w-6 h-6" />,
      name: 'Water Purifier',
      time: '1 Hour',
      color: 'from-green-500 to-emerald-600',
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`bg-gradient-to-br ${service.color} rounded-lg p-4 text-white text-center shadow-lg backdrop-blur-sm bg-opacity-90`}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="mb-2"
          >
            {service.icon}
          </motion.div>
          <h4 className="font-bold text-sm mb-1">{service.name}</h4>
          <p className="text-xs opacity-90">{service.time}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Service Stats Section
export const ServiceStats = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Expert Technicians' },
    { number: '4.8★', label: 'Customer Rating' },
    { number: '24/7', label: 'Support Available' },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="text-center"
        >
          <motion.div
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {stat.number}
          </motion.div>
          <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
