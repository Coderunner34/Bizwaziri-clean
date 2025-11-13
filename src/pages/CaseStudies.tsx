import { TransformationCaseStudies } from '../components/TransformationCaseStudies';
import { CleanTestimonials } from '../components/CleanTestimonials';
import { ROICalculator } from '../components/ROICalculator';

export function CaseStudies() {
  return (
    <main>
      <div className="pt-20">
        <TransformationCaseStudies />
        <CleanTestimonials />
        <ROICalculator />
      </div>
    </main>
  );
}