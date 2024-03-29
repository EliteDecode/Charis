import PosterImage from "/poster-frames-mock-up-in-modern-room-interior-in-w-2023-11-27-05-06-31-utc 1.png";
import Group4Image from "/Group 4.png";
import { Carousel } from "react-responsive-carousel";

function PosterComponent() {
  return (
    <div className="  custom-container">
      <Carousel>
        <div className="poster sm:py-20 py-20">
          <div className=" flex flex-col items-center justify-center ">
            <p className="text-center sm:text-[15px] text-[13px] text-gray-300 sm:w-[60%] w-[95%] m-auto">
              At La Chariz Interiors, we are dedicated to creating remarkable
              spaces that elevate living and working experiences. Whether it's
              revamping a single room or designing an entire property, we are
              ready to bring our expertise and creativity to meet our client's
              unique needs and aspirations.
            </p>
            <div className="flex items-center space-x-6 mt-8">
              <p className="text-[#FFFFFF] sm:text-[18px] text-[13px] font-normal">
                Start a Project
              </p>
              <img
                src={Group4Image}
                alt=""
                className=" w-[13%]"
                style={{ width: "20%" }}
              />
            </div>
          </div>
        </div>
        <div className="poster sm:py-20 py-20">
          <div className=" flex flex-col items-center justify-center ">
            <p className="text-center sm:text-[15px] text-[13px] text-gray-300 sm:w-[60%] w-[95%] m-auto">
              At La Chariz Interiors, we are dedicated to creating remarkable
              spaces that elevate living and working experiences. Whether it's
              revamping a single room or designing an entire property, we are
              ready to bring our expertise and creativity to meet our client's
              unique needs and aspirations.
            </p>
            <div className="flex items-center space-x-6 mt-8">
              <p className="text-[#FFFFFF] sm:text-[18px] text-[13px] font-normal">
                Start a Project
              </p>
              <img
                src={Group4Image}
                alt=""
                className=" w-[13%]"
                style={{ width: "20%" }}
              />
            </div>
          </div>
        </div>
        <div className="poster sm:py-20 py-20">
          <div className=" flex flex-col items-center justify-center ">
            <p className="text-center sm:text-[15px] text-[13px] text-gray-300 sm:w-[60%] w-[95%] m-auto">
              At La Chariz Interiors, we are dedicated to creating remarkable
              spaces that elevate living and working experiences. Whether it's
              revamping a single room or designing an entire property, we are
              ready to bring our expertise and creativity to meet our client's
              unique needs and aspirations.
            </p>
            <div className="flex items-center space-x-6 mt-8">
              <p className="text-[#FFFFFF] sm:text-[18px] text-[13px] font-normal">
                Start a Project
              </p>
              <img
                src={Group4Image}
                alt=""
                className=" w-[13%]"
                style={{ width: "20%" }}
              />
            </div>
          </div>
        </div>
        <div className="poster sm:py-20 py-20">
          <div className=" flex flex-col items-center justify-center ">
            <p className="text-center sm:text-[15px] text-[13px] text-gray-300 sm:w-[60%] w-[95%] m-auto">
              At La Chariz Interiors, we are dedicated to creating remarkable
              spaces that elevate living and working experiences. Whether it's
              revamping a single room or designing an entire property, we are
              ready to bring our expertise and creativity to meet our client's
              unique needs and aspirations.
            </p>
            <div className="flex items-center space-x-6 mt-8">
              <p className="text-[#FFFFFF] sm:text-[18px] text-[13px] font-normal">
                Start a Project
              </p>
              <img
                src={Group4Image}
                alt=""
                className=" w-[13%]"
                style={{ width: "20%" }}
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default PosterComponent;
