import { motion } from 'framer-motion';
import { Wrench, Droplets, Wind, Zap } from 'lucide-react';

export const FloatingAppliances = () => {
  const appliances = [
    { Icon: Wrench, delay: 0, duration: 4, x: '10%', y: '20%' },
    { Icon: Droplets, delay: 1, duration: 5, x: '80%', y: '30%' },
    { Icon: Wind, delay: 0.5, duration: 4.5, x: '15%', y: '70%' },
    { Icon: Zap, delay: 1.5, duration: 5.5, x: '85%', y: '60%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      
      {/* Floating Icons */}
      {appliances.map(({ Icon, delay, duration, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            delay,
            duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon size={100} className="text-white" strokeWidth={0.5} />
        </motion.div>
      ))}

      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Lines/Dots Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="dots"
            x="10"
            y="10"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill="white" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#dots)" />
      </svg>
    </div>
  );
};

export const HeroSectionIllustration = () => {
  return (
    <motion.svg
      viewBox="0 0 800 400"
      className="absolute right-0 bottom-0 w-1/2 h-full opacity-20"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 0.15, x: 0 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
      </defs>

      {/* Washing Machine */}
      <motion.g
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <rect x="600" y="200" width="120" height="130" rx="8" fill="url(#heroGrad)" />
        <circle cx="660" cy="255" r="45" fill="#1E293B" />
        <circle cx="660" cy="255" r="50" fill="none" stroke="#FFFFFF" strokeWidth="2" />
      </motion.g>

      {/* Geyser */}
      <motion.g
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        <rect x="400" y="150" width="100" height="110" rx="8" fill="url(#heroGrad)" />
        <rect x="410" y="180" width="80" height="50" fill="#0EA5E9" opacity="0.6" />
        <rect x="420" y="200" width="60" height="8" fill="#22C55E" rx="4" />
      </motion.g>

      {/* Refrigerator */}
      <motion.g
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      >
        <rect x="200" y="100" width="130" height="150" rx="10" fill="url(#heroGrad)" />
        <rect x="220" y="120" width="90" height="60" fill="#0EA5E9" opacity="0.6" />
        <rect x="220" y="190" width="90" height="50" fill="#22C55E" opacity="0.4" />
      </motion.g>

      {/* Water Purifier */}
      <motion.g
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
        style={{ transformOrigin: '50px 200px' }}
      >
        <rect x="50" y="80" width="90" height="120" rx="8" fill="url(#heroGrad)" />
        <rect x="65" y="100" width="60" height="15" fill="#1E293B" rx="3" />
        <rect x="65" y="125" width="60" height="15" fill="#1E293B" rx="3" />
        <rect x="65" y="150" width="60" height="15" fill="#1E293B" rx="3" />
      </motion.g>

      {/* Decorative Elements */}
      <motion.circle
        cx="700"
        cy="80"
        r="30"
        fill="none"
        stroke="#0EA5E9"
        strokeWidth="2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.circle
        cx="100"
        cy="350"
        r="40"
        fill="none"
        stroke="#22C55E"
        strokeWidth="2"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />
    </motion.svg>
  );
};
