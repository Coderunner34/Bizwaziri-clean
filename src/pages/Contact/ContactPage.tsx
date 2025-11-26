import { EnhancedContact } from '../../components/EnhancedContact';
import { CleanFAQ } from '../../components/CleanFAQ';

interface ContactPageProps {
  onBookingClick: () => void;
}

export function ContactPage({ onBookingClick }: ContactPageProps) {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="contact-form">
          <EnhancedContact onBookingClick={onBookingClick} />
        </section>
        
        <section id="faq" className="mt-16">
          <CleanFAQ />
        </section>
      </div>
    </div>
  );
}