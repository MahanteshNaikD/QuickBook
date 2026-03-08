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

export const Home = () => {
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
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <Navbar />
      <Hero onBookClick={() => handleBookClick()} />
      <HowItWorks />
      <ServiceShowcase />
      <StatsCounter />
      <ServicesSection onBookClick={handleBookClick} />
      <ServiceDetailsSection />
      <WhyChooseUs />
      <Contact />
      <FinalCTASection />
      <Footer />
      <BookingForm
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
      <FloatingCallButton />
    </div>
  );
};
