// SVG Service Images with animations

export const WashingMachineImage = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto">
    <defs>
      <linearGradient id="wmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    {/* Machine Body */}
    <rect x="40" y="30" width="120" height="130" rx="8" fill="url(#wmGrad)" opacity="0.9" />
    {/* Door - Spinning */}
    <circle cx="100" cy="85" r="45" fill="#1E293B" />
    {/* Door Ring */}
    <circle cx="100" cy="85" r="50" fill="none" stroke="#FFFFFF" strokeWidth="2" />
    {/* Control Panel */}
    <rect x="45" y="115" width="110" height="35" fill="#1E293B" rx="4" />
    {/* Buttons */}
    <circle cx="65" cy="125" r="4" fill="#22C55E" />
    <circle cx="80" cy="125" r="4" fill="#22C55E" />
    <circle cx="95" cy="125" r="4" fill="#22C55E" />
    <circle cx="110" cy="125" r="4" fill="#22C55E" />
    <circle cx="125" cy="125" r="4" fill="#22C55E" />
    <circle cx="135" cy="125" r="4" fill="#0EA5E9" />
  </svg>
);

export const GeyserImage = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto">
    <defs>
      <linearGradient id="geyserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    {/* Tank Body */}
    <rect x="50" y="40" width="100" height="110" rx="8" fill="url(#geyserGrad)" opacity="0.9" />
    {/* Water inside */}
    <rect x="55" y="80" width="90" height="65" fill="#0EA5E9" opacity="0.4" rx="4" />
    {/* Heating Element */}
    <rect x="65" y="95" width="70" height="8" fill="#22C55E" rx="4" />
    {/* Temperature Display */}
    <rect x="60" y="50" width="80" height="20" fill="#1E293B" rx="4" />
    <text x="100" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
      50°C
    </text>
    {/* Pipe */}
    <rect x="95" y="20" width="10" height="25" fill="#64748B" />
    {/* Steam */}
    <circle cx="90" cy="15" r="3" fill="#E0E7FF" opacity="0.6" />
    <circle cx="105" cy="12" r="3" fill="#E0E7FF" opacity="0.4" />
    <circle cx="100" cy="10" r="3" fill="#E0E7FF" opacity="0.5" />
  </svg>
);

export const WaterPurifierImage = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto">
    <defs>
      <linearGradient id="wpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    {/* Main Body */}
    <rect x="55" y="35" width="90" height="120" rx="8" fill="url(#wpGrad)" opacity="0.9" />
    {/* Filter Section 1 */}
    <rect x="65" y="45" width="70" height="15" fill="#1E293B" rx="3" />
    <text x="100" y="56" textAnchor="middle" fill="#22C55E" fontSize="8" fontWeight="bold">
      FILTER 1
    </text>
    {/* Filter Section 2 */}
    <rect x="65" y="70" width="70" height="15" fill="#1E293B" rx="3" />
    <text x="100" y="81" textAnchor="middle" fill="#22C55E" fontSize="8" fontWeight="bold">
      FILTER 2
    </text>
    {/* Filter Section 3 */}
    <rect x="65" y="95" width="70" height="15" fill="#1E293B" rx="3" />
    <text x="100" y="106" textAnchor="middle" fill="#22C55E" fontSize="8" fontWeight="bold">
      FILTER 3
    </text>
    {/* Output Tap */}
    <rect x="90" y="125" width="20" height="8" fill="#64748B" />
    <polygon points="110,125 120,120 120,133" fill="#64748B" />
    {/* Water Drop */}
    <circle cx="125" cy="140" r="4" fill="#0EA5E9" opacity="0.7" />
  </svg>
);

export const RefrigeratorImage = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto">
    <defs>
      <linearGradient id="fridgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64748B" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
    </defs>
    {/* Fridge Body */}
    <rect x="35" y="25" width="130" height="150" rx="10" fill="url(#fridgeGrad)" opacity="0.9" />
    {/* Top Door */}
    <rect x="40" y="30" width="120" height="65" fill="#1E293B" rx="6" stroke="#FFFFFF" strokeWidth="2" />
    {/* Freezer */}
    <rect x="50" y="40" width="100" height="45" fill="#0EA5E9" opacity="0.6" rx="4" />
    <text x="100" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
      FREEZER
    </text>
    {/* Bottom Door */}
    <rect x="40" y="100" width="120" height="70" fill="#1E293B" rx="6" stroke="#FFFFFF" strokeWidth="2" />
    {/* Fridge Section */}
    <rect x="50" y="110" width="100" height="50" fill="#22C55E" opacity="0.4" rx="4" />
    <text x="100" y="140" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
      FRESH
    </text>
    {/* Handle */}
    <rect x="165" y="50" width="8" height="80" fill="#64748B" rx="4" />
  </svg>
);
