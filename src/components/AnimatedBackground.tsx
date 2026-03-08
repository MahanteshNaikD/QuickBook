import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15"
      />

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <defs>
          <motion.pattern
            id="animated-lines"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            animate={{ y: [0, 100] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
          </motion.pattern>
        </defs>
      </svg>

      {/* Floating dots */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Section background with animated elements
export const SectionBgDecoration = ({
  gradient = 'from-primary/5 to-secondary/5',
  animated = true,
}: {
  gradient?: string;
  animated?: boolean;
}) => {
  if (!animated) {
    return (
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} -z-10 pointer-events-none`}
      />
    );
  }

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} -z-10 pointer-events-none`}>
      {/* Animated circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-32 h-32 border-2 border-primary rounded-full opacity-30"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-10 w-48 h-48 border-2 border-secondary rounded-full opacity-20"
      />

      {/* Animated squares */}
      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-accent opacity-20 -z-10"
      />
    </div>
  );
};

// Animated floating shapes
export const FloatingShapes = ({ count = 8 }: { count?: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg' : ''} ${
            i % 2 === 0 ? 'bg-primary' : 'bg-secondary'
          } opacity-10`}
          animate={{
            y: [0, -100 - i * 20, 0],
            x: [0, Math.sin(i) * 50, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: `${40 + i * 10}px`,
            height: `${40 + i * 10}px`,
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
        />
      ))}
    </div>
  );
};

// Animated grid background
export const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <svg
        className="w-full h-full opacity-5"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

// Blob animation component
export const AnimatedBlobs = () => {
  const blobs = [
    {
      delay: 0,
      duration: 8,
      colors: 'from-primary to-blue-400',
      position: 'top-10 left-10',
    },
    {
      delay: 2,
      duration: 10,
      colors: 'from-secondary to-cyan-400',
      position: 'top-1/2 right-10',
    },
    {
      delay: 4,
      duration: 12,
      colors: 'from-accent to-green-400',
      position: 'bottom-10 left-1/2',
    },
  ];

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.2, 1],
            borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute w-64 h-64 bg-gradient-to-r ${blob.colors} rounded-full mix-blend-multiply filter blur-3xl opacity-30 ${blob.position}`}
          style={{ animation: `blob ${blob.duration}s infinite` }}
        />
      ))}

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </div>
  );
};
