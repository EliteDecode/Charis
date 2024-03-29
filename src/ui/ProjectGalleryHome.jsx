import ViewMoreImage from "/Group 4 (1).png";
import TabsGallery from "../helpers/TabsGallary";

function ProjectGalleryHome() {
  return (
    <div className="sm:py-16 py-5  custom-container">
      <h1 className=" text-center sm:text-[200px] text-[80px] text-[#FFC50A1A] cursor-default">
        GALLERY
      </h1>
      <div className="text-center sm:-mt-36 -mt-16">
        <h1 className="sm:text-[54px] text-[36px] font-bold text-[#000]">
          Project Gallery
        </h1>
        <p className="sm:text-[17px] text-[14px] sm:w-[60%] w-[90%] m-auto text-center text-[#777777]">
          We will continue to grow and evolve Chariz Interiors for the
          betterment of our clients and our people. Vision includes the
          continual expansion.
        </p>
      </div>
      <div className="mt-5">
        <TabsGallery />
      </div>
      <div className="flex items-center justify-center gap-6 cursor-pointer mt-5">
        <p className="text-black text-[18px] font-normal">View More</p>
        <img src={ViewMoreImage} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default ProjectGalleryHome;
