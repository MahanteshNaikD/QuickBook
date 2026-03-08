import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+919876543210';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-primary"
        >
          QuickBook
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-text hover:text-primary transition-colors">
            Services
          </a>
          <a href="#why-choose-us" className="text-text hover:text-primary transition-colors">
            Why Us
          </a>
          <a href="#contact" className="text-text hover:text-primary transition-colors">
            Contact
          </a>
          <a
            href={`tel:${phoneNumber}`}
            className="btn-primary flex items-center gap-2"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white p-4 md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-text hover:text-primary" onClick={() => setIsOpen(false)}>
                Services
              </a>
              <a href="#why-choose-us" className="text-text hover:text-primary" onClick={() => setIsOpen(false)}>
                Why Us
              </a>
              <a href="#contact" className="text-text hover:text-primary" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="btn-primary text-center flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
