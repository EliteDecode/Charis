import Group4_1Image from "/Group 4 (1).png";
import ProjectImage1 from "/cb0c4888461127.png";
import ProjectImage2 from "/cb0c4888461127 (1).png";
import ProjectImage3 from "/cb0c4888461127 (2).png";

import Carousel from "react-multi-carousel";

import groupIcon from "/Group 4 (1).png";
import { responsiveCarousel, responsiveCarousel2 } from "../../utils";
import { Link } from "react-router-dom";

const ProjectsSlide = () => {
  return (
    <div className="w-full mt-12 py-16 space-y-8">
      {" "}
      <div className="custom-container ">
        <p className="text-center text-[25px] mb-12">Interior Designs</p>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsiveCarousel}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          className="space-x-4"
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          <Link to="/interior">
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage1} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/interior">
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage2} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/interior">
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage3} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/interior">
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage3} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
        </Carousel>
      </div>
      <div className="custom-container ">
        <p className="text-center text-[25px] mb-12">Exterior Designs</p>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsiveCarousel}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          className="space-x-4"
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          <Link to="/projects/5">
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage1} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/projects/5">
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage2} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage3} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage3} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
        </Carousel>
      </div>
      <div className="custom-container ">
        <p className="text-center text-[25px] mb-12">Furniture Designs</p>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsiveCarousel}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          className="space-x-4"
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          <Link to="/projects/5">
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage1} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/projects/5">
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage2} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/projects/5">
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage3} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/projects/5">
            <div className="w-[90%] m-auto ">
              <img src={ProjectImage3} alt="" />
              <div className="flex items-center mt-3 justify-between mb-10">
                <h1 className="sm:text-[16px] text-[12px] ">Bon Hotels</h1>
                <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
                  <p className="text-black sm:text-[16px] text-[12px] font-normal">
                    View Project
                  </p>
                  <img
                    src={groupIcon}
                    alt=""
                    className="cursor-pointer sm:w-[25%] w-[20%]"
                  />
                </div>
              </div>
            </div>
          </Link>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsSlide;
