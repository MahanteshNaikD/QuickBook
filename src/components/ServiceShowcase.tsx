import { motion } from 'framer-motion';

interface ServiceShowcaseProps {
  theme: 'light' | 'dark';
  onCardClick?: (service: string) => void;
}

export const ServiceShowcase = ({ theme }: ServiceShowcaseProps) => {
  return (
    <section
      className={`py-16 overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-slate-950/90 to-slate-900/85'
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}
    >
      <div className="container-custom">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            We Fix All Your Home Appliances
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Professional repair services for all major home appliances with certified technicians
          </motion.p>
        </motion.div>

        {/* Services grid removed per user request */}

        {/* Animated Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg p-6 md:p-10 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Info Item 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-3"
              >
                <div className="text-4xl font-bold text-primary">24/7</div>
              </motion.div>
              <p className="text-gray-600">Available round the clock for emergencies</p>
            </motion.div>

            {/* Info Item 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
                className="inline-block mb-3"
              >
                <div className="text-4xl font-bold text-secondary">30 MIN</div>
              </motion.div>
              <p className="text-gray-600">Quick response time in most areas</p>
            </motion.div>

            {/* Info Item 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: 0.4, repeat: Infinity }}
                className="inline-block mb-3"
              >
                <div className="text-4xl font-bold text-accent">100%</div>
              </motion.div>
              <p className="text-gray-600">Satisfaction guaranteed on all services</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">Scroll to explore more</p>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6 text-primary mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
