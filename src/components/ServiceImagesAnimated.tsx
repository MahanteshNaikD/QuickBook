import { motion } from 'framer-motion';

// Enhanced Service Images with More Animations

export const WashingMachineImageAnimated = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto">
    <defs>
      <linearGradient id="wmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    
    {/* Machine Body */}
    <motion.rect 
      x="40" y="30" width="120" height="130" rx="8" 
      fill="url(#wmGrad)" 
      opacity="0.9"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    
    {/* Door - Spinning Animation */}
    <motion.g
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "100px 85px" }}
    >
      <circle cx="100" cy="85" r="45" fill="#1E293B" />
    </motion.g>
    
    {/* Door Ring */}
    <motion.circle 
      cx="100" cy="85" r="50" 
      fill="none" stroke="#FFFFFF" strokeWidth="2"
      animate={{ strokeDashoffset: [0, -314] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      strokeDasharray="314"
    />
    
    {/* Control Panel */}
    <rect x="45" y="115" width="110" height="35" fill="#1E293B" rx="4" />
    
    {/* Animated Buttons */}
    {[65, 80, 95, 110, 125].map((cx, i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy="125"
        r="4"
        fill="#22C55E"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
      />
    ))}
  </svg>
);

export const GeyserImageAnimated = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto">
    <defs>
      <linearGradient id="geyserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    
    {/* Tank Body */}
    <motion.rect 
      x="50" y="40" width="100" height="110" rx="8" 
      fill="url(#geyserGrad)" 
      opacity="0.9"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />
    
    {/* Water Level - Animated */}
    <motion.rect
      x="55" y="80" width="90" height="65"
      fill="#0EA5E9"
      opacity="0.4"
      rx="4"
      animate={{ y: [80, 78, 82, 78, 80] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    
    {/* Heating Element */}
    <motion.rect
      x="65" y="95" width="70" height="8"
      fill="#22C55E"
      rx="4"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    
    {/* Temperature Display */}
    <rect x="60" y="50" width="80" height="20" fill="#1E293B" rx="4" />
    <motion.text 
      x="100" y="64" textAnchor="middle" fill="#FFFFFF" 
      fontSize="12" fontWeight="bold"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      50°C
    </motion.text>
    
    {/* Pipe */}
    <rect x="95" y="20" width="10" height="25" fill="#64748B" />
    
    {/* Animated Steam */}
    {[90, 100, 105].map((cx, i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy={15}
        r="3"
        fill="#E0E7FF"
        animate={{ 
          y: [15, 5, 15],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
      />
    ))}
  </svg>
);

export const WaterPurifierImageAnimated = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto">
    <defs>
      <linearGradient id="wpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    
    {/* Main Body */}
    <motion.rect 
      x="55" y="35" width="90" height="120" rx="8" 
      fill="url(#wpGrad)" 
      opacity="0.9"
    />
    
    {/* Filter Sections - Animated */}
    {[45, 70, 95].map((y, i) => (
      <motion.g key={i}>
        <motion.rect
          x="65" y={y} width="70" height="15"
          fill="#1E293B"
          rx="3"
          animate={{ 
            boxShadow: ["0 0 0 rgba(34, 197, 94, 0)", "0 0 8 rgba(34, 197, 94, 0.5)", "0 0 0 rgba(34, 197, 94, 0)"]
          }}
          transition={{ delay: i * 0.3, duration: 2, repeat: Infinity }}
        />
        <text 
          x="100" y={y + 11} textAnchor="middle" 
          fill="#22C55E" fontSize="8" fontWeight="bold"
        >
          FILTER {i + 1}
        </text>
      </motion.g>
    ))}
    
    {/* Output Tap */}
    <rect x="90" y="125" width="20" height="8" fill="#64748B" />
    <polygon points="110,125 120,120 120,133" fill="#64748B" />
    
    {/* Animated Water Drop */}
    <motion.circle
      cx="125" cy="140" r="4"
      fill="#0EA5E9"
      animate={{
        y: [140, 155, 140],
        opacity: [0.7, 0.3, 0.7]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

export const RefrigeratorImageAnimated = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto">
    <defs>
      <linearGradient id="fridgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64748B" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
    </defs>
    
    {/* Fridge Body */}
    <motion.rect 
      x="35" y="25" width="130" height="150" rx="10" 
      fill="url(#fridgeGrad)" 
      opacity="0.9"
      animate={{ filter: ["drop-shadow(0 0 0px rgba(37, 99, 235, 0))", "drop-shadow(0 0 10px rgba(37, 99, 235, 0.4))", "drop-shadow(0 0 0px rgba(37, 99, 235, 0))"] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    
    {/* Top Door */}
    <rect x="40" y="30" width="120" height="65" fill="#1E293B" rx="6" stroke="#FFFFFF" strokeWidth="2" />
    
    {/* Freezer - Animated Ice */}
    <motion.rect
      x="50" y="40" width="100" height="45"
      fill="#0EA5E9"
      opacity="0.6"
      rx="4"
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />
    <text x="100" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
      FREEZER
    </text>
    
    {/* Bottom Door */}
    <rect x="40" y="100" width="120" height="70" fill="#1E293B" rx="6" stroke="#FFFFFF" strokeWidth="2" />
    
    {/* Fresh Section - Animated */}
    <motion.rect
      x="50" y="110" width="100" height="50"
      fill="#22C55E"
      opacity="0.4"
      rx="4"
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />
    <text x="100" y="140" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
      FRESH
    </text>
    
    {/* Animated Handle */}
    <motion.rect
      x="165" y="50" width="8" height="80"
      fill="#64748B"
      rx="4"
      animate={{ x: [165, 168, 165] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);
