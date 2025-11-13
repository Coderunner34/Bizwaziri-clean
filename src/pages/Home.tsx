import { CinematicHero } from '../components/CinematicHero';
import { BusinessCrisisSection } from '../components/BusinessCrisisSection';
import { AboutStory } from '../components/AboutStory';
import { TransformationCaseStudies } from '../components/TransformationCaseStudies';
import { ROICalculator } from '../components/ROICalculator';
import { CleanServices } from '../components/CleanServices';
import { ServicesAndPricing } from '../components/ServicesAndPricing';
import { TransformationProcess } from '../components/TransformationProcess';
import { EducationalHub } from '../components/EducationalHub';
import { CleanTestimonials } from '../components/CleanTestimonials';
import { CleanFAQ } from '../components/CleanFAQ';
import { EnhancedContact } from '../components/EnhancedContact';

interface HomeProps {
  onBookingClick: () => void;
}

export function Home({ onBookingClick }: HomeProps) {
  return (
    <main>
      <CinematicHero onBookingClick={onBookingClick} />
      <BusinessCrisisSection />
      <AboutStory />
      <TransformationCaseStudies />
      <ROICalculator />
      <section id="services">
        <CleanServices onBookingClick={onBookingClick} />
        <ServicesAndPricing onBookingClick={onBookingClick} />
      </section>
      <TransformationProcess />
      <section id="education">
        <EducationalHub />
      </section>
      <section id="testimonials">
        <CleanTestimonials />
      </section>
      <section id="faq">
        <CleanFAQ />
      </section>
      <EnhancedContact onBookingClick={onBookingClick} />
    </main>
  );
}