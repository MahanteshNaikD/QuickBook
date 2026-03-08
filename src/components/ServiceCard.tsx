import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onBookClick: () => void;
  index: number;
  image?: React.ReactNode;
  bgColor?: string;
  accentColor?: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  onBookClick,
  index,
  image,
  bgColor = 'from-blue-50 to-blue-100',
  accentColor: _accentColor = 'text-blue-600',
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      {image ? (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`bg-gradient-to-br ${bgColor} p-8 h-48 flex items-center justify-center overflow-hidden relative`}
        >
          {/* Animated background elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 opacity-30 rounded-full"
            style={{
              background: 'radial-gradient(circle, currentColor 0%, transparent 70%)',
            }}
          />
          {/* Image container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 w-32 h-32"
          >
            {image}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`bg-gradient-to-br ${bgColor} p-8 h-48 flex items-center justify-center overflow-hidden relative`}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 opacity-30 rounded-full"
            style={{
              background: 'radial-gradient(circle, currentColor 0%, transparent 70%)',
            }}
          />
          {/* SVG/Icon container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="relative z-10 text-6xl"
          >
            {icon}
          </motion.div>
        </motion.div>
      )}

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text mb-3">{title}</h3>

        <p className="text-gray-600 mb-6 flex-grow">{description}</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBookClick}
          className={`btn-primary w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200`}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};
