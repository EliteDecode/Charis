import StatisticsSection from "../ui/StatisticsSection.jsx";
import ImageGallery from "../ui/ImageGallery.jsx";
import RecentProjects from "../ui/RecentProjects.jsx";

import ShopInteriorAccessories from "../ui/ShopInteriorAccessories.jsx";
import PosterComponent from "../ui/PosterComponent.jsx";
import ContactForm from "../ui/ContactForm.jsx";
import ContactSection from "../ui/ContactSection.jsx";
import ServiceBanner from "../ui/ServiceBanner.jsx";
import { AboutUsContentCard } from "../ui/AboutUsContentCard.jsx";
import StepsOfUse from "../ui/StepsOfService.jsx";

// Images

function Services() {
  return (
    <div className="">
      <div className=" w-full border overflow-hidden bg-[#F2F2F2] mt-[9.5rem] ">
        {/* Start a Project section */}
        <ServiceBanner />

        {/* Steps of use */}
        <StepsOfUse />

        <PosterComponent />
        {/* Get in Touch section */}
        <ContactForm />

        {/* Let’s Talk section */}
        <ContactSection />
      </div>
    </div>
  );
}

export default Services;
