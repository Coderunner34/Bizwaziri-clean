import { TransformationCaseStudies } from '../../components/TransformationCaseStudies';
import { CleanTestimonials } from '../../components/CleanTestimonials';

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="success-stories">
          <TransformationCaseStudies />
        </section>
        
        <section id="testimonials" className="mt-16">
          <CleanTestimonials />
        </section>
      </div>
    </div>
  );
}