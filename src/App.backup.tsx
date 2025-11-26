import { useState, useEffect } from 'react';
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
import { BackToTop } from './components/BackToTop';
import { QuickContact } from './components/QuickContact';
import { ProgressIndicator } from './components/ProgressIndicator';
import { HowToGenerateSales } from './components/HowToGenerateSales'; 

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isServiceAgreementOpen, setIsServiceAgreementOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };




  return (
    <div className="min-h-screen bg-white">
      {/* Toast notifications */}
      <Toaster position="top-right" />

      {/* Progress Indicator */}
      <ProgressIndicator />

      {/* Navigation */}
      <ProfessionalNav 
        onBookingClick={() => setIsBookingModalOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <section id="home">
          <CinematicHero onBookingClick={() => setIsBookingModalOpen(true)} />
        </section>

        {/* About & Story */}
        <section id="about">
          <AboutStory />
        </section>

       

        {/* Business Crisis */}
        <section id="success-stories">
          <BusinessCrisisSection />
        </section>

        {/* Case Studies */}
        <section id="case-studies">
          <TransformationCaseStudies />
        </section>

        {/* ROI Calculator */}
        <section id="roi-calculator">
          <ROICalculator />
        </section>

        {/* Services */}
        <section id="services-overview">
          <CleanServices onBookingClick={() => setIsBookingModalOpen(true)} />
        </section>

        {/* Pricing & Agreement */}
        <section id="pricing">
          { <ServicesAndPricing 
            onBookingClick={() => setIsBookingModalOpen(true)}
            onDownloadAgreement={() => setIsServiceAgreementOpen(true)}
          /> }
        </section>

        {/* Process */}
        <section id="process">
          <TransformationProcess />
        </section>

        {/* Education */}
        <section id="education">
          <EducationalHub />
        </section>

         {/* How to Generate Sales */}
        <section id="how-to-generate-sales">
          <HowToGenerateSales />
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <CleanTestimonials />
        </section>

        {/* FAQ */}
        <section id="faq">
          <CleanFAQ />
        </section>

        {/* Contact */}
        <section id="contact">
          <EnhancedContact onBookingClick={() => setIsBookingModalOpen(true)} />
        </section>

        {/* Quick Contact Floating Button */}
        <QuickContact onBookingClick={() => setIsBookingModalOpen(true)} />

        {/* Service Agreement Modal */}
        <ServiceAgreement
          isOpen={isServiceAgreementOpen}
          onClose={() => setIsServiceAgreementOpen(false)}
        />
      </main>

      {/* Footer */}
      {
       <ProfessionalFooter onNavigate={scrollToSection} /> }

      {/* Back to Top */}
      <BackToTop isVisible={showBackToTop} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}