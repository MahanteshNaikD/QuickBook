import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FloatingAppliances, HeroSectionIllustration } from './HeroBackground';
import { ServicePreview } from './ServicePreview';
import showcaseBackground from '../assets/1745371656.png';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero = ({ onBookClick }: HeroProps) => {
  const phoneNumber = '+919876543210';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <img
        src={showcaseBackground}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="hidden"
      />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${showcaseBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/82 via-blue-600/62 to-secondary/52" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-slate-900/15" />
        <div className="absolute inset-0 bg-white/6" />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-60">
        <FloatingAppliances />
        <HeroSectionIllustration />
      </div>

      {/* Content */}
      <div className="container-custom w-full py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white max-w-3xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            QuickBook – Fast Appliance Repair at Your Doorstep
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed"
          >
            Professional technicians for washing machines, geysers, refrigerators, and water purifiers.
            Quick service, certified experts, and affordable pricing.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookClick}
              className="btn-primary bg-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Book a Service
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${phoneNumber}`}
              className="btn-secondary bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </motion.a>
          </motion.div>

          {/* Service Preview */}
          <ServicePreview />
        </motion.div>
      </div>
    </motion.section>
  );
};
