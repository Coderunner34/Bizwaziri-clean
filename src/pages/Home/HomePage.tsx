import { CinematicHero } from '../../components/CinematicHero';
import { BusinessCrisisSection } from '../../components/BusinessCrisisSection';
import { ROICalculator } from '../../components/ROICalculator';
import { CleanServices } from '../../components/CleanServices';
import { CleanTestimonials } from '../../components/CleanTestimonials';

interface HomePageProps {
  onBookingClick: () => void;
}

export function HomePage({ onBookingClick }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <section id="home-hero">
        <CinematicHero onBookingClick={onBookingClick} />
      </section>
      
      <section id="crisis">
        <BusinessCrisisSection />
      </section>
      
      <section id="calculator">
        <ROICalculator />
      </section>
      
      <section id="services-overview">
        <CleanServices onBookingClick={onBookingClick} />
      </section>
      
      <section id="testimonials">
        <CleanTestimonials />
      </section>
    </div>
  );
}