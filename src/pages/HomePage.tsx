import { CinematicHero } from "../components/CinematicHero";
import { BusinessCrisisSection } from "../components/BusinessCrisisSection";
import { AboutStory } from "../components/AboutStory";
import { TransformationCaseStudies } from "../components/TransformationCaseStudies";
import { ROICalculator } from "../components/ROICalculator";
import { TransformationProcess } from "../components/TransformationProcess";
import { EducationalHub } from "../components/EducationalHub";
import { CleanTestimonials } from "../components/CleanTestimonials";
import { CleanFAQ } from "../components/CleanFAQ";
import { EnhancedContact } from "../components/EnhancedContact";

export default function Home() {
  const handleBookingClick = () => {
    // implement booking behavior here (open modal, navigate, etc.)
    console.log("Booking clicked");
  };

  return (
    <>
      <CinematicHero onBookingClick={handleBookingClick} />
      <BusinessCrisisSection />
      <AboutStory />
      <TransformationCaseStudies />
      <ROICalculator />
      <TransformationProcess />
      <EducationalHub />
      <CleanTestimonials />
      <CleanFAQ />
      <EnhancedContact onBookingClick={handleBookingClick} />
    </>
  );
}
