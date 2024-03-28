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
import InteriorDesignBanner from "../ui/InteriorDesignBanner.jsx";
import InteriordDesignSlides from "../ui/InteriorDesignSlides.jsx";
import InteriorCategories from "../ui/InteriorCategories.jsx";

// Images

function RinteriorDesign() {
  return (
    <div className="">
      <div className=" w-full border overflow-hidden bg-[#F2F2F2] mt-[9.5rem] ">
        {/* Start a Project section */}
        <InteriorDesignBanner />

        {/* SLide section */}
        <InteriordDesignSlides />

        {/* Interior Categories */}
        <InteriorCategories />

        <PosterComponent />

        {/* Get in Touch section */}
        <ContactForm />

        {/* Let’s Talk section */}
        <ContactSection />
      </div>
    </div>
  );
}

export default RinteriorDesign;
