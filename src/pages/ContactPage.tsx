import { EnhancedContact } from "../components/EnhancedContact";
import { CleanFAQ } from "../components/CleanFAQ";
import { CleanTestimonials } from "../components/CleanTestimonials";
import { useCallback } from "react";

export default function Contact() {
  const handleBookingClick = useCallback(() => {
    // TODO: implement booking click behavior (navigate, open modal, etc.)
  }, []);

  return (
    <>
      <EnhancedContact onBookingClick={handleBookingClick} />
      <CleanFAQ />
      <CleanTestimonials />
    </>
  );
}
