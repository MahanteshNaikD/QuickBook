import { motion } from 'framer-motion';
import { useState } from 'react';
import { Clock, Zap, Shield } from 'lucide-react';

interface EnhancedServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  timeEstimate: string;
  onBookClick: () => void;
  index: number;
  image?: React.ReactNode;
  bgColor?: string;
}

export const EnhancedServiceCard = ({
  icon,
  title,
  description,
  features,
  pricing,
  timeEstimate,
  onBookClick,
  index,
  image,
  bgColor = 'from-blue-50 to-blue-100',
}: EnhancedServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      {image ? (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`bg-gradient-to-br ${bgColor} p-2 h-48 flex items-center justify-center overflow-hidden relative`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 w-full h-full rounded-lg overflow-hidden"
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
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 opacity-30 rounded-full"
            style={{
              background: 'radial-gradient(circle, currentColor 0%, transparent 70%)',
            }}
          />
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
        <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm flex-grow">{description}</p>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-200"
        >
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-secondary" />
            <span className="font-medium text-gray-700">{timeEstimate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-accent" />
            <span className="font-medium text-gray-700">{pricing}</span>
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.4 }}
          className="mb-4"
        >
          <h4 className="text-sm font-semibold text-text mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent" />
            Key Features
          </h4>
          <ul className="space-y-1">
            {features.slice(0, isExpanded ? features.length : 2).map(
              (feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-sm text-gray-600 flex items-start gap-2"
                >
                  <span className="text-accent font-bold mt-0.5">•</span>
                  {feature}
                </motion.li>
              )
            )}
          </ul>
          {features.length > 2 && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-primary font-semibold mt-2 hover:underline"
            >
              {isExpanded ? 'Show less' : '+ Show more'}
            </motion.button>
          )}
        </motion.div>

        {/* Book Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBookClick}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-white font-semibold py-3 rounded-lg transition-all duration-200 mt-auto"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};
