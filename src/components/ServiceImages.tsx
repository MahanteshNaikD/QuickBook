import washingMachineScreenshot from '../assets/Screenshot-2026-01-31-141632.png';
import geyserScreenshot from '../assets/Screenshot-2026-01-31-141644.png';
import waterPurifierScreenshot from '../assets/Screenshot-2026-01-31-141651.png';
import refrigeratorScreenshot from '../assets/Screenshot-2026-01-31-141657.png';

const imageClassName = 'w-full h-full object-cover object-center';

export const WashingMachineImage = () => (
  <img
    src={washingMachineScreenshot}
    alt="Technician repairing washing machine"
    loading="lazy"
    className={imageClassName}
  />
);

export const GeyserImage = () => (
  <img
    src={geyserScreenshot}
    alt="Technician servicing geyser"
    loading="lazy"
    className={imageClassName}
  />
);

export const WaterPurifierImage = () => (
  <img
    src={waterPurifierScreenshot}
    alt="Technician repairing water purifier"
    loading="lazy"
    className={imageClassName}
  />
);

export const RefrigeratorImage = () => (
  <img
    src={refrigeratorScreenshot}
    alt="Technician checking refrigerator"
    loading="lazy"
    className={imageClassName}
  />
);
