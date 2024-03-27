import StatisticsSection from "../ui/StatisticsSection.jsx";
import PosterComponent from "../ui/PosterComponent.jsx";
import ContactForm from "../ui/ContactForm.jsx";
import ContactSection from "../ui/ContactSection.jsx";
import AboutUSBanner from "../ui/AboutUSBanner.jsx";
import AboutVideo from "../ui/AboutVideo.jsx";
import { AboutUsContentCard } from "../ui/AboutUsContentCard.jsx";
import AboutUsExperience from "../ui/AboutUsExperience.jsx";
import OurTeam from "../ui/OurTeam.jsx";

// Images

function About() {
  return (
    <div className="">
      <div className=" w-full border overflow-hidden bg-[#F2F2F2] mt-[9.5rem]">
        {/* The Art of Beautiful Living section */}
        <AboutUSBanner />

        {/* Video representation */}
        <AboutVideo />

        {/* Projects Completed section */}
        <StatisticsSection />

        {/* Our Services section */}
        <AboutUsContentCard />

        {/* Experience section */}
        <AboutUsExperience />

        {/* Our team section */}
        <OurTeam />

        {/* Start a Project section */}
        <PosterComponent />

        {/* Get in Touch section */}
        <ContactForm />

        {/* Let’s Talk section */}
        <ContactSection />
      </div>
    </div>
  );
}

export default About;
