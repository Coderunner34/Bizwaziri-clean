import { useState } from "react";
import { CleanServices } from "../components/CleanServices";
import { ServicesAndPricing } from "../components/ServicesAndPricing";
import { ServiceAgreement } from "../components/ServiceAgreement";

export default function Services() {
  const [isAgreementOpen, setAgreementOpen] = useState(false);

  const handleBookingClick = () => {
    // open the service agreement modal when booking is initiated
    setAgreementOpen(true);
  };

  const handleAgreementClose = () => {
    setAgreementOpen(false);
  };

  return (
    <>
      <CleanServices onBookingClick={handleBookingClick} />
      <ServicesAndPricing onBookingClick={handleBookingClick} />
      <ServiceAgreement isOpen={isAgreementOpen} onClose={handleAgreementClose} />
    </>
  );
}
