import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export const FloatingCallButton = () => {
  const phoneNumber = '+919876543210';

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <motion.a
          href={`tel:${phoneNumber}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            y: { duration: 3, repeat: Infinity },
            type: 'spring',
          }}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-2xl transition-all"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Phone size={24} />
          </motion.div>
        </motion.a>

        {/* Animated Pulse */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary opacity-20"
          animate={{ scale: [1, 1.5, 2], opacity: [0.6, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Desktop Hidden Notification */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="hidden md:block fixed bottom-6 right-6 z-40"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg shadow-lg p-4 max-w-xs"
        >
          <p className="text-sm text-gray-700 mb-3">
            Need immediate help? Call us now!
          </p>
          <motion.a
            href={`tel:${phoneNumber}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
          >
            <Phone size={18} />
            {phoneNumber}
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
};
