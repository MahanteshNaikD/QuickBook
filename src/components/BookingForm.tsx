import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import type { BookingFormData } from '../types/booking';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const BookingForm = ({
  isOpen,
  onClose,
  selectedService = '',
}: BookingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    defaultValues: {
      selectedService: selectedService,
    },
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: BookingFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Booking submitted:', data);
      setShowSuccess(true);
      reset();

      // Close success message and form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  const validatePhone = (value: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(value) || 'Phone number must be 10 digits';
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-2 sm:p-4 sm:items-center"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full my-2 sm:my-4 max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-text">Book Your Service</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="text-gray-500 hover:text-text transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Form or Success Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="p-6 flex-1 min-h-0 overflow-y-auto"
            >
              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center mb-4"
                  >
                    <CheckCircle size={80} className="text-accent" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-text mb-2">
                    Booking Confirmed!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Thank you! Our technician will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Full Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold text-text mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName', {
                        required: 'Name is required',
                        minLength: {
                          value: 3,
                          message: 'Name must be at least 3 characters',
                        },
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Phone Number */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="block text-sm font-semibold text-text mb-2">
                      Phone Number (10 digits) *
                    </label>
                    <input
                      {...register('phoneNumber', {
                        required: 'Phone number is required',
                        validate: validatePhone,
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="9876543210"
                      maxLength={10}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Service Address */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-text mb-2">
                      Service Address *
                    </label>
                    <textarea
                      {...register('serviceAddress', {
                        required: 'Address is required',
                        minLength: {
                          value: 10,
                          message: 'Address must be at least 10 characters',
                        },
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="Street address, city, postal code"
                      rows={3}
                    />
                    {errors.serviceAddress && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.serviceAddress.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Service Selection */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="block text-sm font-semibold text-text mb-2">
                      Service *
                    </label>
                    <select
                      {...register('selectedService', {
                        required: 'Please select a service',
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a service...</option>
                      <option value="Washing Machine Repair">
                        Washing Machine Repair
                      </option>
                      <option value="Geyser Installation & Repair">
                        Geyser Installation & Repair
                      </option>
                      <option value="Water Purifier Service">
                        Water Purifier Service
                      </option>
                      <option value="Refrigerator Repair">
                        Refrigerator Repair
                      </option>
                    </select>
                    {errors.selectedService && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.selectedService.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Preferred Date */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-text mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      {...register('preferredDate', {
                        required: 'Date is required',
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    />
                    {errors.preferredDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Preferred Time */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <label className="block text-sm font-semibold text-text mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      {...register('preferredTime', {
                        required: 'Time is required',
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    />
                    {errors.preferredTime && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.preferredTime.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Additional Notes */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-text mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      {...register('additionalNotes')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="Any special instructions or additional information"
                      rows={3}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary bg-primary hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-bold text-lg transition-all"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Booking'}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
