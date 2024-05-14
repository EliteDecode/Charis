import Group4_1Image from "/Group 4 (1).png";
import ProjectImage1 from "/cb0c4888461127.png";
import ProjectImage2 from "/cb0c4888461127 (1).png";
import ProjectImage3 from "/cb0c4888461127 (2).png";

import Carousel from "react-multi-carousel";

import groupIcon from "/Group 4 (1).png";
import { responsiveCarousel, responsiveCarousel2 } from "../../utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectsSlide = () => {
  const { projects, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.projects
  );

  const CustomDot = ({ next, onClick, ...rest }) => {
    const { index, active } = rest;

    return (
      <>
        <button
          className={`custom-dot ${
            active ? "bg-yellow-500 px-4  py-2 rounded-full" : "bg-transparent"
          } text-black mx-5 text-[17px]  `}
          onClick={() => onClick()}
          style={{ fontFamily: "nexa" }}>
          {index + 1}
        </button>
      </>
    );
  };

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
          customDot={<CustomDot />}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          {projects?.data?.map((item, index) => {
            const images = JSON.parse(item?.images);
            return (
              <Link to={`/projects/${item.id}`}>
                <div className="p-3">
                  <div className="sm:h-[80vh] h-[50vh]" key={index}>
                    <img
                      src={images[0]}
                      alt=""
                      className="w-full border rounded-md shadow-md h-[70%]"
                    />
                    <div className="flex items-center mt-3 justify-between mb-10">
                      <h1 className="sm:text-[16px] text-[12px] ">
                        {" "}
                        {item?.name?.length > 10
                          ? `${item.name.slice(0, 10)}...`
                          : item?.name}
                      </h1>
                      <div className="flex justify-end items-center sm:gap-6 gap-1 cursor-pointer">
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
                    <div className="mb-16"></div>
                  </div>
                </div>
              </Link>
            );
          })}
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
          customDot={<CustomDot />}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          {projects?.data?.map((item, index) => {
            const images = JSON.parse(item?.images);
            return (
              <Link to={`/projects/${item.id}`}>
                <div className="p-3">
                  <div className="sm:h-[80vh] h-[50vh]" key={index}>
                    <img
                      src={images[0]}
                      alt=""
                      className="w-full border rounded-md shadow-md h-[70%]"
                    />
                    <div className="flex items-center mt-3 justify-between mb-10">
                      <h1 className="sm:text-[16px] text-[12px] ">
                        {" "}
                        {item?.name?.length > 10
                          ? `${item.name.slice(0, 10)}...`
                          : item?.name}
                      </h1>
                      <div className="flex justify-end items-center sm:gap-6 gap-1 cursor-pointer">
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
                    <div className="mb-16"></div>
                  </div>
                </div>
              </Link>
            );
          })}
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
          customDot={<CustomDot />}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          {projects?.data?.map((item, index) => {
            const images = JSON.parse(item?.images);
            return (
              <Link to={`/projects/${item.id}`}>
                <div className="p-3">
                  <div className="sm:h-[80vh] h-[50vh]" key={index}>
                    <img
                      src={images[0]}
                      alt=""
                      className="w-full border rounded-md shadow-md h-[70%]"
                    />
                    <div className="flex items-center mt-3 justify-between mb-10">
                      <h1 className="sm:text-[16px] text-[12px] ">
                        {" "}
                        {item?.name?.length > 10
                          ? `${item.name.slice(0, 10)}...`
                          : item?.name}
                      </h1>
                      <div className="flex justify-end items-center sm:gap-6 gap-1 cursor-pointer">
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
                    <div className="mb-16"></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsSlide;
