import StatisticsSection from "../ui/StatisticsSection.jsx";
import ImageGallery from "../ui/ImageGallery.jsx";
import RecentProjects from "../ui/RecentProjects.jsx";

import ShopInteriorAccessories from "../ui/ShopInteriorAccessories.jsx";
import PosterComponent from "../ui/PosterComponent.jsx";
import ContactForm from "../ui/ContactForm.jsx";
import ContactSection from "../ui/ContactSection.jsx";
import ServiceBanner from "../ui/ServiceBanner.jsx";
import { AboutUsContentCard } from "../ui/About/AboutUsContentCard.jsx";
import StepsOfUse from "../ui/StepsOfService.jsx";
import ConsultationBanner from "../ui/ConsultationBanner.jsx";
import ConsultationExpections from "../ui/ConsultationExpections.jsx";
import BookConsultationIntro from "../ui/BookConsultationIntro.jsx";
import HireOurTeam from "../ui/HireOurTeam.jsx";
import { useEffect } from "react";

// Images

function Consultation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className=" w-full border overflow-hidden bg-[#F2F2F2] mt-[0.2rem] ">
        {/* Banner */}
        <ConsultationBanner />

        {/* Consultation Expectations*/}
        <ConsultationExpections />

        {/* Book consultation */}
        <BookConsultationIntro />

        {/* Hire our team */}
        <HireOurTeam />
        {/* Get in Touch section */}
        <ContactForm />

        {/* Let’s Talk section */}
        <ContactSection />
      </div>
    </div>
  );
}

export default Consultation;
