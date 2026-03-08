export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  serviceAddress: string;
  selectedService: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  image?: React.ReactNode | string;
  bgColor?: string;
  accentColor?: string;
}
