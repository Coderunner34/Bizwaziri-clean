import { CleanServices } from '../components/CleanServices';
import { ServicesAndPricing } from '../components/ServicesAndPricing';

interface ServicesPageProps {
  onBookingClick: () => void;
}

export default function ServicesPage({ onBookingClick }: ServicesPageProps) {
  return (
    <div className="pt-24">
      <CleanServices onBookingClick={onBookingClick} />
      <ServicesAndPricing onBookingClick={onBookingClick} />
    </div>
  );
}
