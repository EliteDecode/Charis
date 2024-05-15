import StatisticsSection from "../ui/StatisticsSection.jsx";
import ImageGallery from "../ui/ImageGallery.jsx";
import RecentProjects from "../ui/RecentProjects.jsx";

import ShopInteriorAccessories from "../ui/ShopInteriorAccessories.jsx";
import PosterComponent from "../ui/PosterComponent.jsx";
import ContactForm from "../ui/ContactForm.jsx";
import ContactSection from "../ui/ContactSection.jsx";
import ProjectGalleryHome from "../ui/ProjectGalleryHome.jsx";
import TheArtOfBeautifulLiving from "../ui/TheArtOfBeautifulLiving.jsx";
import ServicesSection from "../ui/ServicesSection.jsx";
import AboutSection from "../ui/About/AboutSection.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGallery } from "@/features/gallery/gallerySlice.js";
import { getProjects } from "@/features/projects/projectSlice.js";
import { getProducts } from "@/features/products/productSlice.js";

// Images

function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getGallery());
    dispatch(getProjects());
    dispatch(getProducts());
  }, []);
  return (
    <div className="">
      <div className=" w-full border overflow-hidden bg-[#F2F2F2] mt-[0.2rem]">
        {/* The Art of Beautiful Living section */}
        <TheArtOfBeautifulLiving />

        {/* Our Services section */}
        <ServicesSection />

        {/* About Chariz Interiors section */}
        <AboutSection />

        {/* Projects Completed section */}
        <StatisticsSection />

        {/* Chariz section */}
        <ImageGallery />

        {/* Our Recent Projects section */}
        <RecentProjects />

        {/* Project Gallery section */}
        <ProjectGalleryHome />

        {/* Shop Interior Accessories section */}
        <ShopInteriorAccessories />

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

export default Homepage;
