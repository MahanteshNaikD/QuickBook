import { motion } from 'framer-motion';
import { Wrench, Droplets, Wind, Zap } from 'lucide-react';
import { EnhancedServiceCard } from './EnhancedServiceCard';
import { ServiceIconsBackground } from './BackgroundAnimations';
import {
  WashingMachineImage,
  GeyserImage,
  WaterPurifierImage,
  RefrigeratorImage,
} from './ServiceImages';
import type { Service } from '../types/booking';

interface ServicesSectionProps {
  onBookClick: (service: string) => void;
}

interface ServiceDetail extends Service {
  features: string[];
  pricing: string;
  timeEstimate: string;
}

export const ServicesSection = ({ onBookClick }: ServicesSectionProps) => {
  const services: ServiceDetail[] = [
    {
      id: 'washing-machine',
      name: 'Washing Machine Repair',
      description: 'Professional repair service for all washing machine brands and models',
      icon: <Wrench />,
      image: <WashingMachineImage />,
      bgColor: 'from-blue-50 to-blue-100',
      accentColor: 'text-blue-500',
      features: [
        'Door lock repair & replacement',
        'Drum bearing &amp; seal restoration',
        'Motor &amp; pump servicing',
        'Inlet valve replacement',
        'Drainage problems fixed',
        'Electronic control board repair',
      ],
      pricing: 'From ₹500',
      timeEstimate: '1-2 days',
    },
    {
      id: 'geyser',
      name: 'Geyser Installation & Repair',
      description: 'Expert installation and maintenance for safe, continuous hot water supply',
      icon: <Droplets />,
      image: <GeyserImage />,
      bgColor: 'from-red-50 to-orange-100',
      accentColor: 'text-red-500',
      features: [
        'Installation of new geysers',
        'Temperature control repair',
        'Heating element replacement',
        'Thermostat replacement',
        'Rust &amp; scale removal',
        'Pressure relief valve service',
      ],
      pricing: 'From ₹300',
      timeEstimate: '2-4 hours',
    },
    {
      id: 'water-purifier',
      name: 'Water Purifier Service',
      description: 'Complete maintenance and repair for safe drinking water at home',
      icon: <Wind />,
      image: <WaterPurifierImage />,
      bgColor: 'from-green-50 to-emerald-100',
      accentColor: 'text-green-500',
      features: [
        'Filter cartridge replacement',
        'RO membrane servicing',
        'Annual maintenance package',
        'Water quality testing',
        'Leak &amp; damage repair',
        'Performance optimization',
      ],
      pricing: 'From ₹800',
      timeEstimate: '1 hour',
    },
    {
      id: 'refrigerator',
      name: 'Refrigerator Repair',
      description: 'Quick and reliable repair service to keep your food fresh and safe',
      icon: <Zap />,
      image: <RefrigeratorImage />,
      bgColor: 'from-cyan-50 to-sky-100',
      accentColor: 'text-cyan-500',
      features: [
        'Refrigeration system repair',
        'Thermostat replacement',
        'Compressor servicing',
        'Door seal replacement',
        'Frost buildup cleaning',
        'Gas refill &amp; leak repair',
      ],
      pricing: 'From ₹400',
      timeEstimate: '3-4 hours',
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

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      <ServiceIconsBackground />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick, reliable, and professional solutions for all your home appliances. Expert technicians with 30-day warranty.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <EnhancedServiceCard
              key={service.id}
              icon={service.icon}
              title={service.name}
              description={service.description}
              features={service.features}
              pricing={service.pricing}
              timeEstimate={service.timeEstimate}
              onBookClick={() => onBookClick(service.name)}
              index={index}
              image={service.image}
              bgColor={service.bgColor}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
