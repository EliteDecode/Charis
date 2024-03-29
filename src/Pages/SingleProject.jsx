import PosterComponent from "../ui/PosterComponent.jsx";
import ContactForm from "../ui/ContactForm.jsx";
import ContactSection from "../ui/ContactSection.jsx";

import ProjectBanner from "../ui/Projects/ProjectsBanner.jsx";
import ProjectsSlide from "../ui/Projects/ProjectsSlide.jsx";
import SingleProjectsBanner from "../ui/Projects/SingleProjectsBanner.jsx";
import SingleProjectInformation from "../ui/Projects/SingleProjectInformation.jsx";
import SingleProjectSlider from "../ui/Projects/SingleProjectSlider.jsx";
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
        <SingleProjectsBanner />

        {/* Project Information */}
        <SingleProjectInformation />

        {/* Single Project Slide */}
        <SingleProjectSlider />

        {/* Get in Touch section */}
        <ContactForm />

        {/* Let’s Talk section */}
        <ContactSection />
      </div>
    </div>
  );
}

export default Projects;
