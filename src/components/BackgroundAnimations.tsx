import { motion } from 'framer-motion';

// Animated home appliances floating in background
export const FloatingAppliances = () => {
  const appliances = [
    { icon: '🌊', delay: 0, x: 10, y: 10, color: 'text-blue-300' },
    { icon: '♨️', delay: 1, x: 80, y: 20, color: 'text-red-300' },
    { icon: '🌬️', delay: 0.5, x: 15, y: 75, color: 'text-green-300' },
    { icon: '⚡', delay: 1.5, x: 85, y: 65, color: 'text-yellow-300' },
    { icon: '💧', delay: 0.7, x: 50, y: 15, color: 'text-cyan-300' },
    { icon: '🔧', delay: 1.2, x: 45, y: 80, color: 'text-orange-300' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {appliances.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute text-6xl opacity-15 ${item.color}`}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.sin(i) * 30, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

// Animated service icons background
export const ServiceIconsBackground = () => {
  const services = [
    { icon: '🧺', color: 'from-blue-400 to-blue-600' },
    { icon: '🌡️', color: 'from-red-400 to-orange-600' },
    { icon: '❄️', color: 'from-cyan-400 to-blue-600' },
    { icon: '💧', color: 'from-green-400 to-emerald-600' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {services.map((service, i) =>
        [...Array(3)].map((_, j) => (
          <motion.div
            key={`${i}-${j}`}
            className="absolute text-8xl opacity-10"
            animate={{
              y: [0, -100, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10 + i * 2 + j,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5 + j * 2,
            }}
            style={{
              left: `${15 + i * 25 + j * 5}%`,
              top: `${20 + j * 30}%`,
            }}
          >
            {service.icon}
          </motion.div>
        ))
      )}
    </div>
  );
};

// Animated circuit pattern
export const CircuitPattern = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" width="200" height="200" patternUnits="userSpaceOnUse">
            <motion.line
              x1="0"
              y1="100"
              x2="200"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ strokeDasharray: [0, 200] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.line
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ strokeDasharray: [0, 200] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            <circle cx="100" cy="100" r="5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

// Animated particles
export const ParticleBackground = ({ count = 20 }: { count?: number }) => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          animate={{
            y: [Math.random() * 100, Math.random() * -100],
            x: [Math.random() * 100, Math.random() * 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
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

// Animated polygons
export const PolygonBackground = () => {
  const polygons = [
    { sides: 3, delay: 0, x: 10, y: 20 },
    { sides: 4, delay: 1, x: 80, y: 30 },
    { sides: 5, delay: 2, x: 20, y: 70 },
    { sides: 6, delay: 3, x: 75, y: 75 },
  ];

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {polygons.map((poly, i) => (
        <motion.svg
          key={i}
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="absolute"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: poly.delay,
          }}
          style={{
            left: `${poly.x}%`,
            top: `${poly.y}%`,
          }}
        >
          <polygon
            points={`${50 + 40 * Math.cos(0)},${50 + 40 * Math.sin(0)} ${50 + 40 * Math.cos(Math.PI * 2 / poly.sides)},${50 + 40 * Math.sin(Math.PI * 2 / poly.sides)} ${50 + 40 * Math.cos(Math.PI * 4 / poly.sides)},${50 + 40 * Math.sin(Math.PI * 4 / poly.sides)}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
        </motion.svg>
      ))}
    </div>
  );
};

// 3D-like animated cubes
export const AnimatedCubes = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 border-2 border-primary opacity-20"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
          style={{
            left: `${15 + i * 16}%`,
            top: `${30 + (i % 2) * 40}%`,
            perspective: '1000px',
          }}
        />
      ))}
    </div>
  );
};
