import { ServicesAndPricing } from '../../components/ServicesAndPricing';
import { ROICalculator } from '../../components/ROICalculator';
import { HowToGenerateSales } from '../../components/HowToGenerateSales';

interface ServicesPageProps {
  onBookingClick: () => void;
  onDownloadAgreement: () => void;
}

export function ServicesPage({ onBookingClick, onDownloadAgreement }: ServicesPageProps) {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section for Services Page */}
        <section id="services-hero" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete digital transformation packages designed to grow your Kenyan business
          </p>
        </section>
        
        <section id="pricing">
          <ServicesAndPricing 
            onBookingClick={onBookingClick}
            onDownloadAgreement={onDownloadAgreement}
          />
        </section>
        
        <section id="services-calculator" className="mt-16">
          <ROICalculator />
        </section>
        
        <section id="sales-strategies" className="mt-16">
          <HowToGenerateSales />
        </section>
      </div>
    </div>
  );
}