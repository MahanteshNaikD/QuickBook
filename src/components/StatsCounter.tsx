import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  number: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ number, label, suffix = '' }: StatItemProps) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2; // 2 seconds
    const steps = 60; // 60 frames
    const stepDuration = (duration * 1000) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setDisplayNumber(Math.floor(progress * number));

      if (currentStep >= steps) {
        setDisplayNumber(number);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2"
      >
        {displayNumber}
        {suffix}
      </motion.div>
      <p className="text-gray-600 text-sm md:text-base font-medium">{label}</p>
    </motion.div>
  );
};

export const StatsCounter = () => {
  const stats = [
    { number: 5000, label: 'Happy Customers', suffix: '+' },
    { number: 25, label: 'Years of Experience', suffix: '+' },
    { number: 100, label: 'Expert Technicians', suffix: '+' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and customer satisfaction has made us the leading service provider
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <StatItem {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
