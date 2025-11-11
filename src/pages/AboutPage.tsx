import { CleanServices } from "../components/CleanServices";
import { ROICalculator } from "../components/ROICalculator";
import { TransformationProcess } from "../components/TransformationProcess";

export function ServicesPage() {
  const handleBookingClick = () => {
    // handle booking click (implement actual behavior here)
    console.log("Booking clicked");
  };

  return (
    <>
      <ROICalculator />
      <CleanServices onBookingClick={handleBookingClick} />
      <TransformationProcess />
    </>
  );
}
