import { EnhancedContact } from '../components/EnhancedContact';
import { CleanFAQ } from '../components/CleanFAQ';
import { CleanTestimonials } from '../components/CleanTestimonials';

interface ContactProps {
  onBookingClick: () => void;
}

export function Contact({ onBookingClick }: ContactProps) {
  return (
    <main>
      <div className="pt-20">
        <EnhancedContact onBookingClick={onBookingClick} />
        <CleanFAQ />
        <CleanTestimonials />
      </div>
    </main>
  );
}