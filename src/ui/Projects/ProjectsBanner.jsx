import React from "react";

const ProjectBanner = () => {
  return (
    <>
      <div className="projectBg py-16">
        <div className="text-center">
          {" "}
          <h1 className="sm:text-[54px] text-white text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
            Projects
          </h1>{" "}
          <p className="text-[#fff]">Home / Projects</p>
          <a href="start-projects">
            <button className="px-4 py-2 rounded-md mt-5 border-[#FFC50A] border text-white">
              Start a Project
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectBanner;
