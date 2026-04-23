import { motion } from 'framer-motion';
import { CheckCircle, Clock, TrendingDown, Wrench } from 'lucide-react';
import { AnimatedBlobs } from './AnimatedBackground';

interface Feature {
  icon: React.ReactNode;
  label: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

export const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
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
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-3"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-center gap-3 group"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="text-accent flex-shrink-0"
          >
            {feature.icon}
          </motion.div>
          <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">
            {feature.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Service details with icons
interface ServiceDetailsSectionProps {
  theme: 'light' | 'dark';
}

export const ServiceDetailsSection = ({ theme }: ServiceDetailsSectionProps) => {
  const details = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Quick Service',
      description: 'Average response time within 24 hours',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Certified Experts',
      description: 'Highly trained, verified technicians',
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: 'Affordable Pricing',
      description: 'Transparent pricing, no hidden charges',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Quality Guarantee',
      description: '30-day service warranty on all repairs',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-16 relative overflow-hidden">
      <div
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-slate-950/92 to-slate-900/88'
            : 'bg-gradient-to-r from-slate-50/95 to-white/95'
        }`}
      />
      <AnimatedBlobs />
      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-text mb-12"
        >
          Why Choose QuickBook?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {details.map((detail, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-block p-4 bg-gradient-to-br from-primary to-secondary rounded-full text-white mb-4"
              >
                {detail.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-text mb-2">{detail.title}</h3>
              <p className="text-gray-600">{detail.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
