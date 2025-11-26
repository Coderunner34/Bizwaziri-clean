import { EducationalHub } from '../../components/EducationalHub';
import { HowToGenerateSales } from '../../components/HowToGenerateSales';
import { FAQ } from '../../components/FAQ'; 

export function EducationPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section for Education Page */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to grow your business with our proven digital strategies and educational resources
          </p>
        </div>
        
        {/* Add IDs to each section */}
        <section id="guides">
          <EducationalHub />
        </section>
        
        <section id="sales" className="mt-16">
          <HowToGenerateSales />
        </section>
        
        <section id="faq" className="mt-16">
          <FAQ />
        </section>
      </div>
    </div>
  );
}