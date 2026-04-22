import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { ServiceShowcase } from '../components/ServiceShowcase';
import { ServicesSection } from '../components/ServicesSection';
import { HowItWorks } from '../components/HowItWorks';
import { ServiceDetailsSection } from '../components/ServiceFeatures';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Contact } from '../components/Contact';
import { FinalCTASection } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { BookingForm } from '../components/BookingForm';
import { FloatingCallButton } from '../components/FloatingCallButton';
import { StatsCounter } from '../components/StatsCounter';
import websiteBackground from '../assets/1745371656.png';

type HomeProps = {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
};

export const Home = ({ theme, onThemeChange }: HomeProps) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBookClick = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden theme-page">
      <div className="fixed inset-0 -z-20">
        <img
          src={websiteBackground}
          alt="Home appliance service background"
          className="h-full w-full object-cover object-center"
        />
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-slate-900/75' : 'bg-slate-900/55'
          }`}
        />
      </div>

      <div className="relative z-10">
        <AnimatedBackground />
        <Navbar theme={theme} onThemeChange={onThemeChange} />
        <Hero onBookClick={() => handleBookClick()} />
        <HowItWorks onBookClick={() => handleBookClick()} />
        <ServiceShowcase />
        <StatsCounter />
        <ServicesSection onBookClick={handleBookClick} />
        <ServiceDetailsSection />
        <WhyChooseUs />
        <Contact />
        <FinalCTASection onBookClick={() => handleBookClick()} />
        <Footer />
        <BookingForm
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          selectedService={selectedService}
        />
        <FloatingCallButton />
      </div>
    </div>
  );
};
