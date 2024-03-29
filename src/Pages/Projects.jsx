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
import ProjectBanner from "../ui/Projects/ProjectsBanner.jsx";
import ProjectsSlide from "../ui/Projects/ProjectsSlide.jsx";
import { useEffect } from "react";

// Images

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className=" w-full border overflow-hidden bg-[#F2F2F2] mt-[0.2rem] ">
        {/* Start a Project section */}
        <ProjectBanner />

        {/* SLide section */}
        <ProjectsSlide />

        <PosterComponent />

        {/* Get in Touch section */}
        <ContactForm />

        {/* Let’s Talk section */}
        <ContactSection />
      </div>
    </div>
  );
}

export default Projects;
