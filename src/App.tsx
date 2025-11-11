import { useState } from 'react';
import { Toaster } from 'sonner';
import { ProfessionalNav } from './components/ProfessionalNav';
import { CinematicHero } from './components/CinematicHero';
import { BusinessCrisisSection } from './components/BusinessCrisisSection';
import { AboutStory } from './components/AboutStory';
import { ROICalculator } from './components/ROICalculator';
import { TransformationCaseStudies } from './components/TransformationCaseStudies';
import { TransformationProcess } from './components/TransformationProcess';
import { EducationalHub } from './components/EducationalHub';
import { CleanServices } from './components/CleanServices';
import { ServicesAndPricing } from './components/ServicesAndPricing';
import { CleanTestimonials } from './components/CleanTestimonials';
import { CleanFAQ } from './components/CleanFAQ';
import { EnhancedContact } from './components/EnhancedContact';
import { ServiceAgreement } from './components/ServiceAgreement';
import { ProfessionalFooter } from './components/ProfessionalFooter';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isServiceAgreementOpen, setIsServiceAgreementOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Toast notifications */}
      <Toaster position="top-right" />

      {/* Navigation */}
      <ProfessionalNav onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <CinematicHero onBookingClick={() => setIsBookingModalOpen(true)} />

        {/* Business Crisis / About */}
        <BusinessCrisisSection />
        <AboutStory />

        {/* Transformation Case Studies */}
        <TransformationCaseStudies />

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Services & Pricing */}
        <section id="services">
          <CleanServices onBookingClick={() => setIsBookingModalOpen(true)} />
          <ServicesAndPricing onBookingClick={() => setIsBookingModalOpen(true)} />
        </section>

        {/* Transformation Process */}
        <TransformationProcess />

        {/* Educational Hub */}
        <section id="education">
          <EducationalHub />
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <CleanTestimonials />
        </section>

        {/* FAQ */}
        <section id="faq">
          <CleanFAQ />
        </section>

        {/* Contact & Agreement */}
        <EnhancedContact onBookingClick={() => setIsBookingModalOpen(true)} />
        <ServiceAgreement
          isOpen={isServiceAgreementOpen}
          onClose={() => setIsServiceAgreementOpen(false)}
        />
      </main>

      {/* Footer */}
      <ProfessionalFooter />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
