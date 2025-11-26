import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ProfessionalNav } from './components/ProfessionalNav';
import { ProfessionalFooter } from './components/ProfessionalFooter';
import { BookingModal } from './components/BookingModal';
import { ServiceAgreement } from './components/ServiceAgreement';
import { BackToTop } from './components/BackToTop';
import { QuickContact } from './components/QuickContact';
import { ProgressIndicator } from './components/ProgressIndicator';

// Import Pages
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';
import { ServicesPage } from './pages/Services/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudies/CaseStudiesPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { PageTransition } from './components/PageTransition';
import { EducationPage } from './pages/Education/EducationPage';





function AppContent() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isServiceAgreementOpen, setIsServiceAgreementOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleDownloadAgreement = () => {
    setIsServiceAgreementOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <ProgressIndicator />

      {/* Navigation - Shows on ALL pages */}
      <ProfessionalNav onBookingClick={handleBookingClick} />

      {/* Main Content with Routes - DIFFERENT content per page */}
      <main>
<Routes>
  <Route 
    path="/" 
    element={
      <PageTransition>
        <HomePage onBookingClick={handleBookingClick} />
      </PageTransition>
    } 
  />
  <Route 
    path="/about" 
    element={
      <PageTransition>
        <AboutPage />
      </PageTransition>
    } 
  />
  <Route 
    path="/services" 
    element={
      <PageTransition>
        <ServicesPage 
          onBookingClick={handleBookingClick}
          onDownloadAgreement={handleDownloadAgreement}
        />
      </PageTransition>
    } 
  />
  <Route 
    path="/case-studies" 
    element={
      <PageTransition>
        <CaseStudiesPage />
      </PageTransition>
    } 
  />
  <Route 
    path="/education" 
    element={
      <PageTransition>
        <EducationPage />
      </PageTransition>
    } 
  />
  <Route 
    path="/contact" 
    element={
      <PageTransition>
        <ContactPage onBookingClick={handleBookingClick} />
      </PageTransition>
    } 
  />
</Routes>
      </main>

      {/* Global Components - Show on ALL pages */}
      <QuickContact onBookingClick={handleBookingClick} />
      <ProfessionalFooter />
      <BackToTop isVisible={showBackToTop} />

      {/* Modals - Work across ALL pages */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      <ServiceAgreement
        isOpen={isServiceAgreementOpen}
        onClose={() => setIsServiceAgreementOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}