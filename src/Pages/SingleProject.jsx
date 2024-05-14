import PosterComponent from "../ui/PosterComponent.jsx";
import ContactForm from "../ui/ContactForm.jsx";
import ContactSection from "../ui/ContactSection.jsx";

import ProjectBanner from "../ui/Projects/ProjectsBanner.jsx";
import ProjectsSlide from "../ui/Projects/ProjectsSlide.jsx";
import SingleProjectsBanner from "../ui/Projects/SingleProjectsBanner.jsx";
import SingleProjectInformation from "../ui/Projects/SingleProjectInformation.jsx";
import SingleProjectSlider from "../ui/Projects/SingleProjectSlider.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectById } from "@/features/projects/projectSlice.js";
import { useParams } from "react-router-dom";
import Loader from "@/utils/Loader.jsx";

// Images

function Projects() {
  const dispatch = useDispatch();
  const { singleProject, projects, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.projects);
  const { projectId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProjectById(projectId));
  }, []);

  const images = singleProject && JSON.parse(singleProject?.data?.images);

  return (
    <div className="">
      <div className=" w-full border overflow-hidden bg-[#F2F2F2] mt-[0.2rem] ">
        {/* Start a Project section */}
        <SingleProjectsBanner data={singleProject?.data} />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {" "}
            {/* Project Information */}
            <SingleProjectInformation
              data={singleProject?.data}
              projects={projects.data}
            />
            {/* Single Project Slide */}
            <SingleProjectSlider images={images} data={singleProject?.data} />
            {/* Get in Touch section */}
            <ContactForm />
            {/* Let’s Talk section */}
            <ContactSection />
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;
